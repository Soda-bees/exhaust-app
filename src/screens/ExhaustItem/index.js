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
import { colors, sizes } from '../../services';
import formatToJSON from '../../services/utilities/JsonLog';
import ImageSLider from '../../components/ExhaustItemImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartrRedux, increasPreviousQty, selectUserData } from '../../store/userData';
import { addToCart } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';

export default function ExhaustItem({ route, navigation }) {

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
    setSound(data?.sound)
    setDescription(data?.description)
    setPrice(`$${data?.price}.00`)
    setProductQty(data?.quantity)
    setProductImages(data?.images)
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
            // url: 'https://res.cloudinary.com/doohobw9k/video/upload/v1703142572/Exhaust/Sounds/tjcgdru9vkz4xduv26fv.mp3',
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
        {/* <View style={{
          backgroundColor:'red',
          height:sizes.screenHeight * 0.9
        }}> */}

        <ScrollView>
        <ImageSLider productImages={productImages} />
        <View style={styles.bottomContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.row}>
              <View>
                <Text style={styles.rowText}>{data?.brand?.name}</Text>
                <Text style={styles.rowText4}>{data?.name}</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => quantity > 0 && !loader && setQuantity(quantity - 1)}
                >
                  <Text style={styles.textQuantityMinus}>_</Text>
                </TouchableOpacity>
                <Text style={styles.textQuantity}>
                  {quantity}
                </Text>
                <TouchableOpacity
                  onPress={() => !loader && setQuantity(quantity + 1)}
                >
                  <Text style={styles.textQuantityPlus}>+</Text>
                </TouchableOpacity>
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
            {/* <View style={styles.row2}>
              <Image source={images.star} style={styles.starImg} />
              <Text style={styles.rowText3}>(320 Review)</Text>
            </View> */}
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
              <View style={styles.verticalLine}></View>
              {
                quantity > 0 ?
                  loader ? <View style={styles.row3}
                  // onPress={() => { quantity > 0 && !loader && handleAddToCart() }}
                  //  onPress={() => navigation.navigate('MyCart')}
                  >
                    <ActivityIndicator color={"white"} />
                    <Text style={styles.btnText}>Add to Cart</Text>
                  </View> :
                    <TouchableOpacity style={styles.row3}
                      onPress={() => { quantity > 0 && !loader && handleAddToCart() }}
                    //  onPress={() => navigation.navigate('MyCart')}
                    >
                      <Image source={images.cartIconTwo} style={styles.cartImg} />
                      <Text style={styles.btnText}>Add to Cart</Text>
                    </TouchableOpacity>
                  :
                  <View style={styles.btnDis}
                  >
                    <Image source={images.cartIconTwo} style={styles.cartImg} />
                    <Text style={styles.btnText}>Add to Cart</Text>
                  </View>
              }

            </View>
          </View>
        </View>
        </ScrollView>
        {/* </View> */}

      </ImageBackground>
    </SafeAreaView>
  );
}
