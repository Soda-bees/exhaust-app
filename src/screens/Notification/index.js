import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import images from '../../services/utilities/images';

export default function Notification() {
  const [exhaustNumber, setExhaustNumber] = useState([
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
  ]);
  const [exhautstNumberTwo, setExhautstNumberTwo] = useState([
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
    {
      logo: images.sparePart2,
      name: 'Ferrari',
      description: 'F12 Tail Throat Downpipe',
      price: '$302.00',
      time: '7min ago',
    },
  ]);
  return (
    <SafeAreaView>
      <ImageBackground style={styles.container} source={images.bg}>
        <Header
          title={'Notifications'}
          backImage={images.backIcon}
          // addToCartImage={images.threeDot}
        />
        <ScrollView>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>Recent</Text>
            {exhaustNumber.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.itemDetails}>
                      <View style={styles.ferrariF12ExhaustContainer}>
                        <Image
                          style={styles.ferrariF12Exhaust}
                          source={item.logo}
                        />
                      </View>
                      <View>
                        <Text style={styles.brandName}>{item.name}</Text>
                        <Text style={styles.exhaustType}>
                          {item.description}
                        </Text>
                        <Text style={styles.exhaustPrice}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.timeSty}>{item.time}</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>Yesterday</Text>
            {exhautstNumberTwo.map((item, index) => {
              return (
                <View key={index}>
                  <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.itemDetails}>
                      <View style={styles.ferrariF12ExhaustContainer}>
                        <Image
                          style={styles.ferrariF12Exhaust}
                          source={item.logo}
                        />
                      </View>
                      <View>
                        <Text style={styles.brandName}>{item.name}</Text>
                        <Text style={styles.exhaustType}>
                          {item.description}
                        </Text>
                        <Text style={styles.exhaustPrice}>{item.price}</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.timeSty}>{item.time}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
