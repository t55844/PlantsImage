import React from 'react';
import { Text, View } from 'react-native';


interface PropsMyInfo {
    name: string;
    socialMedia: string[]
}

export default function MyInfo(props: PropsMyInfo) {
    const { name, socialMedia } = props

    return (
        <View className="border-2 border-white w-full h-40 flex items-start justify-around pl-6 bg-emerald-600">
            <Text className=" text-white text-center text-xl mb-2 " >Name:{name}</Text>
            <View className=" flex flex-row justify-around items-center">
                {socialMedia.map(acount => (
                    <Text key={Math.random()} className="text-white text-xl p-2 rounded-2xl border-2 border-white">{acount}</Text>
                ))}
            </View>

        </View>
    );
}

