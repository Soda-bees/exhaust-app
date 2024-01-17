import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import Header from '../../components/Header';
import {colors, fontSize} from '../../services';
import CountryPicker from 'react-native-country-picker-modal';

export default function AddShippingAddress({navigation}) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState(); //number
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState(); //number
  const [selectedCountry, setSelectedCountry] = useState(null); //countryPicker
  const [isCountryPickerVisible, setCountryPickerVisibility] = useState(false);

  const onCountrySelect = country => {
    setSelectedCountry(country.name);
    setCountryPickerVisibility(false);
  };

  const openCountryPicker = () => {
    setCountryPickerVisibility(true);
  };

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header
          title={'Adding Shipping Addresses'}
          backImage={images.backIcon}
        />
        <View style={styles.mainContainer}>
          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Address</Text>

            <TextInput
              placeholder="Enter address."
              placeholderTextColor={colors.black}
              style={styles.inputField}
              onChangeText={text => setAddress(text)}
              value={address}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>City</Text>
            <TextInput
              placeholder="Enter city."
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>State/Province/Region</Text>
            <TextInput
              placeholder="Enter state."
              placeholderTextColor={colors.black}
              style={styles.inputField}
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Zip Code (Postal Code)</Text>
            <TextInput
              placeholder="Enter zip code."
              placeholderTextColor={colors.black}
              style={styles.inputField}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Country</Text>
            <View style={styles.row}>
              {/* <TouchableOpacity onPress={openCountryPicker} style={styles.row}>
              <Text style={styles.pickerText}>{selectedCountry || 'Select a country'}</Text>
            </TouchableOpacity> */}
              {selectedCountry ? (
                <Text style={styles.pickerText}>{selectedCountry}</Text>
              ) : (
                <Text style={styles.pickerText}>Select a country</Text>
              )}

              <CountryPicker
                withFilter
                withFlag
                withCountryNameButton
                withAlphaFilter
                // withCallingCode
                onSelect={onCountrySelect}
                visible={isCountryPickerVisible}
                onClose={() => setCountryPickerVisibility(false)}
              />
            </View>
          </View>

          {/* 
          <View style={styles.MainCartView}>
            <Text style={styles.labelName}>Country</Text>
            <View style={styles.row}>
              <CountryPicker
                withFilter
                withFlag
                withAlphaFilter
                withCallingCode
                onSelect={onCountrySelect}
                visible={isCountryPickerVisible}
                onClose={() => setCountryPickerVisibility(false)}
              />

              {selectedCountry && <Text>{selectedCountry.name}</Text>}

              <TextInput
                placeholder="Enter country."
                placeholderTextColor={colors.black}
                style={styles.inputField}
              />
              <TouchableOpacity onPress={openCountryPicker}>
                <Image source={images.rightArrow} style={styles.arrowSizing} />
              </TouchableOpacity>
            </View>
          </View> */}
          <TouchableOpacity
            style={styles.bottomBtn}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.bottomBtnText}>Save Address</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
