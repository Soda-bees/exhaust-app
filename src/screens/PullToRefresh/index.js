import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'

export default function PullToRefresh() {
    const [loader, setLoader] = useState(false)
    const myFunction = () => {
        setLoader(true)
        console.log("pull function");
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }
    return (
        <View style={{ marginTop: 20, padding: 20, backfaceVisibility: 'red', flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={loader}
                        onRefresh={() => { myFunction() }}
                      
                    />
                }
            >
                <Text>Pull to refresh</Text>
            </ScrollView>
        </View>
    )
}