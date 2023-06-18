import React from 'react';
import { useState, useEffect } from 'react'
import { Text, View, TextInput } from 'react-native';


interface PropsSearchBar {
    getSearchText(text: string): void;
}

export default function SearchBar(props: PropsSearchBar) {
    const { getSearchText } = props

    const [text, onChangeText] = useState<string>('')
    useEffect(() => {
        getSearchText(text)

    }, [text])

    return (
        <View >
            <Text className="text-white text-xl m-auto mt-6">Search for one plant</Text>
            <TextInput
                className={`border-violet-800 border-4 bg-white w-4/5 m-auto mt-3 mb-3 p-4 pt-2 pb-2`}
                onChangeText={onChangeText}
                value={text}
            />

        </View>
    );
}

