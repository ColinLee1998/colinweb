AddArticles();

function AddArticles() {

    // 陣列 id
    let ArtId = ['PortfolioBox', 'AboutBox', 'ProjectBox'];
    let ArtH1 = ['PortfolioTitle', 'AboutTitle', 'ProjectTitle'];
    let ArtH1Con = ['作品集', '關於我','專案介紹'];

    // 主要的 article id=main
    let Main = document.getElementById("main");
    
    // 產出3個標籤
    for (let i = 0; i < ArtId.length; i++) {

        // 新增 article 標籤
        let Art = document.createElement('article');
        let H1 = document.createElement("h1");

        // 新增 article 的 id 與 h1 的 class
        Art.setAttribute("id", ArtId[i]);
        H1.setAttribute("class", ArtH1[i]);

        // 在框架內新增子元素 main > article > h1
        Main.appendChild(Art);
        Art.appendChild(H1);


        // 呼叫聯絡表單
        let connacttable = document.getElementById("ContactBox");

        // 放在聯絡表單之上
        connacttable.before(Art);

        // 置入文字
        H1.innerHTML = ArtH1Con[i];
    }

}

// 將網頁資料用載入的方式置入框架中
$('#PortfolioBox').load('../web/PortTitle.html');

// jQuery 語法
// 行動裝置選單按鈕，開啟與關閉
// 1. 隱藏 MobileNav 區塊
$('#MobileNav').hide();

// 2. 點擊按鈕 Menu 開啟 MobileNav 區塊
$('#Menu').click(function() {
    $('#MobileNav').show();
});

// 3. 點擊 Close 關閉 MobileNav 區塊
$('.Close').click(function() {
    $('#MobileNav').hide();
});

function AddArticle() {
    // 呼叫主要的 article id=main
    let Main = document.getElementById("main");

    // 新增 article
    let art = document.createElement("article");

    // 新增 article 的屬性 setAttribute("id or class", "自訂名稱") id
    art.setAttribute("id", "PortfolioBox");

    // innerHTML 可寫入純文字，還可以寫入 html 的標籤
    // art.innerHTML = "<h1>在 Por 元素的開頭</h1>";

    // 在 article 新增 h1
    let h1 = document.createElement('h1');

    h1.textContent = "作品分享";

    art.appendChild(h1);

    // 取得 html 標籤(元素)中添加的子元素
    Main.appendChild(art);


    // 1. 在被選取的元素結尾插入內容 append() 置入被選取元素之中

    // 2. 在被選取的元素開頭插入內容 prepend() 置入被選取元素之中

    // 3. 在被選取的元素之後插入內容 after() 置入被選取元素標籤之後

    // 4. 在被選取的元素之前插入內容 before() 置入被選取元素標籤之前

    let Por = document.getElementById("PortfolioBox");

    Por.before(art);
};


TopBtn();
// 控制 top 按鈕
function TopBtn() {
    // 宣告變數 指向 Top 之下 a 標籤
    let Top = $('#Top');
    let Topa = $('#Top > a');
    // 隱藏按鈕
    Top.hide();

    // 設定按鈕行為
    Topa.click( function() {
        // 執行的動畫:當點擊按鈕時，畫面捲動到網頁最上方，加上滑動的秒數
        $('html, body').animate({scrollTop:0}, 0.35);
    });

    // 畫面高度 大於 300px，按鈕會出現；低於 300px，按鈕會隱藏
    $(window).scroll( function() {
        if ($(this).scrollTop() > 300) {
            // 淡入
            Top.fadeIn(222);
        } else  {
            // 淡出 先停止之前的動畫，再執行新的動畫
            Top.stop().fadeOut(222);
        }
    })
}

BannerChange();
// 控制 Banner
function BannerChange() {
    // 宣告按鈕變數
    let P01 = document.getElementById('P01');
    let P02 = document.getElementById('P02');
    let P03 = document.getElementById('P03');
    let P04 = document.getElementById('P04');
    let P05 = document.getElementById('P05');
    let Images = document.getElementById('Images');
    let AllButton = $('#AllButtons > label');

    AllButtons();
    function AllButtons() {

        // 迴圈
        for ( let i = 0; i < AllButton.length; i++) {
            // 按鈕執行
            $(AllButton[i]).click( function(ev) {
                // ev.currentTarget 監聽群組物件
                // index() 獲取 label 的索引
                // 移動的距離 npx = 索引 * 圖片的寬度
                let index = $(ev.currentTarget).index();
                let npx = (index * -100);

                $(Images).css({
                    transform: 'translateX(' + npx +'vw)',
                    transition: 'transform 1.25s'
                });
            });
        }
    }


    function Buttons() {

        // 按鈕執行的動作
        $(P01).click( function() {
            $(Images).css({
                transform: 'translateX(0vw)',
                transition: 'transform 1.5s'
            })
        });

        $(P02).click( function() {
            $(Images).css({
                transform: 'translateX(-100vw)',
                transition: 'transform 1.5s'
            })
        });

        $(P03).click( function() {
            $(Images).css({
                transform: 'translateX(-200vw)',
                transition: 'transform 1.5s'
            })
        });

        $(P04).click( function() {
            $(Images).css({
                transform: 'translateX(-300vw)',
                transition: 'transform 1.5s'
            })
        });

        $(P05).click( function() {
            $(Images).css({
                transform: 'translateX(-400vw)',
                transition: 'transform 1.5s'
            })
        });
    }
}