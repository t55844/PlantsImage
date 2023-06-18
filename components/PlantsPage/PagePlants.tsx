

import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
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

        //jsonData.data.forEach(item => console.log('ITEM NUMERO: ' + item.id + '/' + item))
        //console.log('Buscando plantas REQUEST' + request)
        //console.log('Buscando plantas JSON' + jsonData.data)
        setPlants(jsonData.data)
        setLoodings('complete')
    }
    return (
        <View className="bg-emerald-700">

            <SearchBar getSearchText={getSearchText} />

            {loodings == 'loading' ? <Text>Loading....</Text> :
                loodings == "error" ? <Text>Error</Text> :
                    <PlantsList plants={plants} />}
        </View>
    );
}

