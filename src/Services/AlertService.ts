import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // Configura tu app de Firebase aquí
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export const AlertService = {
  create: async (alert: any) => {
    try {
      await db.collection('alerts').add(alert);
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getNearbyAlerts: async (location: { latitude: number; longitude: number }) => {
    try {
      const snapshot = await db
        .collection('alerts')
        .where('location', 'ne', location)
        .get();
      const alerts = [];
      snapshot.forEach((doc) => {
        alerts.push({ ...doc.data(), id: doc.id });
      });
      return alerts;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};