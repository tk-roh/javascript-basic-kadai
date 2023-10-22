//変数numに0～50までのランダムな整数を代入する
let num = Math.floor(Math.random() * 51);

//変数numによって、出力する文字列を切り替える
if (num % 3 === 0) {
    console.log('3の倍数です');
}
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
else if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}
else {
    console.log(num);
}