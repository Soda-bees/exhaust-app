import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';

export default function ImageSLider({ productImages }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const index = Math.floor(contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        setActiveIndex(index);
    }
    return (
        <View >
            <View style={styles.imageSlider}>
                <ScrollView
                    horizontal
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                >
                    {productImages && productImages.map((item, index) => (
                        <Image key={index} resizeMode='contain' style={styles.sliderImg} source={{ uri: item }} />
                    ))}
                </ScrollView>
            </View>
            <View style={styles.bulletContainer}>
                {productImages &&
                    productImages.map((_, index) => (
                        index === activeIndex ? (
                            <View key={index} style={styles.bulletActiveContainer}>
                                <View style={styles.bulletActive}></View>
                            </View>
                        ) : (
                            <View key={index} style={styles.bullet} />
                        )
                    ))}
            </View>
        </View>
    );
}