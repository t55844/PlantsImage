import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import PageHome from './components/Home/PageHome'


export default function App() {
  return (
    <View className="flex-1 items-center justify-center ">
      <PageHome />
      <StatusBar style="auto" />
    </View>
  );
}
