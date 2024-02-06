import React, { useEffect, useState } from 'react';
import { styles } from './style';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import images from '../../services/utilities/images';
import { colors, sizes } from '../../services';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from '../../store/userData';
import { selectProducts } from '../../store/products';
import formatToJSON from '../../services/utilities/JsonLog';
import { selectBrands } from '../../store/brands';
import { selectAuthToken } from '../../store/authToken';
import { socketService } from '../../services/config/Socket';

export default function Home({ navigation }) {

  const dispatch = useDispatch()

  const userData = useSelector(selectUserData)
  const products = useSelector(selectProducts)
  const brands = useSelector(selectBrands)
  const authToken = useSelector(selectAuthToken)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productListing, setProductListing] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([])

  useEffect(() => {
    if (products) {
      handleSelectInitialProduct()
    }
    if (brands) {
      setSelectedBrand(brands)
    }
  }, [])

  useEffect(() => {

    socketService(dispatch);

  }, [dispatch])

  const handleSelectInitialProduct = () => {
    const array = products.slice(0, 2)
    setProductListing(array)
  }

  const handleSelectBrand = index => {
    setSelectedBrand(prevBrands => {
      return prevBrands.map((brand, i) =>
        i === index ? { ...brand, selected: !brand.selected } : brand,
      );
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.topMainContainer}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.navigate('Brands')}>
            <Image
              source={images.headerMenu}
              style={styles.imagesStylingLeft}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={userData?.profile ? { uri: userData?.profile } : images.headerFaceIcon}
              style={styles.imagesStylingRight}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headingTextStyling}>Welcome,</Text>
        <Text style={styles.subHeadingTextStyling}>{userData?.name || "CSZ EXHAUST"}</Text>
        <View style={styles.searchFilterView}>
          <View style={styles.inputContainetr}>
            <Image source={images.search} style={styles.searchImgStyling} />
            <TextInput
              placeholder="Search..."
              style={styles.textFieldStyling}
              placeholderTextColor={colors.lightGrey1}
            />
          </View>
          <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
            <Image source={images.filter} style={styles.filterImgStyling} />
          </TouchableOpacity>
        </View>
        <View style={styles.filterView}>
          {selectedBrand && selectedBrand
            .filter(item => item.selected)
            .map((selectedBrand, index) => {
              return (
                <Text style={styles.filerNameStyling} key={index}>
                  {selectedBrand.name}
                </Text>
              );
            })}
        </View>
        <Text style={styles.trendingTextStyling}>Trendings</Text>
        <View style={styles.bottomView}>
          <View style={styles.bottomLeftView}>
            <Text style={styles.bottomViewHeading}>15% OFF</Text>
            <Text style={styles.bottomViewPara}>On everything today</Text>
            <Text style={styles.bottomViewCode}>with code : CSZEXHAUST</Text>
            <TouchableOpacity onPress={() => {
              console.log(authToken);
            }}>
              <View style={styles.bottomViewbutton}>
                <Text style={styles.bottomViewbuttonText}>Get Now</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={images.sparePart1} style={styles.bottomViewImg} />
          </View>
        </View>
        <View style={styles.popularheadingView}>
          <Text style={styles.popularheadingLeft}>Popular Exhaust</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PopularExhaust')}>
            <Text style={styles.popularheadingRight}>View more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.productMainView}>
          {productListing.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.bg}>
                  <TouchableOpacity style={styles.lastLeftView}
                    onPress={() =>
                      navigation.navigate('ExhaustItem', {
                        data: item,
                      })
                    }
                  >
                    <Image source={{ uri: item?.images[0] }} style={styles.lastLeftViewImg} />
                    <View>
                      <Text style={styles.lastLeftViewTextHeading}>
                        {item.brand.name}
                      </Text>
                      <Text style={styles.lastLeftViewTextPara} numberOfLines={1}>
                        {item.description}
                      </Text>
                      <View style={styles.priceAndPlusSignView}>
                        <Text style={styles.lastLeftViewTextHeading1}>
                          {`$${item.price}.00`}
                        </Text>
                        <View style={styles.plusImgView}>
                          <View
                            >
                            <Image
                              source={images.plusSign}
                              style={styles.plusSignImg}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}>
        <View style={styles.modalMainView}>
          <View style={styles.horizontalLine}></View>
          <View style={styles.modalRow}>
            <Text style={styles.modalText}>Filter</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Image source={images.cross} style={styles.crossImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.brandModal}>
            {selectedBrand && selectedBrand.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleSelectBrand(index);
                  }}>
                  <Text
                    style={
                      item.selected ? styles.carNameSelected : styles.carName
                    }>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.btnView}
            onPress={() => setIsModalVisible(false)}>
            <Text style={styles.btnText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
