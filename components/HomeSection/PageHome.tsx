import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import MainSection from './MainSection';

export default function PageHome(props) {
    return (
        <ScrollView>
            <View className="flex flex-col justify-center items-center pt-6 h-screen bg-emerald-500">
                <Text className=" text-white text-center text-3xl border-b-4 border-white mb-2 " >Welcome to PlantsImage !!!</Text>
                <MainSection></MainSection>
            </View>
        </ScrollView>
    );
}

