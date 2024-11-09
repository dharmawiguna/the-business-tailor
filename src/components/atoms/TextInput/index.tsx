import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {colors} from '../../../assets/Styles/Colors';

interface TextInputProps {
  label: string;
  placeholder: string;
}

export function TextInput({label, placeholder}: TextInputProps): JSX.Element {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN placeholder={placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.greyContainer,
    borderRadius: 8,
    padding: 15,
  },
});
