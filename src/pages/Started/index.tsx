import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {colors} from '../../assets/Styles/Colors';
import {Button} from '../../components/atoms/Button';

interface StartedProps {
  navigation: any;
}

export default function GetStarted({navigation}: StartedProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/heroStarted.png')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Transform Your {'\n'} Vision Into Reality!
      </Text>
      <Text style={styles.subtitle}>
        Welcome to the new era of AI content generator
      </Text>

      <View style={styles.containerButton}>
        <Button
          title="Get Started"
          color={colors.white}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    ...Gs.itemsCenter,
  },
  title: {
    fontSize: 32,
    marginTop: 50,
    textAlign: 'center',
    ...Gs.textWhite,
    ...Gs.font700,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
    ...Gs.textWhite,
    ...Gs.font600,
  },
  image: {
    height: 400,
    width: 400,
  },
  containerButton: {
    width: '100%',
    marginTop: 140,
    paddingHorizontal: 24,
    paddingVertical: 26,
  },
});
