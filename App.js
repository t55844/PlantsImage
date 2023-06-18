import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import PageHome from './components/Home/PageHome'
import PagePlants from './components/PlantsPage/PagePlants';
import FooterComponent from './components/Home/FoterSection'


export default function App() {
  return (
    <ScrollView >

      <PageHome />
      <PagePlants />
      <FooterComponent></FooterComponent>
    </ScrollView>
  );
}
