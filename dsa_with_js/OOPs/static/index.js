class Test {
  static show() {
    console.log("Hello");
  }
}

let t = new Test();
// t.show();
// 
 //output ✅ Answer: C) Error 
// 👉 Static method object se call nahi hota


// que 2 
class Demo {
  static x = 10;
}

console.log(Demo.x);

// A) 10
// B) undefined
// C) Error
// D) null

// ✅ Answer: A) 10
// 👉 Static property class se access hoti hai

class A {
  static greet() {
    console.log("Hi");
  }
}

class B extends A {}

B.greet();

// A) Hi
// B) Error
// C) undefined
// D) Nothing

// ✅ Answer: A) Hi
// 👉 Static methods inheritance me bhi milte hain

class Sample {
  static show() {
    console.log(this);
  }
}

Sample.show();  //output [class Sample]

// this kya refer karega?

// A) window
// B) undefined
// C) Sample class
// D) object instance

// ✅ Answer: C) Sample class
// 👉 Static method me this = class itself

class X {
  static count = 0;

  constructor() {
    this.count++;
  }
}

let a = new X();
let b = new X();

console.log(X.count);

// A) 0
// B) 1
// C) 2
// D) Error

// ✅ Answer: A) 0
// 👉 Static property ko this.count se access nahi kar sakte


// MCQ 6
class Test {
  static value = 5;
}

let obj = new Test();
console.log(obj.value);


// A) 5
// B) undefined
// C) Error
// D) null

// ✅ Answer: B) undefined
// 👉 Static property instance me nahi hoti

// MCQ 7
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3));


// A) 23
// B) Error
// C) 5
// D) undefined

// ✅ Answer: C) 5


// MCQ 9 (Tricky ⚠️)

class Test {
  static show() {
    return "Hello";
  }
}

let t1 = new Test();
console.log(Test.show());
console.log(t1.show);


// A) Hello, function
// B) Hello, undefined
// C) Error
// D) undefined, undefined

// ✅ Answer: B) Hello, undefined