import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Gs} from '../../../assets/Styles/GlobalStyle';
import {colors} from '../../../assets/Styles/Colors';

const OperatingHours = () => {
  const [selectedTab, setSelectedTab] = useState<'Weekdays' | 'Weekend'>(
    'Weekdays',
  );
  const [hours, setHours] = useState({
    Monday: {start: '09:00 AM', end: '09:00 PM'},
    Tuesday: {start: '09:00 AM', end: '09:00 PM'},
    Wednesday: {start: '09:00 AM', end: '09:00 PM'},
    Thursday: {start: '09:00 AM', end: '09:00 PM'},
    Friday: {start: '09:00 AM', end: '09:00 PM'},
    Saturday: {start: '', end: ''},
    Sunday: {start: '', end: ''},
  });

  const handleTabChange = (tab: 'Weekdays' | 'Weekend') => {
    setSelectedTab(tab);
  };

  const renderTimeInput = (day: string) => (
    <View key={day} style={styles.row}>
      <Text style={styles.dayText}>{day}</Text>
      <TextInput
        style={styles.input}
        value={hours[day as keyof typeof hours].start}
        onChangeText={text =>
          setHours({
            ...hours,
            [day]: {...hours[day as keyof typeof hours], start: text},
          })
        }
        placeholder="Start Time"
      />
      <Text style={styles.toText}>to</Text>
      <TextInput
        style={styles.input}
        value={hours[day as keyof typeof hours].end}
        onChangeText={text =>
          setHours({
            ...hours,
            [day]: {...hours[day as keyof typeof hours], end: text},
          })
        }
        placeholder="End Time"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Text>Operating Hours</Text>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Weekdays' && styles.activeTab]}
          onPress={() => handleTabChange('Weekdays')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Weekdays' && styles.activeTabText,
            ]}>
            Weekdays
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Weekend' && styles.activeTab]}
          onPress={() => handleTabChange('Weekend')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Weekend' && styles.activeTabText,
            ]}>
            Weekend
          </Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'Weekdays' &&
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
          renderTimeInput,
        )}

      {selectedTab === 'Weekend' && ['Saturday', 'Sunday'].map(renderTimeInput)}

      <View style={styles.changeButtonWrapper}>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change Time</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    ...Gs.itemsCenter,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    marginLeft: 10,
  },
  activeTab: {
    ...Gs.bgSecondary,
    color: colors.white,
  },
  tabText: {
    color: colors.black,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    flex: 2,
    maxWidth: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  toText: {
    marginHorizontal: 10,
  },
  changeButtonWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  changeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6200ee',
    width: 180,
    textAlign: 'right',
  },
  changeButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default OperatingHours;
