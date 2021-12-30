document.write("javascript!");

// 資料型別(原生) : 數值(number)、字串(string)、布林(boolean)、未定義(undefined)、空值(null)
// 物件型別(object)、符號(symbol)

// 數字 整數 浮點數(小數點)
// 宣告變數 var
var a = 1 + 2;
document.write("<br>" + a);

// 0.30000000000000004 ；使用 IEEE 754 標準 雙精準度算法 (64位元)
var b = 0.1 + 0.2;
document.write("<br>" + b);

// 修正方式
// 1. 將數值比例放大，變成非浮點數，運算之後再除以放大的倍數
var b1 = (0.1 * 10 + 0.2 * 10) / 10;
document.write("<br>" + "將數值比例放大" + b1);

// 2. 內建函數 toFixed 強制取到小數點的指定位數
var c = (0.1 + 0.2);
document.write("<br>" + c.toFixed(3));

// 字串 用 雙引號「"」 或 單引號「'」 框住的字元
var string = "測試";
var mystring = "文章";
var SmS = string + mystring;
document.write("<br>" + SmS.length);

// 布林(boolean) 只有兩種值，true(1)與false(0)
// false、0、空字串("") or ('')、NaN、null、未定義(undefined)；布林值都為 false(0)
// 其他值為 1
document.write("<br> Boolean(0)" + Boolean(NaN));
document.write("<br> Boolean(123" + Boolean(123));

// 未定義(undefined) 變數沒有被宣告；或是宣告變數但沒給值
var x;
y = 1; // 設定名稱，給予值，javascript 會將其轉換為變數
document.write("<br>" + y);