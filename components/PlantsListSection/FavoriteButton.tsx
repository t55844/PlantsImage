import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { saveFavorite } from '../../JS/firebase';

export default function FavoriteButton(props: { info: { id: number, email: string } }) {
    const [favorite, setFavorite] = useState<boolean>(false)
    const { info } = props
    function clickToFavorite() {
        setFavorite(!favorite)
        const response = saveFavorite(info)
        console.log('clicki To Favorite' + response)
    }
    function clickToUnfavorite() {
        setFavorite(!favorite)
    }

    return (
        <View className="">
            {
                !favorite ?
                    <Ionicons onPress={clickToFavorite} name="heart-outline" size={24} color="black" /> :
                    <Ionicons onPress={clickToUnfavorite} name="heart-sharp" size={24} color="black" />
            }
        </View>
    );
}

