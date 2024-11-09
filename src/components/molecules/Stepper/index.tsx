import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle, Line} from 'react-native-svg';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({steps, currentStep}) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <Svg height="40" width="40">
            <Circle
              cx="20"
              cy="20"
              r="8"
              stroke={index <= currentStep ? '#6200EE' : '#f2f3f7'}
              strokeWidth="8"
              fill={index <= currentStep ? '#FFFFFF' : '#8a8a8c'}
            />
          </Svg>
          {index < steps.length - 1 && (
            <Svg height="2" width="80" style={styles.lineStyle}>
              <Line
                x1="0"
                y1="1"
                x2="70"
                y2="1"
                stroke={index < currentStep ? '#6200EE' : '#D3D3D3'}
                strokeWidth="2"
              />
            </Svg>
          )}
          <Text
            style={[
              styles.stepLabel,
              {color: index <= currentStep ? '#6200EE' : '#A9A9A9'},
            ]}>
            {step}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  lineStyle: {
    position: 'absolute',
    top: 20,
    left: 70,
  },
  stepContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },
  stepLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default Stepper;
