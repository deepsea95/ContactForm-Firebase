import React from 'react';
import Contact from './Contact';
import './App.css';
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

function App() {
	const firebaseConfig = {
		apiKey: 'AIzaSyAKoagglO-VFyB-c5nBLoiXDFUf_3TCvh4',
		authDomain: 'contact-form-80613.firebaseapp.com',
		projectId: 'contact-form-80613',
		storageBucket: 'contact-form-80613.appspot.com',
		messagingSenderId: '413414442326',
		appId: '1:413414442326:web:fe54cfa2f26fdaa2a442f7',
		measurementId: 'G-WY509D8CF4'
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	return (
		<div className="app">
			<Contact db={db} />
		</div>
	);
}

export default App;
