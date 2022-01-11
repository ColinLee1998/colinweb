AddArticle();

function AddArticle() {
    // 呼叫主要的 article id=main
    let Main = document.getElementById("main");

    // 新增 article
    let art = document.createElement("article");

    // 新增 article 的屬性 setAttribute("id or class", "自訂名稱") id
    art.setAttribute("id", "Portfolio");

    // innerHTML 可寫入純文字，還可以寫入 html 的標籤
    art.innerHTML = "測試";

    // 取得 html 標籤(元素)中添加的子元素
    Main.appendChild(art);
}