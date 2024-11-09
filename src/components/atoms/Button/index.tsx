import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/Styles/Colors';

interface ButtonProps {
  title: string;
  icon?: any;
  color?: string;
  textColor?: string;
  onPress?: () => void;
}

export function Button({
  title,
  icon,
  color = colors.primary,
  textColor = colors.primary,
  onPress,
}: ButtonProps): JSX.Element {
  const dynamicStyles = StyleSheet.create({
    container: {
      backgroundColor: color,
      paddingVertical: 15,
      paddingHorizontal: 12,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: icon ? 1 : 0,
      borderColor: icon ? colors.primary : 'white',
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    text: {
      fontSize: 18,
      fontFamily: 'Poppins-Medium',
      color: textColor,
      textAlign: 'center',
      fontWeight: icon ? '400' : '700',
    },
  });
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={dynamicStyles.container}>
        {icon && <Image source={icon} style={dynamicStyles.icon} />}
        <Text style={dynamicStyles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
