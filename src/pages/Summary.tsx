import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import PrimaryButton from '@components/PrimaryButton';
import SpaceCadet from '@assets/images/space-cadet-bordered.svg';
import {StackNavigationProp} from '@react-navigation/stack';

const Summary = ({navigation}: {navigation: StackNavigationProp<any>}) => (
  <SafeAreaView style={styles.mainContainer}>
    <View style={styles.container}>
      <Text style={styles.headerText}>Training Complete!</Text>
      <View style={styles.imageContainer}>
        <SpaceCadet />
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.feedbackHeader}>Well done!</Text>
        <Text style={styles.feedbackText}>You got 2 out of 5 correct</Text>
      </View>
    </View>
    <View style={styles.buttonWrapper}>
      <PrimaryButton
        label="Finish"
        onPress={() => {
          navigation.popToTop();
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
  headerText: {
    fontSize: 32,
    fontFamily: 'Racing Sans One',
    color: '#232F6B',
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  feedbackContainer: {
    paddingTop: 10,
  },
  feedbackHeader: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  feedbackText: {
    fontSize: 18,
    textAlign: 'center',
  },
  imageContainer: {paddingVertical: 20, alignItems: 'center'},
});

export default Summary;
