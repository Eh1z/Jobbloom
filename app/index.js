import { View, Text } from 'react-native';
import { useState } from 'react';
import { ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, ScreenHeaderBtn, Popularjobs, Welcome } from "../components";

const Home = () => {

    const router = useRouter();
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                ),
                headerTitle: ""
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Welcome/>
                    <Nearbyjobs/>
                    <Popularjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;