import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { IPlants } from './PagePlants';
import PlantCard from './PlantsCard';

interface PropsPlantsList {
    plants: IPlants[]
}

export default function PlantsList(props: PropsPlantsList) {
    const { plants } = props
    if (plants.length != 0) return (
        <SafeAreaView style={{
            flex: 1,
        }}>

            {plants.map((item) =>
                <PlantCard
                    conditions={'Cyle: ' + item.cycle + ',' + 'Watering: ' + item.watering + ',' + 'SunLight: ' + item.sunlight + '.'}
                    image={item.default_image.original_url}
                    name={item.common_name}
                    scientificName={item.scientific_name}
                    key={item.id} />)}



        </SafeAreaView>


    );
}

