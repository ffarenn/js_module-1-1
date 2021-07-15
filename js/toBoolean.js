//// --- TO BOOLEAN ---

//  строчное значение К Boolean
let value = "Bla Bla Bla";

// 1

let toBoolean = Boolean(value);
console.log(`${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`Тип данных ${value}, через !!: `, typeof toBoolean);


//  строчное число К Boolean
value = "123";

// 1

toBoolean = Boolean(value);
console.log(`${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`Тип данных ${value}, через !!: `, typeof toBoolean);

//  пустая строка К Boolean
value = "";

// 1

toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных пустая строка${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`пустая строка ${value}, через !!: `, toBoolean);
console.log(`Тип данных пустая строка ${value}, через !!: `, typeof toBoolean);

//  строка с пробелом К Boolean
value = " ";

// 1

toBoolean = Boolean(value);
console.log(`строка с пробелом ${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных строка с пробелом${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`строка с пробелом ${value}, через !!: `, toBoolean);
console.log(`Тип данных строка с пробелом ${value}, через !!: `, typeof toBoolean);

//  infinity К Boolean
value = Infinity;

// 1

toBoolean = Boolean(value);
console.log(`${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`Тип данных ${value}, через !!: `, typeof toBoolean);

//  undefined К Boolean
value = undefined;

// 1

toBoolean = Boolean(value);
console.log(`${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`Тип данных ${value}, через !!: `, typeof toBoolean);

//  undefined К Boolean
value = undefined;

// 1

toBoolean = Boolean(value);
console.log(`${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`Тип данных ${value}, через !!: `, typeof toBoolean);

//  NaN К Boolean
value = NaN;

// 1

toBoolean = Boolean(value);
console.log(`${value}, через конструктор String(): `, toBoolean);
console.log(`Тип данных ${value}, через конструктор String(): `, typeof toBoolean);

// 2
toBoolean = !!value;
console.log(`${value}, через !!: `, toBoolean);
console.log(`Тип данных ${value}, через !!: `, typeof toBoolean);