import React from 'react';
import { Text, View } from 'react-native';
import PlantsList from '../PlantsListSection/PlantsList';

export default function MyList(props: { myFavorites: string[] }) {
    const { myFavorites } = props
    return (
        <View className="flex flex-col justify-start items-center pt-6 h-screen bg-emerald-500">
            <Text className="text-white text-2xl">Some of My Favorites</Text>
            <PlantsList plants={myFavorites} />
        </View>
    );
}

