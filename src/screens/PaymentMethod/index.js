import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { useState } from 'react';
import { styles } from './style';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCardRedux, selectCardRedux, selectUserData } from '../../store/userData';
import { colors } from '../../services';
import { deleteCard, selectCard } from '../../services/config/API';
import { selectAuthToken } from '../../store/authToken';

export default function PaymentMethod({ navigation }) {

  const dispatch = useDispatch()
  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)

  const [deleteLoader, setDeleteLoader] = useState([])
  const [selectLoader, setSelectLoader] = useState([])

  const handleDeleteCard = async (_id) => {
    try {
      setDeleteLoader([...deleteLoader, _id])
      const response = await deleteCard(authToken, _id)
      console.log(response);
      if (response.success) {
        setDeleteLoader(deleteLoader.filter((id) => id !== _id))
        dispatch(deleteCardRedux({ _id }))
      } else {
        console.log(response.message);
        setDeleteLoader(deleteLoader.filter((id) => id !== _id))
      }
    } catch (error) {
      console.log(error.message);
      setDeleteLoader(deleteLoader.filter((id) => id !== _id))
    }
  }

  const handleSelectCard = async (_id) => {
    try {
      setSelectLoader([...selectLoader, _id])
      const response = await selectCard(authToken, _id)
      if (response.success) {
        dispatch(selectCardRedux({ _id }))
        setSelectLoader(selectLoader.filter((id) => id !== _id))
        navigation.navigate('Checkout')
      } else {
        console.log(response.message);
        setSelectLoader(selectLoader.filter((id) => id !== _id))
      }
    } catch (error) {
      console.log(error.message);
      setSelectLoader(selectLoader.filter((id) => id !== _id))
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header title={'Payment methods '} backImage={images.backIcon} />
          <View style={styles.mainContainer}>
            <Text style={styles.headingSty}>Your Payment cards</Text>
            {
              userData.cards.length > 0 ?
                <ScrollView showsVerticalScrollIndicator={false}>
                  {
                    userData.cards.map((item, index) => {
                      return (
                        <View key={index}>
                          <ImageBackground
                            resizeMode='contain'
                            tintColor={item.selected ? colors.btnBlue : colors.disabledBg3}
                            source={images.cardBlue}
                            // source={images.cardTwo}  
                            style={styles.card}>
                            <Text style={styles.cardNo}>{`**** **** **** ${String(item.cardNumber).substring(String(item.cardNumber).length - 4)}`}</Text>
                            <View style={styles.detailsContainer}>
                              <View>
                                <Text style={styles.text}>Card Holder Name</Text>
                                <Text style={styles.text2}>{item.name}</Text>
                              </View>
                              <View>
                                <Text style={styles.text}>Expiry Date</Text>
                                <Text style={styles.text2}>{item.expireDate}</Text>
                              </View>
                            </View>
                          </ImageBackground>
                          <View style={styles.row}>
                            <View style={styles.checkView}>
                              {
                                selectLoader.includes(item._id) ?
                                  <View style={styles.selectLoaderContainer}>
                                    <ActivityIndicator color={colors.btnBlue} size={21} />
                                  </View>
                                  :
                                  <TouchableOpacity onPress={() => handleSelectCard(item._id)}>
                                    <Image
                                      source={
                                        item.selected ? images.checkboxon : images.checkboxoff
                                      }
                                      style={styles.checkBox}
                                    />
                                  </TouchableOpacity>
                              }
                              <Text style={styles.headingSty2}>Use as default payment method</Text>
                            </View>
                            <View style={styles.iconContainer}>
                              <TouchableOpacity
                                onPress={() => navigation.navigate('Checkout', { item: { isEdit: true, data: item } })}
                              >
                                <Image source={images.edit} style={styles.icon} />
                              </TouchableOpacity>
                              {
                                deleteLoader.includes(item._id) ?
                                  <ActivityIndicator color={colors.btnBlue} size={17} />
                                  :
                                  <TouchableOpacity
                                    onPress={() => handleDeleteCard(item._id)}
                                  >
                                    <Image source={images.deleteIcon} style={styles.icon2} />
                                  </TouchableOpacity>
                              }
                            </View>
                          </View>
                        </View>

                      )
                    })
                  }
                </ScrollView>
                :
                <Text>no cards</Text>
            }
          </View>
        </View>
        <TouchableOpacity
          style={styles.bottomBtn}
          // onPress={() => navigation.navigate('Checkout', { item: { isEdit: true, data: 'some data' } })}
          onPress={() => navigation.navigate('Checkout', { item: { isEdit: false } })}
        >
          <Text style={styles.bottomBtnText}>Add new card</Text>
          <Image source={images.forwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
