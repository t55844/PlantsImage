import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface PlantCardProps {
    image: ImageSourcePropType;
    name: string;
    scientificName: string;
    conditions: string;
}

function PlantCard(props: PlantCardProps) {
    const { image, name, scientificName, conditions } = props;
    console.log(image)
    return (
        <View className={`bg-white rounded-lg shadow-md p-4 mb-4`}>
            <Image source={{ uri: image }} className={`h-40 w-full mb-4`} />
            <Text className={`text-lg font-bold`}>{name}</Text>
            <Text className={`text-gray-500 mb-2`}>{scientificName}</Text>
            <Text className={`text-sm text-gray-600`}>{conditions}</Text>
        </View>
    );
};

export default PlantCard;
