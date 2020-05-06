import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import Input from '@components/Input';
import Pronounce from '@assets/images/pronounce.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Tts from 'react-native-tts';
import PrimaryButton from '@components/PrimaryButton';

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

const Practice = () => (
  <>
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.definitionContainer}
            onPress={() => {
              Tts.speak(words[0].word);
            }}>
            <Text style={styles.pronounceText}>{words[0].pronunciation}</Text>
            <Pronounce />
          </TouchableOpacity>
          <Text style={styles.defineText}>{words[0].description}</Text>
        </View>
        <Input
          autoFocus
          label="Enter correctly spelled word:"
          onChange={() => {}}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <PrimaryButton label="Next" onPress={() => {}} />
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  definitionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pronounceText: {
    fontSize: 36,
    marginRight: 10,
  },
  defineText: {
    marginVertical: 20,
  },
  buttonWrapper: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default Practice;
