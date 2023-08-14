import {View, Text, Pressable, Button} from 'react-native';
import React from 'react';

const Register = ({navigation}: any) => {
  return (
    <View>
      <Pressable
        onPress={() => {
          navigation.navigate('Register');
        }}>
        <Text>Register</Text>
        <Button
          title="Go back to login page"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </Pressable>
    </View>
  );
};

export default Register;
