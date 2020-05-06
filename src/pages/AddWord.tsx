import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Input from '@components/Input';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';

const words = [
  {
    word: 'define',
    pronunciation: '/dɪˈfʌɪn/',
    description: 'state or describe exactly the nature, scope, or meaning of.',
  },
  {
    word: 'define',
    pronunciation: '/dɪˈfʌɪn/',
    description: 'state or describe exactly the nature, scope, or meaning of.',
  },
];
const AddWord = () => (
  <>
    <SafeAreaView>
      <View style={styles.container}>
        <Input label="Search for a word:" onChange={() => {}} />
        <ScrollView>
          {words.map(({word, pronunciation, description}) => (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => {
                Toast.show(`Added new word: ${word}`);
              }}>
              <Text style={styles.cardTitle}>
                {word} {pronunciation}
              </Text>
              <Text>{description}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.noResults}>
            <Text>No Results Found</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  noResults: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultText: {
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: '#F8FAFF',
    marginTop: 15,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bbb',

    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default AddWord;
