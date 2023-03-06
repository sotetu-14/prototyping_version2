const sentence = [
    {kanji:"新しいスーツを買って入社式に備える",
    romaji:"atarasiisu-tuwokattenyuusyasikinisonaeru"
    },
    {kanji:"隣の客はよく柿食う客だ",
    romaji:"tonarinokyakuhayokukakikuukyakuda"
    },
    {kanji:"隣の竹垣に竹立て掛けた",
    romaji:"tonarinotakegakinitaketatekaketa"
    },
    {kanji:"今日歯医者に行く",
    romaji:"kyouhaisyaniiku"
    },
    {kanji:"このドラマは来週も続くようだ",
    romaji:"konodoramaharaisyuumotudukuyouda"
    },
    {kanji:"文章を校正する",
    romaji:"bunsyouwokouseisuru"
    },
    {kanji:"おばから入学のお祝いをもらった",
    romaji:"obakaranyuugakunooiwaiwomoratta"
    },
    {kanji:"キャベツの千切り",
    romaji:"kyabetunosengiri"
    },
    {kanji:"少年よ大志を抱け",
    romaji:"syounenyotaisiwoidake"
    },
    {kanji:"一番好きな食べ物は寿司です",
    romaji:"itibansukinatabemonohasusidesu"
    },
    {kanji:"オンラインショッピングを利用する",
    romaji:"onrainsyoppinguworiyousuru"
    },
    {kanji:"僕と彼は感動的な再会をしました",
    romaji:"bokutokarehakandoutekinasaikaiwosimasita"
    },
    {kanji:"無人島に漂着してからもう二週間",
    romaji:"muzintounihyoutyakusitekaramounisyuukan"
    },
    {kanji:"言われたとおりにやったのに",
    romaji:"iwaretatooriniyattanoni"
    },
    {kanji:"残念なお知らせがあります",
    romaji:"zannnennnaosirasegaarimasu"
    },
    {kanji:"使い捨てコンタクトレンズを使いまわす",
    romaji:"tukaisutekontakutorenzuwotukaimawasu"
    },
    {kanji:"私が大食いチャンピオンです",
    romaji:"watasigaooguityanpiondesu"
    },
    {kanji:"生まれ変わったら鳥になりたい",
    romaji:"umarekawattaratorininaritai"
    },
    {kanji:"地球は青かった",
    romaji:"tikyuuhaaokatta"
    },
    {kanji:"私はあなたの前にいる",
    romaji:"watasihaanatanomaeniiru"
    },
    {kanji:"今日は天気がいいですね",
    romaji:"kyouhatenkigaiidesune"
    },
    {kanji:"美しい夕日を見た",
    romaji:"utukusiiyuuhiwomita"
    },
    {kanji:"私の猫は大きいです",
    romaji:"watasinonekohaookiidesu"
    },
    {kanji:"美味しい料理を食べたいです",
    romaji:"oisiiryouriwotabetaidesu"
    },
    {kanji:"私はお茶を飲むのが好きです",
    romaji:"watasihaotyawonomunogasukidesu"
    },
    {kanji:"あなたの目はとてもきれいです",
    romaji:"anatanomehatotemokireidesu"
    },
    {kanji:"彼はとても頭がいいです",
    romaji:"karehatotemoatamagaiidesu"
    },
    {kanji:"美味しいコーヒーが飲みたいです",
    romaji:"oisiiko-hi-ganomitaidesu"
    },
    {kanji:"私は本を読むのが好きです",
    romaji:"watasihahonwoyomunogasukidesu"
    },
    {kanji:"日本の伝統文化に興味があります",
    romaji:"nihonnnodentoubunkanikyoumigaarimasu"
    },
    {kanji:"私たちは一緒に買い物に行きました",
    romaji:"watasitatihaissyonikaimononiikimasita"
    },
    {kanji:"お腹が空いたので何か食べたいです",
    romaji:"onakagasuitanodenanikatabetaidesu"
    },
    {kanji:"バカと天才は紙一重",
    romaji:"bakatotensaihakamihitoe"
    },
    {kanji:"良い香りのする花が好きです",
    romaji:"iikaorinosuruhanagasukidesu"
    },
    {kanji:"私たちは山に登りました",
    romaji:"watasitatihayamaninoborimasita"
    },
    {kanji:"私はアクション映画を見るのが好きです",
    romaji:"watasihaakusyoneigawomirunogasukidesu"
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
    b2.style.border = "0.3vw solid #181823"
    
    b2.addEventListener('mouseover', () => {
        b2.style.color = '#eb455f';
        b2.style.backgroundColor = 'white';
        b2.style.border = '0.3vw solid #eb455f';
    });
      
      b2.addEventListener('mouseout', () => {
        b2.style.color = '#181823';
        b2.style.backgroundColor = 'white';
        b2.style.border = '0.3vw solid #181823';
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
    b2.style.border = "0.3vw solid #8a8a8a"    
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
    score = Math.floor(((accuracy*3) + speed)); // 総合点
    // もしタイプが0ならスコアを0にする
    if(total_Type === 0) {
        score = 0;
    }
    // ランクの識別
    let rank;
    switch(true) {
        case(score >= 850):
            rank = "A+"
            break;
        case(score >= 800):
            rank = "A"
            break;
        case(score >= 760):
            rank = "A-"
            break;
        case(score >= 730):
            rank = "B+"
            break;
        case(score >= 660):
            rank = "B"
            break;
        case(score >= 600):
            rank = "B-"
            break;
        case(score >= 540):
            rank = "C+"
            break
        case(score >= 480):
            rank = "C"
            break
        case(score >= 420):
            rank = "C-"
            break
        case(score >= 370):
            rank = "D+"
            break
        case(score >= 320):
            rank = "D"
            break
        case(score >= 280):
            rank = "D-"
            break
        case(score >= 260):
            rank = "E+"
            break
        case(score >= 240):
            rank = "E"
            break
        case(score >= 190):
            rank = "E-"
            break
        case(score >= 170):
            rank = "F+"
            break;
        case(score >= 150):
            rank = "F"
            break;
        case(score >= 120):
            rank = "G+"
            break;
        case(score < 100):
            rank = "G"
            break;
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
