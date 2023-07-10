function add(num1: number, num2: number): number {
    return num1 + num2
}
console.log({
    type: typeof add,
    value: add(3, 7)
});

function add_as_void(num1: number, num2: number): void {
    num1 + num2
}
console.log({
    type: typeof add_as_void,
    value: add_as_void(3, 7)
});

function multiple(num1: number, num2: number, num3?: number): number {
    // we can't multiply num3 cause to be undefined so we must surround it with the if statement
    return num1 * num2 * (num3 ?? 1)
}
console.log({
    type: typeof multiple,
    value: multiple(3, 7)
});

function mines(num1: number, num2: number, num3: number = 10): number {
    return num1 - num2 - num3
}
console.log({
    type: typeof mines,
    value: mines(3, 7, 0)
});

function addition(num1: number, num2: number, ...num3: Array<number>): number {
    return num1 + num2 + num3.reduce((n1, n2) => n1 + n2)
}
console.log({
    type: typeof addition,
    value: addition(3, 7, ...[5, 3, 6, 9, 8, 5, 1, 2, 3, 6, 9, 5, 2, 15, 6, 9, 8])
});

// return whatever type you need
function getItems<Type>(items: Array<Type>): Array<Type> {
    return new Array<Type>().concat(items)
}
let concatResult = getItems<number>([1, 2, 3, 4, 5])
console.log({
    type: typeof getItems,
    value: getItems<number>([1, 2, 3, 4, 5])
});
let concatString = getItems<string>(["a", "b", "c", "d", "e"])
console.log({
    type: typeof getItems,
    value: getItems<string>(["a", "b", "c", "d", "e"])
});

