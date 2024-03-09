import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import AuthService from '../services/AuthService';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const user = await AuthService.login(email, password);
    if (user) {
      console.log('Login successful:', user);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginForm;