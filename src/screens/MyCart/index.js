import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function MyCart({navigation, route}) {
  const [quantity, setQuantity] = useState(0);
  const [quantityTwo, setQuantityTwo] = useState(0);
  const [quantityThree, setQuantityThree] = useState(0);
  // const {data} = route?.params;

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerBackIcon} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>My Cart</Text>
          {/* <TouchableOpacity>
            <Image style={styles.headerIcon} source={images.cartIcon} />
          </TouchableOpacity> */}
        </View>
        <View style={styles.scrollBody}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemDetails}>
              <View style={styles.ferrariF12ExhaustContainer}>
                <Image
                  style={styles.ferrariF12Exhaust}
                  source={images.ferrariExhaust}
                />
              </View>
              <View>
                <Text style={styles.brandName}>Ferrari</Text>
                <Text style={styles.exhaustType}>F12 Tail Throat Downpipe</Text>
                <Text style={styles.exhaustPrice}>$302.00</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.deleteAndQuantityContainer}>
              <TouchableOpacity>
                <Image style={styles.deleteIcon} source={images.deleteIcon} />
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => quantity > 0 && setQuantity(quantity - 1)}>
                  <Text style={styles.textQuantityMinus}>_</Text>
                </TouchableOpacity>
                <Text style={styles.textQuantity}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Text style={styles.textQuantityPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemDetails}>
              <View style={styles.ferrariF12ExhaustContainer}>
                <Image
                  style={styles.ferrariF12Exhaust}
                  source={images.ferrariExhaust}
                />
              </View>
              <View>
                <Text style={styles.brandName}>Ferrari</Text>
                <Text style={styles.exhaustType}>F12 Tail Throat Downpipe</Text>
                <Text style={styles.exhaustPrice}>$302.00</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.deleteAndQuantityContainer}>
              <TouchableOpacity>
                <Image style={styles.deleteIcon} source={images.deleteIcon} />
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() =>
                    quantityTwo > 0 && setQuantityTwo(quantityTwo - 1)
                  }>
                  <Text style={styles.textQuantityMinus}>_</Text>
                </TouchableOpacity>
                <Text style={styles.textQuantity}>{quantityTwo}</Text>
                <TouchableOpacity
                  onPress={() => setQuantityTwo(quantityTwo + 1)}>
                  <Text style={styles.textQuantityPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemDetails}>
              <View style={styles.ferrariF12ExhaustContainer}>
                <Image
                  style={styles.ferrariF12Exhaust}
                  source={images.ferrariExhaust}
                />
              </View>
              <View>
                <Text style={styles.brandName}>Ferrari</Text>
                <Text style={styles.exhaustType}>F12 Tail Throat Downpipe</Text>
                <Text style={styles.exhaustPrice}>$302.00</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.deleteAndQuantityContainer}>
              <TouchableOpacity>
                <Image style={styles.deleteIcon} source={images.deleteIcon} />
              </TouchableOpacity>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() =>
                    quantityThree > 0 && setQuantityThree(quantityThree - 1)
                  }>
                  <Text style={styles.textQuantityMinus}>_</Text>
                </TouchableOpacity>
                <Text style={styles.textQuantity}>{quantityThree}</Text>
                <TouchableOpacity
                  onPress={() => setQuantityThree(quantityThree + 1)}>
                  <Text style={styles.textQuantityPlus}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.promoSty}>
            <TextInput
              placeholder="Promo Code"
              placeholderTextColor={colors.disabledBg3}
            />
            <TouchableOpacity>
              <Text style={styles.promoSty2}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.pricesStyling}>
              <Text style={styles.priceText1}>Shipping:</Text>
              <Text style={styles.priceNumber1}>$34.0</Text>
            </View>
            <View style={styles.pricesStyling}>
              <Text style={styles.priceText1}>Sub Total:</Text>
              <Text style={styles.priceNumber1}>$960.0</Text>
            </View>
            <View style={styles.pricesStyling2}>
              <Text style={styles.priceText2}>Total(3 items):</Text>
              <Text style={styles.priceNumber2}>$1003.0</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.bottomBtn}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.bottomBtnText}>Proceed to Checkout</Text>
            <Image source={images.forwardIcon} style={styles.forwardIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
