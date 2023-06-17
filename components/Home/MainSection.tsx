import React from 'react';
import { View, Image } from 'react-native';
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

            <Button
                title='"Learn More"'
                clickAction={() => console.log('plant')}
            />
        </View>
    );
}

