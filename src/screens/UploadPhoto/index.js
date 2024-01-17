import { View, Text, SafeAreaView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import { launchImageLibrary } from 'react-native-image-picker';
import { colors, sizes } from '../../services';
import { signup, uploadProfile } from '../../services/config/API';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../store/products';
import { setUserData } from '../../store/userData';
import { setAuthToken } from '../../store/authToken';
import { setBrands } from '../../store/brands';
import formatToJSON from '../../services/utilities/JsonLog';

export default function UploadPhoto({ navigation, route }) {

  const { userData } = route.params
  const dispatch = useDispatch()

  const [imgUri, setImgUri] = useState('');
  const [uploadPhoteLoader, setUploadPhoteLoader] = useState(false)
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')

  const handleUploadPhoto = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log(res.assets[0]);
        const img = res.assets[0];
        // setImgUri(img.uri);
        handleUploadProfile(img);
      }
    });
  };

  const handleUploadProfile = async (image) => {
    setUploadPhoteLoader(true)
    try {
      const img = {
        uri: image.uri,
        type: image.type,
        fileName: image.fileName,
      };
      const formData = new FormData();
      formData.append('image', {
        uri: img.uri,
        type: img.type,
        name: img.fileName,
      });

      const response = await uploadProfile(formData)
      if (response.success) {
        setImgUri(response.url)
        setUploadPhoteLoader(false)
      } else {
        setUploadPhoteLoader(false)
        console.log(response.message);
      }
    } catch (error) {
      setUploadPhoteLoader(false)
      console.log(error);
    }
  }

  const handleSignup = async () => {
    if (imgUri) {

      setLoader(true)
      try {
        userData.profile = imgUri
        const response = await signup(userData)
        console.log(formatToJSON(response));
        if (response.success) {
          const products = response.products
          const responseUserData = response.userData
          const token = response.token
          handleSetBrand(products)
          dispatch(setProducts(products))
          dispatch(setUserData(responseUserData))
          // dispatch(setAuthToken(token))
          navigation.navigate('Congratulations', { token })
          setLoader(false)
        } else {
          setLoader(false)
          console.log(response.message);
          // setError(response.message)
        }
      } catch (error) {
        console.log(error);
        setLoader(false)
      }
    } else {
      setError('*Image required.')
    }

  }

  const handleSetBrand = (allProducts) => {
    const brandMap = {};

    // Iterate through each product
    allProducts.forEach((product) => {
      const { brand } = product;

      // Check if the brand name is already in the object
      if (brand.name in brandMap) {
        // If yes, increment the quantity count
        brandMap[brand.name].quantity += 1;
      } else {
        // If not, add the brand to the object with initial quantity of 1
        brandMap[brand.name] = { ...brand, quantity: 1, selected: false };
      }
    });

    // Convert the object values to an array
    const uniqueBrandsWithSelectedKey = Object.values(brandMap);

    dispatch(setBrands(uniqueBrandsWithSelectedKey))
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Header backImage={images.backIcon} />
        <View style={styles.TopView}>
          {imgUri ? (
            <Image source={{ uri: imgUri }} style={[styles.profileImgSiz, styles.roundedBorder]} />
          ) : (
            <Image source={images.profileUpload} style={styles.profileImgSiz} />
          )}
          <Text style={styles.profileHeading}>A photo of you</Text>
          <Text style={styles.profilePara}>
            Please make sure your photo clearly
          </Text>
          <Text style={styles.profilePara}>shows your face</Text>
          <Text style={styles.error}>{error}</Text>
          {
            uploadPhoteLoader ?
              <View
                style={styles.bottomBtn}
              >
                <ActivityIndicator color={colors.btnBlue} size={30} />
              </View>
              :
              <TouchableOpacity
                style={styles.bottomBtn}
                onPress={handleUploadPhoto}>
                <Text style={styles.bottomBtnText}>Upload Photo</Text>
              </TouchableOpacity>
          }
          {
            loader ?
              <View style={styles.loaderContainer}>
                <Loader />
              </View>
              :
              <TouchableOpacity
                style={styles.bottomBtn2}
                onPress={() => handleSignup()}>
                <Text style={styles.bottomBtnText2}>Confirm</Text>
              </TouchableOpacity>
          }

        </View>
      </View>
    </SafeAreaView>
  );
}
