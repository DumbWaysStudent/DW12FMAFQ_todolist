import React, { Component } from 'react';
import { View, Text, Style } from 'react-native';

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
      ]
    };
  }

  render() {
    return (
      <View>
        {this.state.Items.map((data) =>
          <Text style={{ borderBottomWidth: 1, padding: 5, }}>{data}</Text>
        )
        }

      </View>
    );
  }
}


export default App;