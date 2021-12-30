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
var b2 = 0.1 + 0.2;
b2.toFixed(1);
document.write("<br>" + b2);