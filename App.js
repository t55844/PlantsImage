import React from 'react';
import { ScrollView } from 'react-native';
import FooterComponent from './components/HomeSection/FoterSection'
import MyTabs from './components/Navigation/MyTabs'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ScrollView className='pt-10' contentContainerStyle={{ flex: 1 }}>
        <MyTabs />
        <FooterComponent></FooterComponent>
      </ScrollView>
    </NavigationContainer>
  );
}
