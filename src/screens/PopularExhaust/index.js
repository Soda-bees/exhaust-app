import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  RefreshControl,
  Platform,
} from 'react-native';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {selectProducts, setProducts} from '../../store/products';
import {getAllProduct} from '../../services/config/API';
import {selectAuthToken} from '../../store/authToken';
import {selectBrands, setBrands} from '../../store/brands';
import formatToJSON from '../../services/utilities/JsonLog';
import {selectUserData} from '../../store/userData';

export default function PopularrExhaust({navigation}) {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const authToken = useSelector(selectAuthToken);
  const allBrands = useSelector(selectBrands);
  const userData = useSelector(selectUserData);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [brand, setBrand] = useState([]);
  const [productListing, setProductListing] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (products) {
      setProductListing(products);
    }
    if (allBrands) {
      setBrand(allBrands);
    }
  }, []);

  const handleSelectBrand = index => {
    setBrand(prevBrands => {
      const updatedBrands = prevBrands.map((brand, i) =>
        i === index ? {...brand, selected: !brand.selected} : brand,
      );

      // Get the selected brand names
      const selectedBrandNames = updatedBrands
        .filter(brand => brand.selected)
        .map(brand => brand.name);

      // If no brand is selected, show all products
      if (selectedBrandNames.length === 0) {
        setProductListing(products); // Set allProducts here (replace 'allProducts' with your actual array)
      } else {
        // Filter the products based on the selected brands
        const filteredProducts = products.filter(product =>
          selectedBrandNames.includes(product.brand.name),
        );

        // Set the filtered products in the state
        setProductListing(filteredProducts);
      }

      return updatedBrands;
    });
  };

  const handleGetAllProducts = async () => {
    setLoader(true);
    try {
      const response = await getAllProduct(authToken);
      if (response.success) {
        console.log(formatToJSON(response.message));
        const allProducts = response.products;
        handleSetBrand(allProducts);
        dispatch(setProducts(allProducts));
        setProductListing(allProducts);
        setLoader(false);
      } else {
        console.log(response.message);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const handleGetAllProductsWithoutLoader = async () => {
    try {
      const response = await getAllProduct(authToken);
      if (response.success) {
        console.log(formatToJSON(response.message));
        const allProducts = response.products;
        handleSetBrand(allProducts);
        dispatch(setProducts(allProducts));
        setProductListing(allProducts);
        setLoader(false);
      } else {
        console.log(response.message);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const handleSetBrand = allProducts => {
    const brandMap = {};

    // Iterate through each product
    allProducts.forEach(product => {
      const {brand} = product;

      // Check if the brand name is already in the object
      if (brand.name in brandMap) {
        // If yes, increment the quantity count
        brandMap[brand.name].quantity += 1;
      } else {
        // If not, add the brand to the object with initial quantity of 1
        brandMap[brand.name] = {...brand, quantity: 1, selected: false};
      }
    });

    // Convert the object values to an array
    const uniqueBrandsWithSelectedKey = Object.values(brandMap);

    dispatch(setBrands(uniqueBrandsWithSelectedKey));
    setBrand(uniqueBrandsWithSelectedKey);
  };

  useEffect(() => {
    handleGetAllProductsWithoutLoader();
  }, []);

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
              source={
                userData?.profile
                  ? {uri: userData?.profile}
                  : images.headerFaceIcon
              }
              style={styles.imagesStylingRight}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headingTextStyling}>Welcome,</Text>
        <Text style={styles.subHeadingTextStyling}>
          {userData?.name || 'CSZ EXHAUST'}
        </Text>
        <View style={styles.searchFilterView}>
          <View style={styles.inputContainetr}>
            <Image source={images.search} style={styles.searchImgStyling} />
            <TextInput
              placeholder="Search..."
              style={styles.textFieldStyling}
              placeholderTextColor={colors.lightGrey1}
              onChangeText={text => setSearch(text)}
            />
          </View>
          <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
            <Image source={images.filter} style={styles.filterImgStyling} />
          </TouchableOpacity>
        </View>
        <View style={styles.filterView}>
          {brand &&
            brand
              .filter(item => item.selected)
              .map((selectedBrand, index) => {
                return (
                  <View style={Platform.OS == 'ios' && styles.selectedCartView}>
                    <Text
                      style={
                        Platform.OS == 'android'
                          ? styles.filerNameStyling
                          : styles.filerNameStylingIOS
                      }
                      key={index}>
                      {selectedBrand.name}
                    </Text>
                  </View>
                );
              })}
        </View>
        <Text style={styles.popularheadingLeft}>Popular Exhaust</Text>
        <View
          style={
            brand.some(obj => obj.selected)
              ? styles.scrollViewParent2
              : styles.scrollViewParent
          }>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={loader}
                onRefresh={() => {
                  handleGetAllProducts();
                }}
                colors={[colors.btnBlue]}
                progressBackgroundColor="white"
              />
            }>
            <View style={styles.productMainView}>
              {productListing &&
                productListing
                  .filter(item =>
                    item.brand.name
                      .toLowerCase()
                      .includes(search.toLowerCase()),
                  )
                  .map((item, index) => {
                    return (
                      <View key={index}>
                        <View style={styles.productCartStyle}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('ExhaustItem', {
                                data: item,
                              })
                            }
                            style={styles.lastLeftView}>
                            <Image
                              source={{uri: item?.images[0]}}
                              style={styles.lastLeftViewImg}
                            />
                            <View>
                              <Text style={styles.lastLeftViewTextHeading}>
                                {item.brand.name}
                              </Text>
                              <Text
                                style={styles.lastLeftViewTextPara}
                                numberOfLines={1}>
                                {item.description}
                              </Text>
                              <View style={styles.priceAndPlusSignView}>
                                <Text
                                  style={
                                    Platform.OS == 'android'
                                      ? styles.lastLeftViewTextHeading1
                                      : styles.lastLeftViewTextHeading1IOS
                                  }>
                                  {`$${item.price}.00`}
                                </Text>
                                {Platform.OS == 'android' ? (
                                  <View style={styles.plusImgView}>
                                    <Image
                                      source={images.plusSign}
                                      style={styles.plusSignImg}
                                    />
                                  </View>
                                ) : (
                                  <View style={styles.cartPlusBtnStyleIOS}>
                                    <Image
                                      source={images.plusImg}
                                      style={styles.plusImgStyle}
                                    />
                                  </View>
                                )}
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })
                  .reverse()}
            </View>
          </ScrollView>
          <View style={Platform.OS == 'ios' && styles.margin}></View>
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
            {brand.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleSelectBrand(index);
                  }}>
                  {Platform.OS == 'android' ? (
                    <Text
                      style={
                        item.selected ? styles.carNameSelected : styles.carName
                      }>
                      {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={
                        item.selected
                          ? styles.carNameSelectedIOS
                          : styles.carNameIOS
                      }>
                      {item.name}
                    </Text>
                  )}
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
