import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';

const PriceRangeSlider = () => {
  const [price, setPrice] = useState(100000);

  return (
    <View>
      <Text style={styles.label}>Price Range</Text>
      <Slider
        style={styles.slider}
        minimumValue={100000}
        maximumValue={5000000}
        step={50000}
        value={price}
        onValueChange={value => setPrice(value)}
        minimumTrackTintColor="#4A5EE5"
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor="#4A5EE5"
      />
      <View style={styles.priceLabels}>
        <Text style={styles.priceText}>Rp 100.000</Text>
        <Text style={styles.priceText}>Rp {price.toLocaleString('id-ID')}</Text>
        <Text style={styles.priceText}>Rp 5.000.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceText: {
    fontSize: 14,
    color: '#7D7D7D',
  },
});

export default PriceRangeSlider;
