import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import SpaceCadet from '@assets/images/space-cadet-bordered.svg';
import MenuItem from '@components/MenuItem';
import {StackNavigationProp} from '@react-navigation/stack';

const Home = ({navigation}: {navigation: StackNavigationProp<any>}) => (
  <>
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{'Good morning\nspace cadet!'}</Text>
          <View style={styles.headerContainer}>
            <SpaceCadet height={130} />
            <View style={styles.headerTextContainer}>
              <Text style={styles.headerTextNextRank}>Next rank</Text>
              <Text style={styles.headerTextRank}>Space crew member</Text>
              <Text style={styles.headerTextGoals}>
                {'Add 5 new words\nPractice 5 days in a row'}
              </Text>
            </View>
          </View>
        </View>
        <MenuItem
          onPress={() => {
            navigation.navigate('Practice');
          }}
          title="Practice spellings"
          subTitle="6 words to practice for the day"
        />
        <MenuItem
          onPress={() => {
            navigation.navigate('Add Word');
          }}
          title="Add Word"
          subTitle="Add new word to be practiced"
        />
        <View />
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: 'Racing Sans One',
    fontSize: 36,
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerTextContainer: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  headerTextNextRank: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTextRank: {fontSize: 16, marginBottom: 8},
  headerTextGoals: {fontSize: 14, fontWeight: '200'},
});

export default Home;
