let obj1 = {
    method1() {
        return "method 1";
    },
}

let obj2 = {
    method1() {
        return super.method1();
    },
}


Object.setPrototypeOf(obj2, obj1);

console.log(obj2)
function Person() {
}

Person.prototype = {
    name: "john",
    age: 23
}

const p1 = new Person();

p1.fullName = "john smith"

Object.defineProperty(p1, "from", {
    value: "china",
    enumerable: false  // 不可枚举
})

for (let p in p1) {
    console.log(p)
}

console.log(p1)

console.log(Object.keys(p1))  // 不遍历原型链上的值 ["fullName"]
console.log(Object.getOwnPropertyNames(p1)) // ["fullName", "from"]

// 大部分情况下Object.getOwnPropertyNames()与Object.keys(obj)的功能是一样的
// 那么这两种方法区别在哪里呢？那就是Object.getOwnPropertyNames返回的是对象所有自己的属性，而Object.keys(obj)则返回的是所有可枚举属性，也就是属性下的enumerable: false，看例子：


// let i, a;

// for( i = 0; i< 10; i++) {
//     a = document.createElement("a");
//     a.innerHTML = i + "<br>"
//     document.addEventListener("click", function(e){
//         e.preventDefault();
//         alert(i)
//     })

//     document.body.appendChild(a);
// }

Promise.resolve().then(() => {
    console.log(1)
}).catch(() => {
    console.log(2)
}).then(() => {
    console.log(3)

})



Promise.resolve().then(() => {
    console.log(1)
    throw new Error("error1")
}).catch(() => {
    console.log(2)
}).then(() => {
    console.log(3)

})



Promise.resolve().then(() => {
    console.log(1)
    throw new Error("error1")
}).catch(() => {
    console.log(2)
}).catch(() => {
    console.log(3)

})


async function fn() {
    return 100
}

(async function () {
    const a = fn();

    console.log(a)
    const b = await fn();

    console.log(b)

})()

(async function () {
    console.log('start')

    const a = await 100;

    console.log("a", a);

    const b = await Promise.resolve(200);
    console.log("b", b);


    const c = await Promise.reject(300);

    console.log("c", c);

    console.log('end')

})()