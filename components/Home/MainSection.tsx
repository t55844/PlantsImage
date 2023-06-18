import React from 'react';
import { View, Image, Text } from 'react-native';
import Button from '../GeneralComponents/Button';

export default function MainSection(props) {
    return (
        <View className="flex flex-col justify-around items-center m-1">
            <View className="w-5/6  mb-5">
                <Image
                    style={{ height: 192 }}
                    source={require('../../assets/home-flowers.webp')}
                />
            </View>
            <Text className="text-white p-2 text-xl ">Many plant species have medicinal properties and are used in traditional medicine. For example, the bark of the willow tree contains salicin, a compound used to develop aspirin.</Text>

            <Button
                title='"Learn More"'
                clickAction={() => console.log('plant')}
            />
        </View>
    );
}

