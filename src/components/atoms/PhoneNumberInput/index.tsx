import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {colors} from '../../../assets/Styles/Colors';

const PhoneNumberInput = () => {
  const phoneInput = useRef<PhoneInput>(null);
  const [value, setValue] = useState<string>('');

  return (
    <PhoneInput
      ref={phoneInput}
      defaultValue={value}
      defaultCode="ID"
      layout="first"
      onChangeText={text => {
        setValue(text);
      }}
      onChangeFormattedText={() => {}}
      withDarkTheme
      autoFocus
      containerStyle={styles.containerStyle}
      textInputStyle={styles.textInputStyle}
      flagButtonStyle={styles.flagButtonStyle}
      placeholder="8128 XXXX XXXX"
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: colors.greyContainer,
    borderRadius: 12,
    padding: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  textInputStyle: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  flagButtonStyle: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
});

export default PhoneNumberInput;
