import React from 'react';
import { Text, View } from 'react-native';
import MainSection from './MainSection';
import FooterComponent from './FoterSection';

export default function PageHome(props) {
    return (
        <View className="flex flex-col justify-between items-center m-2 h-screen bg-gradient-to-b from-emerald-700 via-emerald-400 to-emerald-200">
            <View className="">
                <Text className=" text-white text-center text-xl border-b-4 border-white mb-2 " >Welcome to PlantsImage !!!</Text>
                <Text className=" text-white text-2xll  mb-5" >see several plants and their main information with a click</Text>
            </View>
            <MainSection></MainSection>
            <FooterComponent></FooterComponent>
        </View>
    );
}

