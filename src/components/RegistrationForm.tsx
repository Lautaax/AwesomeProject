import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { AuthService } from '../services/AuthService';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [description, setDescription] = useState('');

  const handleRegistration = async () => {
    const newUser: User = {
      id: '',
      name,
      email,
      password,
      location,
      description,
    };
    await AuthService.register(newUser);
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Email:</Text>
      <TextInput style={styles