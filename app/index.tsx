import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function App() {
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className='h-full w-full absolute' source={require('@/assets/images/welcome.png')} />

      <LinearGradient
        colors={['transparent', '#000000']}
        style={{ width: wp(100), height: hp(100) }}
        start={{ x: 2.2, y: 0.5 }}
        end={{ x: 0.2, y: 1 }}
        className='flex justify-end pb-12 space-y-8'
      >
        <View className='flex flex-1 pb-12 items-center justify-end'>
          <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-wide'>
            Meu <Text className='text-rose-500'>Treino</Text>
          </Text>
        </View>

        <View className='pb-32'>
          <TouchableOpacity
            style={{ height: hp(7), width: wp(80) }}
            className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
          >
            <Text style={{ fontSize: hp(3) }} className='text-white font-bold tracking-widest'>
              Começar
            </Text>
          </TouchableOpacity>
        </View>

      </LinearGradient>
    </View>
  );
}