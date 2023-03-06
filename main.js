const sentence = [
    {kanji:"新しいスーツを買って入社式に備える",
    hiragana:"あたらしいすーつをかってにゅうしゃしきにそなえる",
    romaji:"atarasiisu-tuwokattenyuusyasikinisonaeru"
    },
    {kanji:"隣の客はよく柿食う客だ",
    hiragana:"となりのきゃくはよくかきくうきゃくだ",
    romaji:"tonarinokyakuhayokukakikuukyakuda"
    },
    {kanji:"隣の竹垣に竹立て掛けた",
    hiragana:"となりのたけがきにたけたてかけた",
    romaji:"tonarinotakegakinitaketatekaketa"
    },
    {kanji:"今日歯医者に行く",
    hiragana:"きょうはいしゃにいく",
    romaji:"kyouhaisyaniiku"
    },
    {kanji:"このドラマは来週も続くようだ",
    hiragana:"このどらまはらいしゅうもつづくようだ",
    romaji:"konodoramaharaisyuumotudukuyouda"
    },
    {kanji:"文章を校正する",
    hiragana:"ぶんしょうをこうせいする",
    romaji:"bunsyouwokouseisuru"
    },
    {kanji:"自転車事故のニュースを聞いた",
    hiragana:"じてんしゃじこのにゅーすをきいた",
    romaji:"zitensyazikononyu-suwokiita"
    },
    {kanji:"おばから入学のお祝いをもらった",
    hiragana:"おばからにゅうがくのおいわいをもらった",
    romaji:"obakaranyuugakunooiwaiwomoratta"
    }
];

// 関数の定義(0)

// ディスプレイに書き込む関数
let random_save = -1;
const display_fill = () => {
    let random = Math.floor(Math.random() * sentence.length);
    // 前回と値が同じ間は引き直し
    while(random === random_save) {
        random = Math.floor(Math.random() * sentence.length);
    }
    random_save = random;
    const display = document.getElementById('display');
    const romaji = document.getElementById('romaji');
    const fs_display = document.getElementById('fs_display');
    display.textContent = sentence[random].kanji;
    romaji.textContent = sentence[random].romaji;  
    fs_display.textContent = "";
};

// 結果発表ON関数]
const result_on = () => {
    const b2 = document.querySelector('.button2');
    // ボタン押せなくする
    b2.disabled = false;
    // ボタンの色変更
    b2.classList.add("b2_special");
    b2.style.color = "#181823";
    b2.style.backgroundColor = "white";
    b2.style.border = "0.3vwvw solid #181823"
    
    b2.addEventListener('mouseover', () => {
        b2.style.color = '#eb455f';
        b2.style.backgroundColor = 'white';
        b2.style.border = '0.3vwvw solid #eb455f';
    });
      
      b2.addEventListener('mouseout', () => {
        b2.style.color = '#181823';
        b2.style.backgroundColor = 'white';
        b2.style.border = '0.3vwvw solid #181823';
    });

}
// 結果発表OFF関数
const result_off = () => {
    const b2 = document.querySelector('.button2');
    // ボタン押せなくする
    b2.disabled = true;
    // ボタンの色変更
    b2.style.color = "#8a8a8a";
    b2.style.backgroundColor = "#ededed";
    b2.style.border = "0.3vwvw solid #8a8a8a"    
}

// 初期設定
document.addEventListener('DOMContentLoaded', function() {
    result_off();
});


// 画面切り替え(1)
let button1;
let button2;
let button3;
let button4;

document.addEventListener("DOMContentLoaded", function() {
    // 画面の切り替え(最初の設定)
    button1 = document.querySelector('#button1');
    button2 = document.querySelector('.button2');
    button3 = document.querySelector('#button3');
    button4 = document.querySelector('#button4');
    // 画面の切り替え(実際の操作)
    button1.addEventListener('click', function() {
        showScreen('screen2');
        result_off();
        display_refresh();
    }); 
    button2.addEventListener('click', function() {
        showScreen('screen3');
    }); 
    button3.addEventListener('click', function() {
        showScreen('screen1');
    }); 
    button4.addEventListener('click', function() {
        showScreen('screen2');
        result_off();
        display_refresh();
    });
    showScreen = (screen_count) => {
    const nowScreen = document.querySelector('.active');
    nowScreen.classList.remove('active');
    const nextScreen = document.getElementById(screen_count);
    nextScreen.classList.add('active');
    };

});

// ディスプレイをリセットする関数
const display_refresh = () => { 
    const display = document.getElementById('display');
    const fs_display = document.getElementById('fs_display');
    const romaji = document.getElementById('romaji');
    display.textContent = "Spaceでゲーム開始"
    fs_display.textContent = ""
    romaji.textContent = "(ESCで中断できます)"
}

