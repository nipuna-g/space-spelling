import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const MenuItem = () => (
  <TouchableOpacity style={styles.menuItem}>
    <>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>Practice spellings</Text>
        <Text style={styles.menuSubTitle}>6 words to practice for the day</Text>
      </View>
      <Svg
        style={styles.menuArrow}
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none">
        <Path
          d="M-2.06209e-06 18.03L1.77 19.8L11.67 9.89999L1.77 -1.05786e-05L-3.48358e-06 1.76999L8.13 9.89999L-2.06209e-06 18.03Z"
          fill="#232F6B"
        />
      </Svg>
    </>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F8FAFF',
    padding: 15,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  menuArrow: {alignSelf: 'center'},
  menuTextContainer: {flex: 1},
  menuTitle: {fontSize: 22, fontWeight: 'bold', marginBottom: 2},
  menuSubTitle: {fontSize: 16, fontWeight: '200'},
});

export default MenuItem;
