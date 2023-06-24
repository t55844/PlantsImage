import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FooterComponent = () => {
    return (
        <View className='bg-green-500 w-screen'>

            <View className='flex-row items-center justify-between flex-wrap'>

                <View className='flex-col ml-2'>
                    <Text className='text-white mr-2'>
                        Phone: 123-456-7890
                    </Text>
                    <Text className='text-white mr-2'>WhatsApp: 987654321</Text>
                    <Text className='text-white mr-2'>Email: info@example.com</Text>
                </View>

                <View className='flex-col'>
                    <Text className='text-white m-auto'>Social Media:</Text>
                    <View className='flex-row p-2'>
                        <View className='bg-white rounded-full p-2 mr-2'>
                            <Ionicons name="logo-whatsapp" size={24} color="black" />
                        </View>
                        <View className='bg-white rounded-full p-2 mr-2'>
                            <Ionicons name="logo-instagram" size={24} color="black" />
                        </View>
                        <View className='bg-white rounded-full p-2'>
                            <Ionicons name="logo-facebook" size={24} color="black" />

                        </View>
                    </View>

                </View>
                <Text className='text-white m-auto p-2'>
                    &copy; 2023 My App. All rights reserved.
                </Text>
            </View>

        </View>
    );
};

export default FooterComponent;
