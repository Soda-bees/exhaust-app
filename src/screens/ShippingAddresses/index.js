import { View, Text, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import Header from '../../components/Header'
import { styles } from './style'
import images from '../../services/utilities/images'
import { useDispatch, useSelector } from 'react-redux'
import { selectShippingAddressRedux, selectUserData } from '../../store/userData'
import formatToJSON from '../../services/utilities/JsonLog'
import { colors, sizes } from '../../services'
import { selectShippingAddress } from '../../services/config/API'
import { selectAuthToken } from '../../store/authToken'

export default function ShippingAddresses() {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  // console.log(formatToJSON(userData.shippingAddress));
  const [cardStatus, setCardStatus] = useState('');
  const [loader, setLoader] = useState([])


  const handleSelectAddress = async (_id) => {
    setLoader([...loader, _id]);
    try {
      const response = await selectShippingAddress(authToken, _id)
      if (response.success) {
        setLoader(loader.filter((id) => id !== _id))
        dispatch(selectShippingAddressRedux({ _id }))
      } else {
        setLoader(loader.filter((id) => id !== _id))
        console.log(response.message);
      }
    } catch (error) {
      console.log();
      setLoader(loader.filter((id) => id !== _id))
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header title={'Shipping Addresses'} backImage={images.backIcon} />
          <View style={styles.mainContainer}>
            {
              userData.shippingAddress.length > 0 ?
                <View style={styles.scrollViewParent}>
                  <ScrollView style={{ backgroundColor: 'transparent', paddingHorizontal: 10 }}>
                    {
                      userData.shippingAddress.map((item, index) => {
                        return (
                          // <View style={styles.shippingAddressContainer}>

                          // </View>
                          <View style={styles.MainCartView}>
                            <View style={styles.firstCart}>
                              <Text style={styles.firstCartText}>{userData?.name}</Text>
                              <TouchableOpacity>
                                <Text style={styles.firstCartText1}>Edit</Text>
                              </TouchableOpacity>
                            </View>
                            <Text style={styles.firstCartText}>{item.address}</Text>
                            <Text style={styles.firstCartText}>
                              {`${item.city}, ${item.zipCode}, ${item.state}, ${item.country}`}
                            </Text>
                            <View style={styles.row}>
                              <TouchableOpacity
                                // onPress={() => {
                                //   setCardStatus('First');
                                // }}
                                onPress={() => {
                                  handleSelectAddress(item._id)
                                }}
                              >{
                                  loader.includes(item._id) ?
                                    <View style={styles.loaderView}>
                                      <ActivityIndicator color={colors.btnBlue} size={25} />
                                    </View>
                                    :
                                    <Image
                                      source={
                                        item.selected ? images.checkboxon : images.checkboxoff
                                      }
                                      style={styles.checkBox}
                                    />
                                }
                              </TouchableOpacity>
                              <Text style={styles.headingSty2}>Use as the shipping address </Text>
                            </View>
                          </View>
                        )
                      }).reverse()
                    }
                    <View style={{ marginBottom: sizes.screenHeight * 0.02 }}></View>
                  </ScrollView>
                </View> :
                <View>
                  <Text>nh hai card</Text>
                </View>
            }
            {/* <View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={styles.firstCartText1}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
            <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setCardStatus('First');
            }}>
            <Image
              source={
                cardStatus == 'First' ? images.checkboxon : images.checkboxoff
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.headingSty2}>Use as the shipping address </Text>
        </View>
          </View> */}
            {/* <View View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={styles.firstCartText1}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
            <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setCardStatus('Second');
            }}>
            <Image
              source={
                cardStatus == 'Second' ? images.checkboxon : images.checkboxoff
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.headingSty2}>Use as the shipping address </Text>
        </View>
          </View>
          <View View style={styles.MainCartView}>
            <View style={styles.firstCart}>
              <Text style={styles.firstCartText}>Jane Doe</Text>
              <TouchableOpacity>
                <Text style={styles.firstCartText1}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.firstCartText}>3 Newbridge Court</Text>
            <Text style={styles.firstCartText}>
              Chino Hills, CA 91709, United States
            </Text>
            <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setCardStatus('Third');
            }}>
            <Image
              source={
                cardStatus == 'Third' ? images.checkboxon : images.checkboxoff
              }
              style={styles.checkBox}
            />
          </TouchableOpacity>
          <Text style={styles.headingSty2}>Use as the shipping address </Text>
        </View>
          </View> */}
          </View>

        </View>

        <Text>jahsja</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}