import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAkfk3kTfnD67P5_dArkuazs1tjNE4bl58',
  authDomain: 'todoapp-react-v.firebaseapp.com',
  projectId: 'todoapp-react-v',
  storageBucket: 'todoapp-react-v.appspot.com',
  messagingSenderId: '1068610242366',
  appId: '1:1068610242366:web:3ae807a51318bdc3024e6f',
  measurementId: 'G-PX38HB54JY'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
