import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Switch,
  Button,
} from 'react-native';
import PrimaryButton from '@components/PrimaryButton';
import {StackNavigationProp} from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const date = new Date();

const DayPickerDay = ({
  dayLabel,
  selected,
}: {
  dayLabel: string;
  selected?: boolean;
}) => (
  <TouchableOpacity
    style={[
      styles.dayPickerButton,
      selected && styles.dayPickerButtonSelected,
    ]}>
    <Text
      style={[styles.dayPickerText, selected && styles.dayPickerTextSelected]}>
      {dayLabel.substr(0, 3)}
    </Text>
  </TouchableOpacity>
);

const Setting = ({navigation}: {navigation: StackNavigationProp<any>}) => {
  const [showTimePicker, setShowTimePicker] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Reminders</Text>

        <View style={styles.toggleContainer}>
          <Text style={styles.labelText}>Enable reminders</Text>
          <Switch trackColor={{true: '#232F6B', false: '#fff'}} />
        </View>
        <View style={styles.controlWrapper}>
          <Text style={styles.labelText}>Reminder days</Text>
          <View style={styles.dayPickerContainer}>
            <DayPickerDay dayLabel={'Sunday'} selected />
            <DayPickerDay dayLabel={'Monday'} />
            <DayPickerDay dayLabel={'Tuesday'} />
            <DayPickerDay dayLabel={'Wednesday'} />
            <DayPickerDay dayLabel={'Friday'} />
            <DayPickerDay dayLabel={'Saturday'} />
          </View>
        </View>
        <View style={styles.controlWrapper}>
          <Text style={styles.labelText}>Reminder time</Text>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <Text style={styles.timePickerText}>8:30 pm (tap to edit)</Text>
          </TouchableOpacity>
          <Modal isVisible={showTimePicker}>
            <View style={styles.timePickerContainer}>
              <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode="time"
                is24Hour={true}
                display="default"
                // onChange={onChange}
              />
              <Button title="Done" onPress={() => setShowTimePicker(false)} />
            </View>
          </Modal>
        </View>

        <Text style={styles.headerText}>Account</Text>
        <Text style={styles.labelText}>Current logged in as</Text>
        <Text style={styles.topSpacing}>Jande Doe (jane.doe@email.com)</Text>
        <PrimaryButton style={styles.topSpacing} label="Log Out" />
        <PrimaryButton
          style={styles.topSpacing}
          label="Delete Account"
          inverse
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 10,
  },
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
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  controlWrapper: {
    marginBottom: 20,
  },
  timePickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  timePickerText: {
    fontSize: 24,
    fontWeight: '200',
  },
  dayPickerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dayPickerButton: {
    borderRadius: 10,
    marginRight: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#232F6B',
  },
  dayPickerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dayPickerTextSelected: {
    color: '#fff',
  },
  dayPickerButtonSelected: {
    backgroundColor: '#232F6B',
  },
});

export default Setting;
