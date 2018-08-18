import React from 'react';
import { View } from 'react-native';
import List from '../containers/List';
import StatusBar from '../components/StatusBar';

const App = () => {
  return (
    <View>
      <StatusBar />
      <List />
    </View>
  );
};

export default App;
