import React, { Component } from 'react';
import { View, Text, TextInput, SafeAreaView, CheckBox } from 'react-native';
import { Button } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [
        { id: 1, name: 'work', status: false },
        { id: 2, name: 'Swim', status: false },
        { id: 3, name: 'Study', status: false },
        { id: 4, name: 'Sleep', status: false },
        { id: 5, name: 'run', status: false }
      ],
      value: ''
    };
  }
  handleSubmit() {
    let i = this.state.Items.length
    this.setState((state) => {
      const list = state.Items.push({
        id: i + 1, name: this.state.value
      })
      return { list, value: '' }
    })
    this.setState({ value: '' })
  }

  handleDelete(id) {
    for (let i = 0; i < this.state.Items.length; i++) {
      if (this.state.Items[i].id == (id)) {
        this.setState((state) => {
          const list = state.Items.splice(i, 1)
          return list
        })
      }
    }
  }

  handleCheckbox(id) {
    if (this.state.Items[id - 1].status == false) {
      this.setState((state) => {
        const list = state.Items[id - 1].status = true
        return list
      })
    } else {
      this.setState((state) => {
        const list = state.Items[id - 1].status = false
        return list
      })
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ margin: 10, flexDirection: 'row' }}>
          <TextInput
            style={{ flex: 4, marginRight: 5, borderRadius: 5, borderWidth: 1 }}
            placeholder="New todo"
            onChangeText={(text) => this.setState({ value: text })}
            value={this.state.value}
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
            <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
              <CheckBox
                value={data.status}
                onValueChange={() => this.handleCheckbox(data.id)}
                style={{ marginTop: 15 }}
              />
              <Text style={{ padding: 5, flex: 8, paddingVertical: 20 }}>{data.name}</Text>
              <Button
                onPress={() => this.handleDelete(data.id)}
                style={{ paddingHorizontal: 5, backgroundColor: 'none', marginTop: 5, marginRight: 10 }}>
                <Icon name="delete" size={30} color='red' />
              </Button>
            </View>
          )
          }
        </View>
      </SafeAreaView >
    );
  }
}


export default App;