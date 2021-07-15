// --- TO STRING ---

//  ЧИСЛО К СТРОКЕ
let value = 0;

// 1

let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2
toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);


value = 1;

// 1

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);

// Infitiny
value = Infinity;

// 1

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);

// Not a number
value = NaN;

// 1

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);

//  Boolean (logic) true to string
value = true;

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);

//  Boolean (logic) false to string
value = false;

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);


//  Undefined to string
value = undefined;

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);

//  NaN to string
value = NaN;

toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toString);

// 2

toString = value + "";
console.log(`${value}, через конкатенацию String(): `, toString);
console.log(`Тип данных ${value}, через конкатенацию String(): `, typeof toString);