import { View, Text, ImageBackground, TouchableOpacity, Image, SafeAreaView, ScrollView, ActivityIndicator, Platform } from 'react-native'
import { useState } from 'react'
import Header from '../../components/Header'
import { styles } from './style'
import images from '../../services/utilities/images'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAddressRedux, selectShippingAddressRedux, selectUserData } from '../../store/userData'
import formatToJSON from '../../services/utilities/JsonLog'
import { colors, sizes } from '../../services'
import { deleteShippingAddress, selectShippingAddress } from '../../services/config/API'
import { selectAuthToken } from '../../store/authToken'
import Modal from "react-native-modal"


export default function ShippingAddresses({ navigation }) {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const authToken = useSelector(selectAuthToken)
  // console.log(formatToJSON(userData.shippingAddress));
  const [cardStatus, setCardStatus] = useState('');
  const [loader, setLoader] = useState([])
  const [deleteLoader, setDeleteLoader] = useState([])
  const [editLoader, setEditLoader] = useState([])
  const [isPermissionModal, setIsPermissionModal] = useState(false)
  const [deleteAddress_id, setDeleteAddress_id] = useState('')
  const [modalLoader, setModalLoader] = useState(false)


  const handleSelectAddress = async (_id) => {
    setLoader([...loader, _id]);
    try {
      const response = await selectShippingAddress(authToken, _id)
      if (response.success) {
        setLoader(loader.filter((id) => id !== _id))
        dispatch(selectShippingAddressRedux({ _id }))
        // navigation.navigate('Checkout')
      } else {
        setLoader(loader.filter((id) => id !== _id))
        console.log(response.message);
      }
    } catch (error) {
      console.log();
      setLoader(loader.filter((id) => id !== _id))
    }
  }

  const handleDeleteAddress = async (_id) => {
    try {
      setDeleteLoader([...deleteLoader, _id])
      setModalLoader(true)
      const response = await deleteShippingAddress(authToken, _id)
      if (response.success) {
        dispatch(deleteAddressRedux({ _id }))
        setDeleteLoader(loader.filter((id) => id !== _id))
        setIsPermissionModal(false)
        setModalLoader(false)
      } else {
        setDeleteLoader(loader.filter((id) => id !== _id))
        setIsPermissionModal(false)
        setModalLoader(false)
        console.log(response.message);
      }
    } catch (error) {
      setDeleteLoader(loader.filter((id) => id !== _id))
      setIsPermissionModal(false)
      setModalLoader(false)
      console.log(error.message);
    }
  }

  const handleEditAddress = async (item) => {
    navigation.navigate('AddShippingAddress', { item })
  }

  const handleCloseModal = () => {
    if (!modalLoader) {
      setIsPermissionModal(false)
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View>
          <Header title={'Shipping Addresses'} backImage={images.backIcon} showCart={true} />
          <View style={styles.mainContainer}>
            {
              userData.shippingAddress.length > 0 ?
                <View style={styles.scrollViewParent}>
                  <ScrollView style={{ backgroundColor: 'transparent', paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                    {
                      userData.shippingAddress.map((item, index) => {
                        return (
                          <View style={styles.MainCartView} key={index}>
                            <View style={styles.firstCart}>
                              <Text style={styles.firstCartText}>{userData?.name}</Text>
                              <View style={styles.iconsView}>
                                {
                                  deleteLoader.includes(item._id) ?
                                    <View style={{ marginRight: sizes.screenWidth * 0.02, marginTop: sizes.screenWidth * 0.01 }}>
                                      <ActivityIndicator size={20} />
                                    </View>
                                    :
                                    <TouchableOpacity
                                      onPress={() => {
                                        setDeleteAddress_id(item._id)
                                        setIsPermissionModal(true)
                                      }}
                                    // onPress={() => handleDeleteAddress(item._id)}
                                    >
                                      <Image source={images.deleteIcon} style={styles.icon} />
                                    </TouchableOpacity>
                                }
                                {
                                  editLoader.includes(item._id) ?
                                    <View style={{ marginTop: sizes.screenWidth * 0.01 }}>
                                      <ActivityIndicator size={20} />
                                    </View>
                                    :
                                    <TouchableOpacity onPress={() => { handleEditAddress(item) }}>
                                      <Image source={images.edit} style={styles.icon2} />
                                    </TouchableOpacity>
                                }
                              </View>
                            </View>
                            <Text style={styles.firstCartText}>{item.address}</Text>
                            <Text style={styles.firstCartText}>
                              {`${item.city}, ${item.zipCode}, ${item.state}, ${item.country}`}
                            </Text>
                            <View style={styles.row}>
                              <TouchableOpacity
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
                              <Text style={styles.headingSty2}>Use this shipping address</Text>
                            </View>
                          </View>
                        )
                      }).reverse()
                    }
                    <View style={{ marginBottom: sizes.screenHeight * 0.02 }}></View>
                  </ScrollView>
                </View> :
                <View style={styles.noAddressContainer}>
                  <Image source={images.noAddress} style={styles.noAddressImg} />
                  <Text style={styles.noAddressText}>No shipping address found.</Text>
                </View>
            }
          </View>
        </View>
        <TouchableOpacity
          style={Platform.OS == 'android' ? styles.bottomBtn : styles.bottomBtnIOS}
          onPress={() => navigation.navigate('AddShippingAddress')}>
          <Text style={styles.bottomBtnText}>Add new address</Text>
          <Image source={images.forwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>
        <Modal isVisible={isPermissionModal} onBackdropPress={handleCloseModal}>
          <View style={styles.modalContainer}>
            <Image source={images.deleteAddress} style={styles.deleteCartImg} />
            <Text style={styles.modalText}>Are you sure you want to delete this address?</Text>
            <View style={styles.modalBtnContainer}>
              {
                modalLoader ?
                  <View style={styles.noBtn}>
                    <Text style={styles.modlBtnText2}>No</Text>
                  </View>
                  :
                  <TouchableOpacity style={styles.noBtn} onPress={handleCloseModal} >
                    <Text style={styles.modlBtnText2}>No</Text>
                  </TouchableOpacity>
              }
              {
                modalLoader ?
                  <View style={styles.yesBtn}>
                    <ActivityIndicator color={colors.white} size={25} />
                  </View>
                  :
                  <TouchableOpacity style={styles.yesBtn}
                    onPress={() => handleDeleteAddress(deleteAddress_id)}
                  >
                    <Text style={styles.modlBtnText}>Yes</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  )
}