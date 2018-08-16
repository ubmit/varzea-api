import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

const URL = 'https://rn-rails-prototype.herokuapp.com/api/v1/lists.json';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        this.setState({
          lists: response.data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

  renderItem({ item }) {
    return <ListItem title={item.title} subtitle={item.description} />;
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.state.lists}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
