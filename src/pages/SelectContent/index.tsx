import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../assets/Styles/Colors';
import {Button} from '../../components';

interface SelectContentProps {
  navigation: any;
}

const categoriesData: string[] = [
  'Hawker',
  'Restaurant',
  'Bistro',
  'Food Truck',
  'Bakeries',
  'Pub',
  'Cafe',
  'Electronics',
  'Furniture',
  'Clothing',
  'Toys',
  'Books',
  'Beauty',
  'Sports',
  'Automotive',
];
export function SelectContent({navigation}: SelectContentProps): JSX.Element {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(item => item !== category),
      );
    } else if (
      selectedCategories.length < 3 ||
      selectedCategories.includes(category)
    ) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const renderCategory: ListRenderItem<string> = ({item}) => {
    const isSelected = selectedCategories.includes(item);
    return (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          isSelected ? styles.selectedCategory : styles.unselectedCategory,
        ]}
        onPress={() => toggleCategory(item)}>
        <Text style={isSelected ? styles.selectedText : styles.unselectedText}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Favorite Content</Text>
        <Text style={styles.subtitle}>Please select at least 3 categories</Text>
        <FlatList
          data={categoriesData}
          renderItem={renderCategory}
          keyExtractor={item => item}
          numColumns={3}
          contentContainerStyle={styles.grid}
        />
        <Button
          title="Next"
          color={colors.secondary}
          textColor="white"
          onPress={() => {
            navigation.navigate('BusinessDetailForm');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  grid: {
    justifyContent: 'center',
  },
  categoryItem: {
    flex: 1,
    margin: 5,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  selectedCategory: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  unselectedCategory: {
    backgroundColor: '#f7f6ff',
    borderColor: '#f7f6ff',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  unselectedText: {
    color: '#000',
  },
});
