import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ChevronRight} from '@assets/images/icons';

const MenuItem = ({
  title,
  subTitle,
  onPress,
}: {
  title: string;
  subTitle: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        <Text style={styles.menuSubTitle}>{subTitle}</Text>
      </View>
      <ChevronRight style={styles.menuArrow} />
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
