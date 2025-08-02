/***********************************************************************
    月齢計算 version 2.3                for JavaScript 1.1
                                        (C)opyright 1998 福原直人
    新規作成 1998.11.22
    最終更新 2000.03.20  新月直前に表示されない不具合に対処
             2000.03.22  画像ファイルをPNGに変更
                         （PNG非対応ブラウザは画像を非表示に）
                         IE3.02でのJavaScriptエラーを修正
             2002.05.02  画像の格納ディレクトリを絶対URLに
             2002.05.30  コードを一部整理
             2002.07.10  version 2.2
                         Internet Explorer の古いバージョン
                         (Version 4.72.3110.1で確認)で、EUCコード
                         混じりのJavaScriptを正しく解釈できない
                         ようなので、表示をすべて英語に。
             2002.07.13  version 2.3
                         日時を整形。
                         たとえば 9:3 のようにでていたのを 09:03 と表示。

謝辞：
  月齢計算式の元ネタは、NIFTY-Serve スペースフォーラムでFAQとして公開され
　たものです。
  で、同フォーラムのWebサイト(http://www.nifty.ne.jp/forum/fspace/)に、
  このスクリプトが採用されました。面映いというか、還元できてうれしい。

このスクリプトの利用について：
  このスクリプトは、福原直人(naohito@mb.infoweb.ne.jp)が著作権を有しています。
  このスクリプトは自由にご利用ください。
  もちろん、利用に際して自由に改造していただいても結構です。

 ************************************************************************/

/*
 設定項目
*/

// 画像ファイルの格納ディレクトリのURL
var imagedir = "/images/moonphase/";

// 画像ファイルの拡張子
var suffix   = ".png";

// 画像ファイルの表示サイズ（幅）
var imageWidth = 45;

// 画像ファイルの表示サイズ（幅）
var imageHeight = 45;


/*
    PNG対応ブラウザを判定
      対応ブラウザなら true 非対応なら false
      Netscape Navigator 4.04以降
      Microsoft Internet Explorer 4.0以降(Windows版のみ)
      Mozilla (Seamonkey)を対応ブラウザと判定。
*/

function enablePNG() {
  var ver  = parseFloat(navigator.appVersion);
  var name = navigator.appName;
  var platform = navigator.platform;
  var pngOK = false;

  if (name == "Netscape" && ver >= 4.04) {
    pngOK = true;
  } else if (name == "Microsoft Internet Explorer" && ver >= 4.0) {
    if (platform.charAt(0) == "W") {
      pngOK = true;
    }
  } else if (name == "Mozilla") {
    pngOK = true;
  }
  return pngOK;
}

/*
   新月日計算
   引数  　julian  ユリウス通日
   戻り値  与えられたユリウス通日に対する直前の新月日(ユリウス日)
*/
function getNewMoon(julian) {

  var k     = Math.floor((julian - 2451550.09765) / 29.530589);
  var t     = k / 1236.85;
  var nmoon = 2451550.09765
             + 29.530589  * k
             +  0.0001337 * t * t
             -  0.40720   * Math.sin((201.5643 + 385.8169 * k) * 0.017453292519943)
             +  0.17241   * Math.sin((2.5534 +  29.1054 * k) * 0.017453292519943);
  return (nmoon);         // julian - nmoonが現在時刻の月齢

}

/*
    ユリウス通日計算
    引数　　時刻(Dateオブジェクト)
    戻り値　ユリウス通日(浮動小数点数)
*/
function getJulian(date) {

  return date.getTime() / 86400000.0+2440587.5;

}

/*
    0,1,2,3 ... を 00,01,02,03 ... に。
   （変な関数名だ）
*/
function maeZero(num){

  if (num < 10){
    return '0' + num;
  } else {
    return num;
  }

}


/*
    メイン処理
*/

var moonage;
var image;

var appName  = navigator.appName.charAt(0);
var appVer   = navigator.appVersion.charAt(0);

var nowDate   = new Date();

julian = getJulian(nowDate);

// var year    = nowDate.getYear();
// if(year < 2000){
//   year += 1900;
// }
// var month  = nowDate.getMonth() + 1;
// var day    = nowDate.getDate();
// var week   = (new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'))[nowDate.getDay()];
// var hour   = nowDate.getHours();
// var minute = nowDate.getMinutes();

var nmoon = getNewMoon(julian);
// getNewMoonは新月直前の日を与えるとうまく計算できないのでその対処
// (一日前の日付で再計算してみる)
if (nmoon > julian) {
   nmoon = getNewMoon(julian - 1.0);
}

var age     = julian - nmoon;         // julian - nmoonが現在時刻の月齢

if(appName == "N" && appVer == "2") {
    moonage = age;
} else {
    moonage = new String(age);
}

// 月齢を表示用に編集（小数以下第一位まで表示）
// 画像ファイル名を編集
// でもこんな回りくどいことをしなくてもいいような気が。。。。
if (age >= 0) {
  moonage = moonage + ".0" ;     // 小数部が0の時に備えた処理
  if (moonage.charAt(0) == ".") { // 整数部が飛ばされたときの処理
    moonage = "0" + moonage;
  }
  if(age >= 10) {
    moonage = moonage.substring(0,4) ;
    var image   = imagedir + moonage.substring(0,2) + suffix;
  } else {
    moonage = moonage.substring(0,3);
    image   = imagedir + moonage.substring(0,1) + suffix;
  }

  const sec = document.createElement('div')
  // document.write(year, '-', maeZero(month), '-', maeZero(day), ' (', week, ') ');
  // document.write(' ', maeZero(hour), ':', maeZero(minute), ' ');
  // document.write('moonage: ', moonage);

  // sec.innerHTML += `${year}-${maeZero(month)}-${maeZero(day)}, ${week} `;
  // sec.innerHTML += `${maeZero(hour)}:${maeZero(minute)}<br>`;

  // document.write(' <img width="', imageWidth, '" height="', imageHeight, '" src="', image, '" alt="" \/>');
  sec.innerHTML += '<img width="' + imageWidth + '" height="' + imageHeight + '" src="' + image + '">';

  sec.innerHTML += `<span>月齢 ${moonage}</span>`;

  document.querySelector('#moon').appendChild(sec)
}