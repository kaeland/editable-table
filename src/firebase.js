import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyANuK7v8g-SB-QX8E80mpVtfq2RP1FsCAc",
  authDomain: "editable-table.firebaseapp.com",
  databaseURL: "https://editable-table.firebaseio.com",
  projectId: "editable-table",
  storageBucket: "editable-table.appspot.com",
  messagingSenderId: "156825529182"
};
firebase.initializeApp(config);

export default firebase;