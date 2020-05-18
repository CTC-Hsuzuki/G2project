// Firebase関連
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

// リフレッシュするたびにDBへ送信される。
db.collection("songA")
  .add({
    device: [2, 3, 1],
  })
  .then((doc) => {
    console.log(`追加に成功しました (${doc.id})`);
  })
  .catch((error) => {
    console.log(`追加に失敗しました (${error})`);
  });

// // リフレッシュするたびにDBへ送信される。
// db.collection("songA")
//   .add({
//     age: 28,
//   })
//   .then((doc) => {
//     console.log(`追加に成功しました (${doc.id})`);
//   })
//   .catch((error) => {
//     console.log(`追加に失敗しました (${error})`);
//   });

// 配列をDBへ格納
// db.collection("users")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       console.log(doc.id, " => ", doc.data());
//       var i = [];
//       i = doc.data(); //コレクション
//       console.log(i["ID"]);
//       console.log(i["pass"]);
//     });
//   });
