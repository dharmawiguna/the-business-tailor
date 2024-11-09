import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {Gs} from '../../assets/Styles/GlobalStyle';
import {Gap, TextInput} from '../../components';
import PriceRangeSlider from '../../components/molecules/RangeSlider';
import Stepper from '../../components/molecules/Stepper';
import OperatingHours from '../../components/atoms/OperatingHours';

export function BusinessDetailForm(): JSX.Element {
  const steps = ['Business Detail', 'Verification', 'Completion'];
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View>
            <Stepper steps={steps} currentStep={0} />
            <Gap height={30} />
            <Text style={styles.title}>Complete Your Business Details</Text>
            <Text style={styles.subtitle}>
              Provide complete details to help customers find your business
              easily
            </Text>
          </View>
          <Gap height={30} />
          <TextInput label="Business Name" placeholder="Dharma Restaurant" />
          <Gap height={20} />
          <TextInput label="Location" placeholder="Denpasar, Bali" />
          <Gap height={20} />
          <TextInput label="Seating Capacity" placeholder="100" />
          <Gap height={20} />
          <TextInput label="Cuisine" placeholder="Indonesia" />

          <Gap height={40} />
          <PriceRangeSlider />

          <Gap height={40} />
          <OperatingHours />
          <Gap height={20} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 18,
    ...Gs.font600,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
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
