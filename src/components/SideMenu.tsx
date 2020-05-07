import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SpaceCadet from '@assets/images/space-cadet.svg';
import {View, Text, StyleSheet} from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

const SideMenu = (props: any) => (
  <>
    <DrawerContentScrollView {...props} style={styles.menuHeaderBackground}>
      <View style={styles.menuHeaderBackground}>
        <Text style={styles.menuHeaderTitle}>Spaced Spelling</Text>
        <View style={styles.menuHeaderImage}>
          <SpaceCadet />
        </View>
      </View>
      <View style={styles.drawerContainer}>
        <DrawerItemList
          {...props}
          activeTintColor="#232F6B"
          itemStyle={styles.drawerItem}
          labelStyle={styles.drawerLabel}
        />
      </View>
    </DrawerContentScrollView>
    <View style={styles.drawerBottom}>
      <View style={styles.drawerLoginSection}>
        <Text>Login</Text>
      </View>
    </View>
  </>
);

export default SideMenu;

const styles = StyleSheet.create({
  menuHeaderBackground: {backgroundColor: '#232F6B'},
  menuHeaderTitle: {
    fontFamily: 'Racing Sans One',
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
  },
  menuHeaderImage: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  drawerContainer: {backgroundColor: '#fff', minHeight: 300},
  drawerItem: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginLeft: 40,
  },
  drawerLabel: {fontSize: 18, textAlign: 'center'},
  drawerBottom: {flex: 1, justifyContent: 'flex-end', backgroundColor: '#fff'},
  drawerLoginSection: {
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F8FAFF',
    paddingBottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
});
