import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AlertService from '../services/AlertService';

const MapScreen: React.FC = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    AlertService.getNearbyAlerts(region).then((alerts) => console.log('Alerts:', alerts));
  }, [region]);

  const handleMarkerPress = (alert: any) => {
    // Mostrar una alerta más grande o una pantalla de detalles de la alerta
    console.log('Alert pressed:', alert);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} onRegionChange={setRegion}>
        {/* Mostrar marcadores de alertas */}
        <Marker coordinate={region} onPress={() => handleMarkerPress({})} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;