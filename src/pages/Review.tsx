import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import PrimaryButton from '@components/PrimaryButton';
import {diffChars} from 'diff';
import {StackNavigationProp} from '@react-navigation/stack';
const word = {
  word: 'define',
  pronunciation: '/dɪˈfʌɪn/',
  description: 'state or describe exactly the nature, scope, or meaning of.',
};

const answer = 'defiin';
const diff = diffChars(answer, word.word);

const Review = ({navigation}: {navigation: StackNavigationProp<any>}) => (
  <SafeAreaView style={styles.mainContainer}>
    <View style={styles.container}>
      <View style={styles.wordContainer}>
        {diff.map((section, index) => {
          let color = '#000';
          if (section.added) {
            color = '#f00';
          } else if (section.removed) {
            color = '#0f0';
          }
          return (
            <Text key={index} style={{...styles.wordText, color}}>
              {section.value}
            </Text>
          );
        })}
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackText}>Missed it by a whisker!</Text>
        <Text style={styles.feedbackText}>You’ll be re-tested tomorrow</Text>
      </View>
    </View>
    <View style={styles.buttonWrapper}>
      <PrimaryButton
        label="Next"
        onPress={() => {
          navigation.navigate('Summary');
        }}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  wordText: {
    fontSize: 36,
    marginVertical: 10,
  },
  buttonWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  feedbackContainer: {
    paddingTop: 10,
  },
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Review;
