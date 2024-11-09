import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {
  Button,
  Gap,
  PhoneNumberInput,
  SeparatorWithText,
} from '../../components';
import {Gs} from '../../assets/Styles/GlobalStyle';

interface SignInProps {
  navigation: any;
}
export function SignIn({navigation}: SignInProps): JSX.Element {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Welcome Back to {'\n'}Your Creative Space!
          </Text>
          <Text style={styles.subtitle}>
            Log in to Generate Stunning Content Effortlessy!
          </Text>
        </View>

        <Gap height={40} />
        <PhoneNumberInput />
        <Gap height={20} />
        <Button
          title="Login"
          color={colors.secondary}
          textColor="white"
          onPress={() => navigation.navigate('SelectContent')}
        />
        <Gap height={20} />
        <SeparatorWithText text="or" />
        <Gap height={20} />
        <Button
          title="Login with Google"
          icon={require('../../assets/Images/google.png')}
          color="white"
          textColor={colors.primary}
        />
        <Gap height={20} />
        <Button
          title="Login with Facebook"
          icon={require('../../assets/Images/facebook.png')}
          color="white"
          textColor={colors.primary}
        />

        <Text style={styles.bottomTextWrapper}>
          I agree to <Text style={styles.bottomText}>Terms of Service</Text> &{' '}
          <Text style={styles.bottomText}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    ...Gs.font600,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 13,
    ...Gs.font400,
    color: colors.grey,
  },
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  bottomTextWrapper: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 15,
  },
  bottomText: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
