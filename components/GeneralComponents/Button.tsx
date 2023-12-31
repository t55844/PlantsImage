import React from 'react';

import { View, Button as NButton } from 'react-native';
import { colors } from '../globalStyle'
interface PropsButton {
    title?: string;
    color?: string;
    width?: string;
    clickAction: () => void;
}

export default function Button(props: PropsButton) {
    const { title, color, width, clickAction } = props

    return (
        <View className={`${width || "w-1/2"} `}>
            <NButton
                onPress={() => clickAction()}
                color={`${color || colors.button.primary}`}
                title={`${title || 'Click'}`}
                accessibilityLabel="Learn more about plants"
            />
        </View>
    );
}