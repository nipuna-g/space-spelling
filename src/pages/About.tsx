import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Linking,
} from 'react-native';
import SpaceCadet from '@assets/images/space-cadet-bordered.svg';
import {getReadableVersion} from 'react-native-device-info';
import {TouchableOpacity} from 'react-native-gesture-handler';

let readableVersion = getReadableVersion();

const About = () => (
  <>
    <SafeAreaView>
      <View style={styles.header}>
        <SpaceCadet />
        <Text
          style={
            styles.titleText
          }>{`Spaced Spelling (version: ${readableVersion})`}</Text>
      </View>

      <View />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.itemTitle}>License</Text>
        <Text style={styles.itemContent}>
          ISC License (ISC) - Permission to use, copy, modify, and/or distribute
          this software for any purpose with or without fee is hereby granted.
        </Text>

        <Text style={styles.itemTitle}>Source Code</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://github.com/nipuna777/space-spelling')
          }>
          <Text style={styles.itemContent}>
            https://github.com/nipuna777/space-spelling
          </Text>
        </TouchableOpacity>

        <Text style={styles.itemTitle}>Developed and Maintained by</Text>
        <Text style={styles.itemContent}>Nipuna Gunathilake</Text>
      </ScrollView>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '200',
  },
  scrollView: {
    padding: 20,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemContent: {
    fontWeight: '400',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 30,
    color: '#555',
  },
});

export default About;
