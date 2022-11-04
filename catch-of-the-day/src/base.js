import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3wUlMlbbw5O_w3VE1lJbYiaL6ANggfCM",
    authDomain: "catch-of-the-day-kloew.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-kloew-default-rtdb.firebaseio.com",
    projectId: "catch-of-the-day-kloew"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;