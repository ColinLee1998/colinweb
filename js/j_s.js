document.getElementById('ProjectContent').textContent="測試文字";

let Items = ['Item01', 'Item02', 'Item03'];

for (let i = 0; i < Items.length; i++) {

    // 在 html 內新增標籤 li
    let liName = document.createElement('li');

    // 陣列內的資料，置入 li 之內
    liName.textContent = Items[i];

    // 在哪個 html 標籤內，產生 li 清單物件
    let Div = document.getElementById('ProjectContent');
    Div.appendChild(liName);
}

// 變數 變更值
let a = 3.14;
console.log(a);
a = 2;
console.log(a);

// 常數 無法變更值
const pi = 3.14;

console.log(pi);
pi = 2;
console.log(pi);