import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import TrackPlayer, { useProgress, Event } from 'react-native-track-player';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../../services';
import formatToJSON from '../../services/utilities/JsonLog';
import ImageSLider from '../../components/ExhaustItemImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartrRedux, increasPreviousQty, selectUserData } from '../../store/userData';
import { addToCart } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';

export default function AddToCartDetails({ route, navigation }) {

    const dispatch = useDispatch()

    const userData = useSelector(selectUserData)
    const authToken = useSelector(selectAuthToken)

    const [soundPlayBtn, setSoundPlayBtn] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [noProgess, setNoProgess] = useState(false);
    const [audioData, setAudioData] = useState();
    const [sound, setSound] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [productQty, setProductQty] = useState()
    const [productImages, setProductImages] = useState([])
    const [loader, setLoader] = useState(false)

    const { data } = route?.params;

    useEffect(() => {
        console.log(formatToJSON(data.qty));
        setSound(data?.product?.sound)
        setDescription(data?.product?.description)
        setPrice(`$${data?.product?.price}.00`)
        setProductQty(data?.product?.quantity)
        setProductImages(data?.product?.images)
        setQuantity(data?.qty)
    }, [data])

    useEffect(() => {
        if (Math.ceil(progress.buffered) == Math.ceil(progress.position)) {
            setSoundPlayBtn(!true);
        }
    }, [progress]);

    useEffect(() => {
        const updateProgress = setInterval(async () => {
            const position = await TrackPlayer.getPosition();
            setCurrentPosition(position);
        }, 1000);
        return () => clearInterval(updateProgress);
    }, []);

    const [isPlaying, setIsPlaying] = useState(false);
    const progress = useProgress();

    useEffect(() => {

        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.addEventListener(Event.PlaybackState, ({ state }) => {
                if (state === TrackPlayer.STATE_ENDED) {
                    setIsPlaying(false);
                }
            });
        });

        return () => {
            TrackPlayer?.removeEventListener(Event.PlaybackState);
        };
    }, []);

    useEffect(() => {
        if (
            progress.position > 0 &&
            Math.ceil(progress.position) === Math.ceil(progress.duration)
        ) {
            console.log(progress, 'chlgya hun bhai-------->>>');
            setSoundPlayBtn(!true);
            setIsPlaying(false);
            setNoProgess(true);
        } else {
            setNoProgess(false);
        }
    }, [progress]);

    const handleSound = async () => {
        try {
            if (isPlaying) {
                await TrackPlayer.pause();
                setIsPlaying(false);
            } else {
                if (Math.ceil(progress.position) === Math.ceil(progress.duration)) {
                    console.log('works------------------->>>');
                    await TrackPlayer.reset();
                    await TrackPlayer.add({
                        url: sound
                    });
                }
                await TrackPlayer.play();
                setIsPlaying(true);
            }
        } catch (error) {
            console.error('Error handling playback:', error);
        }
    };

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener('focus', () => {
        });

        const unsubscribeBlur = navigation.addListener('blur', () => {
            TrackPlayer.stop();
            TrackPlayer.reset();
        });

        return () => {
            unsubscribeFocus();
            unsubscribeBlur();

            TrackPlayer.stop();
            TrackPlayer.reset();
        };
    }, [navigation]);

    const handleAddToCart = async () => {
        setLoader(true)
        try {
            const productId = data?._id
            const qty = quantity
            const body = {
                productId,
                qty
            }
            const response = await addToCart(authToken, productId, qty)
            console.log(response);
            if (response.success) {
                if (response.message === 'Add product in cart successfully.') {
                    const cartItem = response.cartItem
                    dispatch(addToCartrRedux(cartItem))
                    setLoader(false)
                } else {
                    console.log(response.message);
                    dispatch(increasPreviousQty({ _id: productId, qty }))
                    setLoader(false)
                }
            } else {
                console.log(response.message);
                setLoader(false)
            }
        } catch (error) {
            console.log(error.message);
            setLoader(false)
        }
    }

    return (
        <SafeAreaView>
            <ImageBackground style={styles.container} source={images.bg}>
                <Header backImage={images.backIcon} addToCartImage={images.cartIcon} navigate={'Store'} />
                <ScrollView>

                <ImageSLider productImages={productImages} />
                <View style={styles.bottomContainer}>
                    <View style={styles.mainContainer}>
                        <View style={styles.row}>
                            <View>
                                <Text style={styles.rowText}>{data?.product?.brand?.name}</Text>
                                <Text style={styles.rowText4}>{data?.product?.name}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.rowText2}>{data.label}</Text>
                            {
                                productQty > 1 &&
                                <View>
                                    <Text style={styles.rowText3}>Available in stock</Text>
                                </View>
                            }
                        </View>
                        <Text style={styles.heading}>Sound Play</Text>

                        <View style={styles.progressBarView}>
                            <TouchableOpacity
                                onPress={() => {
                                    setSoundPlayBtn(!soundPlayBtn);
                                    handleSound();
                                }}>
                                <Image
                                    source={soundPlayBtn ? images.soundPause : images.soundPlay}
                                    style={styles.soundIconSty}
                                />
                            </TouchableOpacity>
                            <ProgressBar
                                progress={
                                    !noProgess && progress?.duration
                                        ? currentPosition / progress.duration
                                        : 0
                                }
                                color={colors.btnBlue}
                                style={styles.progressBar}
                            />
                        </View>

                        <Text style={styles.heading}>Description</Text>
                        <Text style={styles.info}>{description}</Text>
                        <View style={styles.bottomRow}>
                            <View>
                                <Text style={styles.info2}>Total Price</Text>
                                <Text style={styles.rowText}>{price}</Text>
                            </View>
                            <View>
                                <Text style={styles.info2}>Quantity</Text>
                                <Text style={styles.qtyText}>{quantity}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>

            </ImageBackground>
        </SafeAreaView>
    );
}
