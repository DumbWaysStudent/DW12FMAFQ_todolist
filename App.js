import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, CheckBox } from 'react-native';
import { Button } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListItems: [
        { id: 1, name: 'Work', done: false },
        { id: 2, name: 'Swim', done: false },
        { id: 3, name: 'Study', done: false },
        { id: 4, name: 'Sleep', done: false },
        { id: 5, name: 'run', done: false }
      ],
      value: '',
      btnTitle: 'Add',
      currentEditItem: 0,
      currentEditItemName: ''
    }
  }

  handleSubmit(action) {
    if (action == 'Add') {
      let currId = this.state.todoListItems.length,
        newItems = [{
          id: currId + 1,
          name: this.state.value,
          done: false
        }]

      this.setState({ todoListItems: [...this.state.todoListItems, ...newItems] });
      this.setState({ value: '' })
    } else if (action == 'Edit') {
      let name = this.state.currentEditItemName
      let index = this.state.todoListItems.findIndex((x) => x.name == name)
      console.log(index)
      this.setState((state) => {
        return state.todoListItems[index].name = state.value
      })
      this.setState({ value: '', btnTitle: 'Add' })
    }
  }

  handleDelete(id) {
    this.setState({
      todoListItems: this.state.todoListItems.filter((items) => {
        return items.id != id
      })
    })
  }

  handleCheckbox(id) {
    let index = this.state.todoListItems.findIndex((x) => x.id == id);
    if (this.state.todoListItems[index].done == false) {
      this.setState((state) => {
        return state.todoListItems[index].done = true
      })
    } else {
      this.setState((state) => {
        return state.todoListItems[index].done = false
      })
    }
  }

  handleEdit(id, name) {
    this.setState({ value: name, btnTitle: 'Edit', currentEditItemName: name })
    this.setState({ currentEditItem: (id - 1) })
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{ flexDirection: 'row', margin: 5 }}>
          <TextInput
            style={{ flex: 1, borderWidth: 1, marginRight: 5, borderColor: 'gray', borderRadius: 3 }}
            onChangeText={(text) => this.setState({ value: text })}
            value={this.state.value}
          />
          <Button light
            style={{ borderRadius: 5, fontWeight: 'bold', padding: 10, height: 50, borderWidth: 1, borderColor: 'gray' }}
            onPress={() => this.handleSubmit(this.state.btnTitle)}>
            <Text>{this.state.btnTitle}</Text>
          </Button>
        </View>
        <View>
          {this.state.todoListItems.map((data) =>
            <View style={{ width: '100%', borderBottomWidth: 1, padding: 5, flexDirection: 'row' }}>
              <CheckBox
                value={data.done}
                onValueChange={() => this.handleCheckbox(data.id)}
              />
              <Text style={{ flex: 8, paddingVertical: 10 }}>{data.name}</Text>
              <Button
                style={{ paddingHorizontal: 10, marginRight: 5, backgroundColor: "none", borderWidth: 1, borderColor: 'grey' }}
                onPress={() => this.handleEdit(data.id, data.name)}>
                <Icon name="edit" size={20} color="green" />
              </Button>
              <Button
                style={{ paddingHorizontal: 10, backgroundColor: "none", borderWidth: 1, borderColor: 'grey' }}
                onPress={() => this.handleDelete(data.id)} >
                <Icon name="delete" size={20} color="red" />
              </Button>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default App;