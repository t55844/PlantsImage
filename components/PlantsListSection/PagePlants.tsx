

import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, ProgressBarAndroid } from 'react-native';
import SearchBar from './SearchBar';
import PlantsList from './PlantsList';

export interface IPlants {
    name: string;
}


export default function PagePlants(props) {

    const [plants, setPlants] = useState<[]>([])
    const [loodings, setLoodings] = useState<'loading' | 'complete' | 'error'>('complete')

    const url = (name: string) => `https://perenual.com/api/species-list?key=sk-fmni6417678021da8250&q=${name}`

    async function getSearchText(text: string) {
        setLoodings('loading')
        const request = await fetch(url(text))
        const jsonData = await request.json()

        if (typeof jsonData != 'object' || typeof request != 'object') {
            setLoodings('error')
            return
        }

        setPlants(jsonData.data)
        setLoodings('complete')
    }
    return (
        <ScrollView>
            <View className="bg-emerald-700 w-screen">

                <SearchBar getSearchText={getSearchText} />

                {loodings == 'loading' ? <ProgressBarAndroid /> :
                    loodings == "error" ? <Text>Error</Text> :
                        <PlantsList plants={plants} />}
            </View>
        </ScrollView>
    );
}

