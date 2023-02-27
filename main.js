// 関数の定義

// 表示される文字の倉庫
const sentence = [
    "新しいスーツを買って入社式に備える",
    "隣の客はよく柿食う客だ",
    "隣の竹垣に竹立て掛けた",
    "今日歯医者に行く",
    "このドラマは来週も続くようだ",
    "文章を校正する",
    "この物質は鉄の成分で構成されている",
    "自転車事故のニュースを聞いた",
    "おばから入学のお祝いをもらった",
    "キャベツの千切り",
    "少年よ大志を抱け",
    "一番好きな食べ物は寿司です",
    "オンラインショッピングを利用する",
    "僕と彼は感動的な再会をしました",
    "無人島に漂着してからもう二週間",
    "言われたとおりにやったのに",
    "どこかでお会いしませんでしたか？",
    "残念なお知らせがあります",
    "使い捨てコンタクトレンズを使いまわす",
    "私が大食いチャンピオンです",
    "生まれ変わったら鳥になりたい",
    "地球は青かった",
    "私はあなたの前にいる",
    "どこから来たんですか？",
    "今日は天気がいいですね",
    "美しい夕日を見た",
    "何か飲みませんか？",
    "私の猫は大きいです",
    "美味しい料理を食べたいです",
    "あなたはどこに住んでいますか？",
    "私はお茶を飲むのが好きです",
    "あなたの目はとてもきれいです",
    "彼はとても頭がいいです",
    "美味しいコーヒーが飲みたいです",
    "私は本を読むのが好きです",
    "あなたは何か趣味はありますか？",
    "今晩は何を食べますか？",
    "日本の伝統文化に興味があります",
    "私たちは一緒に買い物に行きました",
    "お腹が空いたので何か食べたいです",
    "バカと天才は紙一重",
    "良い香りのする花が好きです",
    "私たちは山に登りました",
    "私はアクション映画を見るのが好きです"
];

// ディスプレイに書き込む(関数)
let random_save = -1;
const display_fill = () => {
    let random = Math.floor(Math.random() * sentence.length);
    // 前回と値が同じ間は引き直し
    while(random === random_save) {
        random = Math.floor(Math.random() * sentence.length);
    }
    random_save = random;
    const display = document.getElementById('display');
    display.textContent = sentence[random];  
};

// (4)スクリーン2の後ろに書き込む(関数)
screen2_back_fill = (correct_fill) => {
    screen2_back = document.getElementById('screen2_back');
    screen2_back.textContent += correct_fill+" ";
};


// 画面切り替え(1)
let button1;
let button2;
let button3;
let button4;

document.addEventListener("DOMContentLoaded", function() {
    // 画面の切り替え(最初の設定)
    button1 = document.querySelector('#button1');
    button2 = document.querySelector('#button2');
    button3 = document.querySelector('#button3');
    button4 = document.querySelector('#button4');
    // 画面の切り替え(実際の操作)
    button1.addEventListener('click', function() {
        showScreen('screen2');
    }); 
    button2.addEventListener('click', function() {
        showScreen('screen3');
        // 結果発表が押されると、背景とインプットを空にする
        screen2_back = document.getElementById('screen2_back');
        screen2_back.textContent = "";
        const input_room = document.getElementById('input_room');
        input_room.value = "";
    }); 
    button3.addEventListener('click', function() {
        showScreen('screen1');
    }); 
    button4.addEventListener('click', function() {
        showScreen('screen2');
        display_fill();
    });
    showScreen = (screen_count) => {
    const nowScreen = document.querySelector('.active');
    nowScreen.classList.remove('active');
    const nextScreen = document.getElementById(screen_count);
    nextScreen.classList.add('active');
    };

});

// 関数を使って文字を書き込む(2)
document.addEventListener("DOMContentLoaded", function() {
display_fill();    
});


// 文字の判定(3)
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(what) {
    // 値の取得
    const display = document.getElementById('display');
    let correct = display.textContent;
    const input_room = document.getElementById('input_room');
    let answer = input_room.value;
    // 実際の処理(if文)    
        if(what.key === "Enter") {
            if(correct === answer) {
                input_room.value = "";
                screen2_back_fill(correct);
                display_fill();
            }
            else {
                input_room.value = "";
            }
        }
    });
});

// escが押されたら背景文字削除(5)
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(what_2) {
        if(what_2.key === "Escape") {
            const screen2_back = document.getElementById('screen2_back');
            screen2_back.textContent = "";
        }
    });
});

// 端末の画面のサイズにフォントサイズを合わせる(6)
document.addEventListener('DOMContentLoaded', function() {
    // 画面幅を取得
    const screenWidth = window.innerWidth;

    // フォントサイズを計算
    const fontSize = screenWidth * 0.008; // 例えば、画面幅の2%をフォントサイズに設定する場合

    // CSSのスタイルシートに適用
    document.body.style.fontSize = fontSize + 'px';
});


// ウィンドウサイズの収縮に対応(7)
function adjustFontSize() {
    // ビューポートの幅を取得する
    const width = window.innerWidth;
    
    // ベースフォントサイズを設定する
    const baseFontSize = 16;
    
    // 幅が 960px より大きい場合
    if (width > 960) {
      document.documentElement.style.fontSize = baseFontSize + "px";
    }
    // 幅が 480px より大きく 960px 以下の場合
    else if (width > 480) {
      const fontSize = baseFontSize * 0.8;
      document.documentElement.style.fontSize = fontSize + "px";
    }
    // 幅が 480px 以下の場合
    else {
      const fontSize = baseFontSize * 0.6;
      document.documentElement.style.fontSize = fontSize + "px";
    }
  }
  
  // ウィンドウのリサイズ時に関数を実行する
  window.onresize = adjustFontSize;
  
  // ページロード時に関数を実行する
  window.onload = adjustFontSize;
  
