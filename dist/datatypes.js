"use strict";
let lname = 'Mohamed';
console.log({
    type: typeof lname,
    value: lname
});
let age = 25;
console.log({
    type: typeof age,
    value: age
});
let dob = "30";
let dobresult = parseInt(dob);
console.log({
    dob_type: typeof dob,
    dob_result_type: typeof dobresult,
    value: dobresult
});
let isAuth = true;
console.log({
    type: typeof isAuth,
    value: isAuth
});
let names = ["Mohamed", "Khaouda", "Haroun", "Yaqout"];
console.log({
    type: typeof names,
    value: names
});
let filter_names = names.filter((name) => name.toLowerCase().includes('u'));
console.log({
    type: typeof filter_names,
    value: filter_names
});
let concate = names.reduce((name, f) => `${name} ${f}`);
console.log({
    type: typeof concate,
    value: concate
});
let color = 2 /* Color.Blue */;
console.log({
    type: typeof color,
    value: color,
});
let swapNumbs;
function swapNumbers(param1, param2) {
    return [param1, param2];
}
console.log({
    type: typeof swapNumbers,
    value: swapNumbers(23, "27"),
});
swapNumbs = swapNumbers(23, "27");
console.log({
    type: typeof swapNumbs,
    value: swapNumbs,
});
let department;
department = "IT";
department = 10;
console.log({
    type: typeof department,
    value: department,
});
//# sourceMappingURL=datatypes.js.map