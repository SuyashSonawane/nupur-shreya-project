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
  const showdata=()=>{
    firebase.database().ref('/data').once('value', function(snapshot) {
      let itemarr=snapshotToArray(snapshot)
      let i=0
      let m=0;
      for(i=0;i<itemarr.length;i++){
         
       
          $('#table').append('<tr> <td>' +  ++m + '</td>    <td>' + itemarr[i].name + '</td>    <td>'+ itemarr[i].mobile+'</td>    <td>'+ itemarr[i].email +'</td>   <td>'+itemarr[i].dob+'</td></tr>')
      }
  });
  }
  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;

};
showdata()