import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { IPlants } from './PagePlants';
import PlantCard from './PlantsCard';

interface PropsPlantsList {
    plants: IPlants[]
}

export default function PlantsList(props: PropsPlantsList) {
    const { plants } = props

    const imageLinkOn = (item) => {
        if (item.default_image != null) {
            if (typeof item.default_image.original_url === 'string') return item.default_image.original_url
            if (typeof item.default_image.regular_url === 'string') return item.default_image.regular_url
            if (typeof item.default_image.medium_url === 'string') return item.default_image.medium_url
            if (typeof item.default_image.small_url === 'string') return item.default_image.small_url
        }
        return ''
    }
    if (plants.length != 0) return (
        <SafeAreaView style={{
            flex: 1,
        }}>

            {plants.map((item) =>
                <PlantCard
                    conditions={'Cyle: ' + item.cycle + '\n' + 'Watering: ' + item.watering + '\n' + 'SunLight: ' + item.sunlight + '.'}
                    image={imageLinkOn(item)}
                    name={item.common_name}
                    scientificName={item.scientific_name}
                    id={item.id}
                    key={item.id} />)}



        </SafeAreaView>


    );
}

