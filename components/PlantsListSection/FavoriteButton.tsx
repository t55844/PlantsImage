import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoriteButton(props) {
    const [favorite, setFavorite] = useState<boolean>(false)

    function clickFavorite() {
        setFavorite(!favorite)
        console.log('clickFavorite')
    }
    function clickUnfavorite() {
        setFavorite(!favorite)
        console.log('clickUnfavorite')
    }

    return (
        <View className="">
            {
                !favorite ?
                    <Ionicons onPress={clickUnfavorite} name="heart-outline" size={24} color="black" /> :
                    <Ionicons onPress={clickFavorite} name="heart-sharp" size={24} color="black" />
            }
        </View>
    );
}