document.addEventListener('DOMContentLoaded', function() {
const updatetime = () => {
        const ms = Math.floor(remaining % 1000);
        const second = Math.floor(remaining / 1000) % 60;
        const minute = Math.floor(remaining / (1000*60)) % 60;
        // const hour = Math.floor(remaining / (1000*60*60));
            
        const zero_ms = ms.toString().padStart(3, 0)
        const zero_second = second.toString().padStart(2, 0);
        const zero_minute = minute.toString().padStart(2, 0);
        // const zero_hour = hour.toString().padStart(2, 0);

        time.innerHTML = `${zero_minute}:${zero_second}.${zero_ms}`;
    };

    const time = document.getElementById('time');
    const start = document.getElementById('start');
    const reset = document.getElementById('reset');
    
    // 制限時間の設定
    const limit = 40000;
    let remaining = limit;
    // タイマー開始停止の挙動調整
    let intervalId = null;
    // スコアを蓄積する変数の定義
    let correct_Type = 0;
    let miss_Type = 0;
    let total_Type = 0;
    let score = 0;

// ---文字の判定の関数---
const check = (event) => {
    // DOMの取得
    const fs_display = document.getElementById('fs_display');
    const romaji = document.getElementById('romaji');
    total_Type += 1;
    if(event.key !== romaji.textContent.charAt(0)) {
        // ミスのスコアを+1
        miss_Type += 1;
        // 処理をせずにretun
        return;
    };
    // 正解のスコアを+1
    correct_Type += 1;
    // 未入力から既入力タグへ移動
    let yet = romaji.textContent;
    fs_display.textContent += yet.charAt(0);
    romaji.textContent = yet.substring(1);
    // 打ち終わったら書き換え
    if(romaji.textContent === "") {
        display_fill();
    };
};

// ゲーム終了時の関数
const gameEnd = () => {
    reset_time();
    // 正確性と速度の計算
    accuracy = (correct_Type / total_Type) * 100; // 正確さ
    speed = (total_Type / (limit/1000)) * 60; // 速度
    // 総合スコアの計算式(ゲームのアルゴリズム)
    score = Math.floor(((accuracy*2) + speed) / 2); // 総合点
    // もしタイプが0ならスコアを0にする
    if(total_Type === 0) {
        score = 0;
    }
    // ランクの識別
    let rank;
    switch(true) {
        case(score >= 300):
        rank = "A+"
        break;
        case(score >= 270):
        rank = "A"
        break
        case(score >= 230):
        rank = "B+"
        break
        case(score >= 200):
            rank = "B"
            break
        case(score >= 170):
            rank = "C"
            break
        case(score >= 130):
            rank = "D"
            break
        case(score >= 100):
            rank = "E"
            break
        case(score >= 80):
            rank = "F"
            break
        case(score >= 50):
            rank = "G"
            break
        case(score < 50):
            rank = "G-"
            break
    }
    // スコア＆ランクの書き込み
    result = document.getElementById('result');    
    result.innerHTML = `正しいタイプ:${correct_Type}<br>間違ったタイプ:${miss_Type}
    <br>合計のタイプ数:${total_Type}<br><span id="score">スコア:${score}</span> あなたのランクは…<span id="score">${rank}</span>です!`;
}
    
// ---ゲームスタート関数---
const gameStart = () => {
    // スコアの変数を初期化
    correct_Type = 0;
    miss_Type = 0;
    total_Type = 0;
    // 文字の書き込み(呼び出し)
    display_fill();
    // ボタン押せないようにする
    b2.disabled = true;
    // ボタンの色変更
    b2.style.color = "#8a8a8a";
    b2.style.backgroundColor = "#ededed";
    b2.style.border = "0.3vw solid #8a8a8a"
    // タイマーの開始
    let pre = new Date();
    intervalId = setInterval(function() {
        const now = new Date();
        remaining -= now - pre;
        pre = now;
        // 0になったらの処理
        if(remaining < 0) {
            gameEnd();
            result_on();
            // ディスプレイをリセット
            const display = document.getElementById('display');
            const fs_display = document.getElementById('fs_display');
            const romaji = document.getElementById('romaji');
            display.textContent = "終了"
            fs_display.textContent = ""
            romaji.textContent = "(結果発表をご覧ください)"
        };
        updatetime();
    }, 10)

    // キーが押されると関数でチェックする    
    document.addEventListener('keydown', check);

    // ディスプレイの枠線の色を変更
    const display_parent = document.querySelector('.display_parent')
    display_parent.style.border = "0.4vw solid #eb455f";
    // タイム表示の色を変更
    const time = document.getElementById('time')
    time.style.color = "#eb455f"
};

// ---リセットさせる関数---
const reset_time = () => {
    // タイマーを止めてリセット
    clearInterval(intervalId);
    intervalId = null;
    remaining = limit;
    // 時計の時間を書き込み(1分に)
    updatetime();
    // 判定を止める
    document.removeEventListener('keydown', check);
    // ディスプレイをリセット
    const display = document.getElementById('display');
    const fs_display = document.getElementById('fs_display');
    const romaji = document.getElementById('romaji');
    display.textContent = "Spaceでゲーム開始"
    fs_display.textContent = ""
    romaji.textContent = "(ESCで中断できます)"
    // ディスプレイの枠線の色を変更
    const display_parent = document.querySelector('.display_parent')
    display_parent.style.border = "0.3vw solid #181823";
    // タイム表示の色を変更
    const time = document.getElementById('time')
    time.style.color = "#181823"
};
// スタートボタンでの開始
start.addEventListener('click', function(e) {
    if(intervalId !== null) { return };
    gameStart();
});
// スペースキーでの開始
document.addEventListener('keydown', function(e) {
    if(e.key === ' ') {
        if(intervalId !== null) { return };
        setTimeout(function() {
        gameStart();
        }, 100)
    };
});
// リセットボタンでの停止
reset.addEventListener('click', function() {
    reset_time();
});
// ESCキーでの停止
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        reset_time();
        result_off();
    };
});

// ---button2の初期設定---
const b2 = document.querySelector('.button2');
// ボタン押せなくする
b2.disabled = true;
// ボタンの色変更
b2.style.color = "#8a8a8a";
b2.style.backgroundColor = "#ededed";
b2.style.border = "0.3vw solid #8a8a8a"

});
