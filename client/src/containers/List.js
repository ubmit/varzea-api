import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/v1/lists.json')
      .then(response => {
        this.setState({
          lists: response.data
        });
      })
      .catch(err => console.log(err));
  }

  renderLists() {
    return this.state.lists.map(({ title, id }) => {
      return <li key={id}>{title}</li>;
    });
  }

  render() {
    return <ul>{this.renderLists()}</ul>;
  }
}
