import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCax-Q8nCR21KK6iPLBxkX0NFh1mAadFLc",
    authDomain: "xtratime-c3b43.firebaseapp.com",
    projectId: "xtratime-c3b43",
    storageBucket: "xtratime-c3b43.appspot.com",
    messagingSenderId: "979938775550",
    appId: "1:979938775550:web:d1d4e1c2ec1cc29d86f0af"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase); 

export { firebase };