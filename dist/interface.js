"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email } = { id: 1, name: "Mohamed", email: "elyonousimohamed@gmail.com", age: 27 };
let student = { id: 2, name: "Khaouda", email: "elyonousikhaouda@gmail.com", degree: "licence" };
let [student1, ...resStudent] = [
    { id: 1, name: "Mohamed", email: "elyonousimohamed@gmail.com", age: 27, degree: "technique" },
    { id: 2, name: "Khaouda", email: "elyonousikhaouda@gmail.com", degree: "licence" }
];
console.log({
    type: typeof resStudent,
    value: resStudent
});
//# sourceMappingURL=interface.js.map