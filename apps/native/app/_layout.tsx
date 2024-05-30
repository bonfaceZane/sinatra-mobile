import { View, Text, TouchableOpacity } from 'react-native'
import '../global.css'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <View className="bg-cyan-500 flex justify-center items-center flex-1">
            {children}
            <Text className="text-5xl">Layout</Text>
            <TouchableOpacity
                className="bg-red-500 rounded-lg p-9"
                onPress={() => {
                    console.log('Pressed!! :((')
                }}
            >
                <Text className="text-3xl">Press me!!!</Text>
            </TouchableOpacity>
        </View>
    )
}
