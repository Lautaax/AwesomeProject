import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Configura tu app de Firebase aquí
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const AuthService = {
  register: async (name: string, email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      await user?.updateProfile({ displayName: name });
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  login: async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },
  handleLoginCallback: () => {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = urlParams.get('access_token');
    const idToken = urlParams.get('id_token');
    if (accessToken && idToken) {
      firebase.auth().signInWithCustomToken(idToken).then(() => {
        window.history.replaceState({}, document.title, '/');
      });
    }
  },
};