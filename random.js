var PassSec; // 秒数カウント用変数

const randomNumber = [];
var kousinn = 0;

// 繰り返し処理の中身、１秒毎に行われる処理
function showPassageA() {
  PassSec++; // カウントアップ
  var msg = "ボタンを押してから " + PassSec + "秒が経過しました。"; // 表示文作成
  document.getElementById("PassageAreaA").innerHTML = msg; // 表示更新

  var sum = 0; //constだとfor文に反映されない
  for (let index = 0; index < 100; index++) {
    randomNumber[index] = Math.floor(Math.random() * 10); //1デバイス1秒あたり0~10回
    console.log(randomNumber); //100デバイス1秒ごとの生成データ
    sum += randomNumber[index];
    console.log(sum);
    //    console.log(sum);　//100デバイス1秒ごとの生成データの累計
  }
  kousinn += sum;
  document.getElementById("countA").innerHTML = kousinn;
}

// 繰り返し処理の開始、Startボタン
function startShowingA() {
  PassSec = 0; // カウンタのリセット
  kousinn = 0;
  PassageID = setInterval("showPassageA()", 1000); // タイマーをセット(1000ms間隔)
  document.getElementById("Astart").disabled = true; // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowingA() {
  clearInterval(PassageID); // タイマーのクリア
  document.getElementById("Astart").disabled = false; // 開始ボタンの有効化
}

//--------------------------------------------------------------------
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
  kousinn += sum;
  document.getElementById("countB").innerHTML = kousinn;
}

// 繰り返し処理の開始、Startボタン
function startShowingB() {
  PassSec = 0; // カウンタのリセット
  kousinn = 0;
  PassageID = setInterval("showPassageB()", 1000); // タイマーをセット(1000ms間隔)
  document.getElementById("Bstart").disabled = true; // 開始ボタンの無効化
}

// 繰り返し処理の中止
function stopShowingB() {
  clearInterval(PassageID); // タイマーのクリア
  document.getElementById("Bstart").disabled = false; // 開始ボタンの有効化
}
