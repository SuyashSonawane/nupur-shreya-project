// Initialize Firebase
var config = {
    apiKey: "AIzaSyC8XAsG06Xr25MexQSRf2ONNSsX_59WNLk",
    authDomain: "fpl-pro.firebaseapp.com",
    databaseURL: "https://fpl-pro.firebaseio.com",
    projectId: "fpl-pro",
    storageBucket: "",
    messagingSenderId: "692270984403"
  };
  firebase.initializeApp(config);



  let database = firebase.database();



  const addinfo=()=>{
let name= $('#name').val()
let email= $('#email').val()
let mobile=$('#mobile').val()
let dob= $('#dob').val()
let address= $('#address').val()
let gender=$('input[name=gender]:checked').val()
let hobbies=$('#hobbies').val()
    if(name!='' && email!='' && address!='' && mobile!='' &&dob!='' &&hobbies!=''){
    let key = database.ref('/data').push().key
    database.ref('/data').child(key).set({
      name:name,
      email:email,
      dob:dob,
      address:address,
      mobile:mobile,
      gender:gender,
      hobbies:hobbies
    })
    alert('Data submitted')
  }
    else{
      alert("Enter all details")
    }
  }

