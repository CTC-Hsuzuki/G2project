// 以下、Firebase関連
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDb7jp63S9t7DsBtDk36kxn_xnQTnnkRMw",
  authDomain: "g2app-c8658.firebaseapp.com",
  databaseURL: "https://g2app-c8658.firebaseio.com",
  projectId: "g2app-c8658",
  storageBucket: "g2app-c8658.appspot.com",
  messagingSenderId: "102176875278",
  appId: "1:102176875278:web:69fef1b723bcd18220ed5f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 接続
// Get a reference to the database service
var db = firebase.firestore();
// console.log(db)
db.settings({
  timestampsInSnapshots: true,
});

//画面遷移
function syouninn() {
  var x = document.forms.id_form1.id_textbox.value;
  var y = document.forms.id_form2.pass_textbox.value;
  console.log("input ID:" + x);
  console.log("input pass:" + y);
  db.collection("users")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id, " => ", doc.data());
        var i = [];
        i = doc.data(); //コレクション
        console.log("ID:" + i["ID"]);
        console.log("pass:" + i["pass"]);
        if (i["ID"] == x && i["pass"] == y) {
          window.open("./count.html", "_blank"); // 新しいタブを開き、ページを表示
        } else {
          document.getElementById("output").innerText = "Failed";
        }
      });
    });
}
