var PassSec; // 秒数カウント用変数

const randomNumber = [];
const importNumber = [];
var kousinnA = 0;
var kousinnB = 0;

// 繰り返し処理の中身、１秒毎に行われる処理
function showPassageA() {
  PassSec++; // カウントアップ
  var msg = "ボタンを押してから " + PassSec + "秒が経過しました。"; // 表示文作成
  document.getElementById("PassageAreaA").innerHTML = msg; // 表示更新
  console.log("<------------経過秒数:" + PassSec + "秒------------>");

  var sum = 0; //constだとfor文に反映されない
  for (let index = 0; index < 100; index++) {
    randomNumber[index] = Math.floor(Math.random() * 10); //1デバイス1秒あたり0~10回
    // sum += randomNumber[index];
  }
  console.log("乱数の生成（100デバイス分のデータ）:" + randomNumber); //1秒ごとの配列

  // 1秒ごとにに"songA"コレクションの"sec"ドキュメントへ送信される。add()はdocumentIDが自動生成される。
  db.collection("songA")
    .doc("sec" + PassSec)
    .set({
      device: randomNumber, //ID:Deviceで入れている、フィールド1つに100個
    });
  console.log("Firebaseへの追加:", randomNumber);

  // "songA"コレクションの"sec"ドキュメントを受信して、配列に加える。
  db.collection("songA")
    .doc("sec" + PassSec)
    .get()
    .then(function (doc) {
      var i = [];
      i = doc.data()["device"]; //取得時にフィールドを除外したい。

      if (doc.exists) {
        console.log("Firebaseから取得:", i);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      //取得した1秒間100デバイス分のデータを累計：単位累計値
      for (let index = 0; index < 100; index++) {
        sum += i[index];
        // console.log(sum); //100デバイス1秒ごとの生成データの累計
      }
      console.log("1秒間の累計値（単位累計値）:" + sum);

      //単位累計値を加算更新
      kousinnA += sum;
      console.log("単位累計値の合計:" + kousinnA);
      document.getElementById("countA").innerHTML = kousinnA;
    });
  // .catch(function (error) {
  //   console.log("Error getting document:", error);
  // });
}

// 繰り返し処理の開始、Startボタン
function startShowingA() {
  PassSec = 0; // カウンタのリセット
  kousinnA = 0;
  PassageID = setInterval("showPassageA()", 1000); // タイマーをセット(1000ms間隔)
  document.getElementById("Astart").disabled = true; // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowingA() {
  clearInterval(PassageID); // タイマーのクリア
  document.getElementById("Astart").disabled = false; // 開始ボタンの有効化
}

//------------------------------------------------------------------------------
//繰り返し処理の中身、１秒毎に行われる処理
function showPassageB() {
  PassSec++; // カウントアップ
  var msg = "ボタンを押してから " + PassSec + "秒が経過しました。"; // 表示文作成
  document.getElementById("PassageAreaB").innerHTML = msg; // 表示更新

  var sum = 0;
  for (let index = 0; index < 100; index++) {
    randomNumber[index] = Math.floor(Math.random() * 10); //1デバイス1秒あたり0~10回
    //   console.log(randomNumber) //100デバイス1秒ごとの生成データ
    sum += randomNumber[index];
    //    console.log(sum);　//100デバイス1秒ごとの生成データの累計
  }
  kousinnB += sum;
  document.getElementById("countB").innerHTML = kousinnB;
}

// 繰り返し処理の開始、Startボタン
function startShowingB() {
  PassSec = 0; // カウンタのリセット
  kousinnB = 0;
  PassageID = setInterval("showPassageB()", 1000); // タイマーをセット(1000ms間隔)
  document.getElementById("Bstart").disabled = true; // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowingB() {
  clearInterval(PassageID); // タイマーのクリア
  document.getElementById("Bstart").disabled = false; // 開始ボタンの有効化
}
