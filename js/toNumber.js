//// --- TO NUMBER ---

//  строчное значение К ЧИСЛУ
let value = "Bla Bla Bla";

// 1

let toNumber = Number(value);
console.log(`${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`Тип данных ${value}, через унарный +: `, typeof toNumber);

//  строчное число К ЧИСЛУ
value = "123";

// 1

toNumber = Number(value);
console.log(`${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber);
console.log(`Тип данных ${value}, через унарный +: `, typeof toNumber);

//  пустая строка К ЧИСЛУ
value = "";

// 1

toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных пучтой строки ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`пустая строка ${value}, через унарный +: `, toNumber);
console.log(`Тип данных пучтой строки ${value}, через унарный +: `, typeof toNumber);

// строка с пробелом К ЧИСЛУ
value = " ";

// 1

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через унарный +: `, typeof toNumber);


//  Boolean (logic) true to тгьиук
value = true;

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через унарный +: `, typeof toNumber);

//  Boolean (logic) false to string
value = false;

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через унарный +: `, typeof toNumber);


//  Undefined to string
value = undefined;

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через унарный +: `, typeof toNumber);

//  NaN to string
value = NaN;

toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор String(): `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через конструктор String(): `, typeof toNumber);

// 2
toNumber = +value;
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`Тип данных строка с пробелом ${value}, через унарный +: `, typeof toNumber);