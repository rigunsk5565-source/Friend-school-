import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDWXL3PsxbLkNK8QzKdBbXTuiea-p5FBrg",
  authDomain: "friend-school.firebaseapp.com",
  projectId: "friend-school",
  storageBucket: "friend-school.firebasestorage.app",
  messagingSenderId: "533284626484",
  appId: "1:533284626484:web:0885b2d3eac70b24552a61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.registerUser = async function(){
 const name=document.getElementById('name').value;
 const phone=document.getElementById('phone').value;
 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;

 try{
  const user=await createUserWithEmailAndPassword(auth,email,password);
  await setDoc(doc(db,'users',user.user.uid),{
   name,phone,email,createdAt:new Date().toISOString()
  });
  msg.textContent='Registration successful';
 }catch(e){ msg.textContent=e.message; }
}

window.loginUser = async function(){
 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;

 try{
  await signInWithEmailAndPassword(auth,email,password);
  msg.textContent='Login successful';
 }catch(e){ msg.textContent=e.message; }
}
