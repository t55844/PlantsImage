import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MyInfo from './MyInfo';
import MyList from './MyList';

export default function PagePreferences(props) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        //receive user

    }, [])
    return (
        <View className="flex flex-col justify-start items-center pt-6 h-screen bg-emerald-500">
            <MyInfo name='Jonh' socialMedia={['facebook']} />
            <MyList myFavorites={[]} />
        </View>
    );
}

