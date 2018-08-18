import React from 'react';
import { View, StatusBar as Bar, Platform } from 'react-native';

const StatusBar = props => {
  const height = Platform.OS === 'ios' ? 20 : 0;
  const { backgroundColor } = props;

  return (
    <View style={{ height, backgroundColor }}>
      <Bar {...props} />
    </View>
  );
};

export default StatusBar;
