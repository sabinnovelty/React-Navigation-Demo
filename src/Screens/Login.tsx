import {View, Text, Pressable, Button} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

// const validCredential = {
//   email:"abc@gmail.com",
//   password:"werewrew"
// }

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('abc@gmail.com');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState<any>(null);

  const checkLogin = () => {
    if (email === 'abc@gmail.com' && password == '123') {
      navigation.navigate('Dashboard');
    } else {
      const message = 'Invalid credential';
      setError(message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      {error && <Text style={{color: 'white', fontSize: '30'}}>{error}</Text>}
      <Button
        title="If Not logged In ? PLease Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Dashboard');
          // checkLogin();
        }}
      />
      <Pressable
        onPress={() => {
          checkLogin();
        }}>
        {/* <TextInput /> */}
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
