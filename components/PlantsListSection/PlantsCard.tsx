import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import FavoriteButton from './FavoriteButton';

interface PlantCardProps {
    image: ImageSourcePropType;
    name: string;
    scientificName: string;
    conditions: string;
    id: number
}

function PlantCard(props: PlantCardProps) {
    const { image, name, scientificName, conditions, id } = props;
    console.log(image)
    return (
        <View className={`bg-white rounded-lg shadow-md p-4 m-1 mb-4 `}>
            <Text className="text-xl">#{id}</Text>
            <Image source={{ uri: image }} className={`h-40 w-full mb-4`} />
            <Text className={`text-lg font-bold`}>{name}</Text>
            <View className="flex flex-row justify-start items-center">
                <View className="flex flex-col justify-around items-start mr-20">
                    <Text className={`text-gray-500 mb-2`}>
                        <Text className={`text-sm text-gray-600 font-bold`}>Scientific name: </Text>{scientificName}
                    </Text>
                    <Text className={`text-sm text-gray-600`}>{conditions}</Text>
                </View>
                <FavoriteButton />
            </View>
        </View>
    );
};

export default PlantCard;
