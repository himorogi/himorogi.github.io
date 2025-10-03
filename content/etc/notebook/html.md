---
date: 2025-01-27T15:02:53+0900
lastmod: 2025-08-04T17:14:34+0900
title: "HTML要素—CSS確認用"
description: HTML要素の見本

---

# 見出し H1
## 見出し H2
### 見出し H3
#### 見出し H4
##### 見出し H5
###### 見出し H6

## インラインテキスト

|   |     |   |        | 
| --------  | -------- | ------ | ---------------- |
| *斜体* | **太字** | <u>下線</u> | ~打ち消し~ |
| <mark>マーク</mark>|<span style="text-emphasis:sesame;">圏点</span>| <ruby> ルビ <rp>(</rp><rt>ruby</rt><rp>)</rp> </ruby> |`code` |
|<sub>下付き文字</sub>|<sup>上付き文字</sup>| <q>引用</q>| <abbr text="略語">略語</abbr>|
|<a herf="#">リンク</a>||||

## 段落
吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。


## 引用ブロック

> あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。

## リスト

### 順序付きリスト

1. リスト項目
    1. リスト項目
        1. リスト項目

### 順序なしリスト

* リスト項目
  * リスト項目
    * リスト項目

### 説明リスト

名前
: 説明テキスト

  名前
  : 説明テキスト


## テーブル


| # |# |#  |
|---| --- |--|
|やくもたつ |いずもやえがき　つまごみに|やえがきつくる　そのやえがきを|
|あさかやま|かげさへみゆる　やまのゐの|あさきこころを　わがおもはなくに|


## 画像


![Photo by PtrQs, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, ウィキメディア・コモンズ](https://upload.wikimedia.org/wikipedia/commons/b/b6/20181020_Reutte_ZugSpitze_SAG_DSC00927a_PtrQS.jpg)

## コードブロック

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

## 水平線

***
---

## 折りたたみ要素

<details open>
  <summary>ラベル</summary>
  テキストテキストテキストテキストテキスト
</details>


## フォーム
{{< HTML >}}
<form>
<input placeholder="input text" type="text"><br>
<textarea placeholder="textarea" rows="5" cols="33"></textarea><br>
<button>ボタン</button>
<input type="button" value="INPUTボタン">
</form>
{{< /HTML >}}



