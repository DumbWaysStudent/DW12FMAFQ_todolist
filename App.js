import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Button } from 'native-base'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [
        'work',
        'Swim',
        'Study',
        'Sleep',
        'run'
      ],
      value: ''
    };
  }
  handleSubmit() {
    this.state.Items.push(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ margin: 10, flexDirection: 'row' }}>
          <TextInput
            style={{ flex: 4, marginRight: 5, borderRadius: 5, borderWidth: 1 }}
            placeholder="New todo"
            onChangeText={(text) => this.setState({ value: text })}
            value={this.state.text}
          />
          <Button light
            style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginRight: 10, height: 50 }}
            onPress={() => this.handleSubmit()}
          >
            <Text style={{ marginHorizontal: 20 }}>Add</Text>
          </Button>
        </View>
        <View>
          {this.state.Items.map((data) =>
            <Text style={{ borderBottomWidth: 1, padding: 5, }}>{data}</Text>
          )
          }
        </View>
      </SafeAreaView>
    );
  }
}


export default App;