let lname: string = 'Mohamed'
console.log({
    type: typeof lname,
    value: lname
});

let age: number = 25
console.log({
    type: typeof age,
    value: age
});

let dob: string = "30"
let dobresult: number = parseInt(dob)
console.log({
    dob_type: typeof dob,
    dob_result_type: typeof dobresult,
    value: dobresult
});

let isAuth: boolean = true
console.log({
    type: typeof isAuth,
    value: isAuth
});

let names: Array<string> = ["Mohamed", "Khaouda", "Haroun", "Yaqout"]
console.log({
    type: typeof names,
    value: names
});

let filter_names: Array<string> = names.filter((name) => name.toLowerCase().includes('u'))
console.log({
    type: typeof filter_names,
    value: filter_names
});

let concate: string = names.reduce((name, f) => `${name} ${f}`)
console.log({
    type: typeof concate,
    value: concate
});

// we declare enum class as const to avoid enum details
const enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Blue
console.log({
    type: typeof color,
    value: color,
});

let swapNumbs: [number, string]
function swapNumbers(param1: number, param2: string): [number, string] {
    return [param1, param2]
}
console.log({
    type: typeof swapNumbers,
    value: swapNumbers(23, "27"),
});
swapNumbs = swapNumbers(23, "27")
console.log({
    type: typeof swapNumbs,
    value: swapNumbs,
});

let department: any
department = "IT"
department = 10
console.log({
    type: typeof department,
    value: department,
});