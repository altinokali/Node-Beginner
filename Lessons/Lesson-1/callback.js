// setTimeout(() => {
//     console.log('Hello Ali Altınok')
//     },3000)

// setTimeout(() => {
// console.log('Hi Ali')
// },2000)

// setInterval(()=> {  // İstenilen işlevi verilen her milisaniyede
// console.log('Ben her saniye çalışacağım'); //tekrarlamasını sağlar.
// },1000)

// const sayHi = (cb)=> {
//     cb()
// }
// sayHi(()=> { // Parametre olarak bir fonksiyon verdim ve 
//     console.log('Hello everyone') // yukarıdaki fonksiyonu çalıştırdım.
// })

import fetch from "node-fetch" // tarayıcıda var ama node içerisine import edilmesi gereliydi
fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json()) // Burada üstteki apideki veriyi jsona çevirdik
    .then((users) => { 
        console.log('Users yüklendi', users) //yukarıdan bir data dönüyor ve usersa düşüyor.

    fetch("https://jsonplaceholder.typicode.com/posts/1") //then sonrasında postları çektim
    .then((data) => (data.json())
    .then((posts) => console.log('postlar yüklendi',posts)))
})


