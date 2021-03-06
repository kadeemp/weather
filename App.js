import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayTemp from './DayTemp';

export default class App extends React.Component {
  getDays() {
    const days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const temps = ["72", "70", "68", "71", "70", "72", "75"];
    return days.map(function(day, index) {
      return <DayTemp key={index} day={days[index]} temp={temps[index]} />
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.city}>San Francisco</Text>
        <Text style={styles.dateText}>Thursday, October 5 </Text>
        <View style>
            <Text style={styles.currentTemp}> 70 </Text>
            <Text style={styles.currentTemp}> ˚ </Text>
        </View>
        <View style={styles.daysContainer}>
          {this.getDays()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  city: {
    fontSize: 40,
    marginTop: 30
  },
  dateText: {
    fontSize: 24
  },
  daysContainer: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  currentTemp: {
    fontSize: 100,
    fontWeight: 'bold'
  }
});
