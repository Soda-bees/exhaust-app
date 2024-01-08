import React, {useState} from 'react';
import {styles} from './style';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [brand, setBrand] = useState([
    {name: 'ASTON MARTIN', selected: false},
    {name: 'PORSCHE', selected: false},
    {name: 'FERRARI', selected: false},
    {name: 'BMW', selected: false},
    {name: 'LAMBORGHINI', selected: false},
    {name: 'MCLAREN', selected: false},
    {name: 'AUDI', selected: false},
    {name: 'BENZ', selected: false},
  ]);

  const [productListing, setProductListing] = useState([
    {
      Image: images.sparePart2,
      name: 'Ferrari',
      label: 'F12 Tail Throat Dwonpipe',
      price: '$302.00',
      ImagePlus: images.plusSign,
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu.',
    },
    {
      Image: images.sparePart3,
      name: 'BMW',
      label: 'X3M X4M Titanium...',
      price: '$302.00',
      ImagePlus: images.plusSign,
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu.',
    },
  ]);
  const handleSelectBrand = index => {
    setBrand(prevBrands => {
      return prevBrands.map((brand, i) =>
        i === index ? {...brand, selected: !brand.selected} : brand,
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
              source={images.headerFaceIcon}
              style={styles.imagesStylingRight}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.headingTextStyling}>Welcome,</Text>
        <Text style={styles.subHeadingTextStyling}>CSZ EXHAUST</Text>
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
          {brand
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
            <TouchableOpacity>
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
        {/* <View style={styles.lastMainView}> */}
        <View style={styles.productMainView}>
          {productListing.map((item, index) => {
            return (
              <View key={index}>
                <View style={styles.bg}>
                  <View style={styles.lastLeftView}>
                    <Image source={item.Image} style={styles.lastLeftViewImg} />
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ExhaustItem', {
                          data: item,
                        })
                      }>
                      <Text style={styles.lastLeftViewTextHeading}>
                        {item.name}
                      </Text>
                      <Text style={styles.lastLeftViewTextPara}>
                        {item.label}
                      </Text>
                      <View style={styles.priceAndPlusSignView}>
                        <Text style={styles.lastLeftViewTextHeading1}>
                          {item.price}
                        </Text>
                        <View style={styles.plusImgView}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate('MyCart', {data: item})
                            }>
                            <Image
                              source={item.ImagePlus}
                              style={styles.plusSignImg}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
          {/* </View> */}
          {/* <View>
              <View style={styles.bg}>
                <View style={styles.lastLeftView}>
                  <Image
                    source={images.sparePart2}
                    style={styles.lastLeftViewImg}
                  />
                  <TouchableOpacity>
                    <Text style={styles.lastLeftViewTextHeading}>Ferrari</Text>
                    <Text style={styles.lastLeftViewTextPara}>
                      F12 Tail Throat Downpipe
                    </Text>
                    <View style={styles.priceAndPlusSignView}>
                      <Text style={styles.lastLeftViewTextHeading1}>
                        $302.00
                      </Text>
                      <View style={styles.plusImgView}>
                        <TouchableOpacity>
                          <Image
                            source={images.plusSign}
                            style={styles.plusSignImg}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.bg}>
                <View style={styles.lastLeftView}>
                  <Image
                    source={images.sparePart3}
                    style={styles.lastLeftViewImg}
                  />
                  <TouchableOpacity>
                    <Text style={styles.lastLeftViewTextHeading}>BMW</Text>
                    <Text style={styles.lastLeftViewTextPara}>
                      X3M X4M Titanium...
                    </Text>
                    <View style={styles.priceAndPlusSignView}>
                      <Text style={styles.lastLeftViewTextHeading1}>
                        $302.00
                      </Text>
                      <View style={styles.plusImgView}>
                        <TouchableOpacity>
                          <Image
                            source={images.plusSign}
                            style={styles.plusSignImg}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View> */}
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
