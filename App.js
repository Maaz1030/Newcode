import {StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  // jsx content
  const [enteredGoaltext, setenteredGoaltext] = useState('');
  const [courseGoals, setCourseGoals] = useState([]); // array because the list of goals
  function goalinputHandler(enteredtext) {
    setenteredGoaltext(enteredtext);
  }

  function addgoalhandler() {
    // here new state depending on the previous state
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      enteredGoaltext,
    ]);
  }

  return (
    // first view for the input area .... second for hold the list of goals
    <View style={styles.appContainer}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Your course Goals"
          onChangeText={goalinputHandler}
        />
        <Button title="Add Goals" onPress={addgoalhandler} />
      </View>
      <View style={styles.goalscontainer}>
      <ScrollView >
        {courseGoals.map(goals => (
          <View style={styles.goalitem} key={goals}>
            <Text style={styles.goaltext} >
              {goals}
            </Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 5,
    padding: 8, //text in textinput move away from border
  },
  goalscontainer: {
    flex: 5,
  },
  goalitem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    color: 'white',
  },
  goaltext:{
    color:'white'
  }
});
