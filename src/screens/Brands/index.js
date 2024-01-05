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

export default function Brands({navigation}) {
  const [brandData, setBrandData] = useState([
    {logo: images.lamboIcon, name: 'Lamborgini', quantity: '302'},
    {logo: images.mclarenIcon, name: 'Mclaren', quantity: '150'},
    {logo: images.porscheIcon, name: 'Porsche', quantity: '180'},
    {logo: images.ferrariIcon, name: 'Ferrari', quantity: '210'},
    {logo: images.bmwIcon, name: 'BMW', quantity: '240'},
    {logo: images.mercIcon, name: 'Mercedes', quantity: '270'},
    {logo: images.audiIcon, name: 'Audi', quantity: '300'},
    {logo: images.astonMartinIcon, name: 'Aston Martin', quantity: '330'},
    {logo: images.lamboIcon, name: 'Lamborgini', quantity: '302'},
    {logo: images.mclarenIcon, name: 'Mclaren', quantity: '150'},
    {logo: images.porscheIcon, name: 'Porsche', quantity: '180'},
    {logo: images.ferrariIcon, name: 'Ferrari', quantity: '210'},
    {logo: images.bmwIcon, name: 'BMW', quantity: '240'},
    {logo: images.mercIcon, name: 'Mercedes', quantity: '270'},
    {logo: images.audiIcon, name: 'Audi', quantity: '300'},
    {logo: images.astonMartinIcon, name: 'Aston Martin', quantity: '330'},
  ]);

  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.headerBackIcon} source={images.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Brands</Text>
          <TouchableOpacity>
            <Image style={styles.headerIcon} source={images.seacrchIcon} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {brandData.map((item, index) => {
            return (
              <View style={styles.test} key={index}>
                <TouchableOpacity style={styles.brandContainer}>
                  <View style={styles.brandIconContainer}>
                    <Image style={styles.brandIcon} source={item.logo} />
                  </View>
                  <View style={styles.separator}></View>
                  <Text style={styles.brandName}>{item.name}</Text>
                  <View style={styles.quantityContainer}>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Text style={styles.quantity}> Exhaust</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
          <View style={styles.merginView}></View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}


