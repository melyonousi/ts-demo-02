export interface User {
    id: number
    name: string
    email: string
    age?: number
}
let { name: userName, email }: User = { id: 1, name: "Mohamed", email: "elyonousimohamed@gmail.com", age: 27 }

interface Student extends User {
    degree: string
}
let student: Student = { id: 2, name: "Khaouda", email: "elyonousikhaouda@gmail.com", degree: "licence" }

export interface Login {
    login(): User
    register(): User
    logout(): void
}

let [student1, ...resStudent]: Array<Student> = [
    { id: 1, name: "Mohamed", email: "elyonousimohamed@gmail.com", age: 27, degree: "technique" },
    { id: 2, name: "Khaouda", email: "elyonousikhaouda@gmail.com", degree: "licence" }
]
console.log({
    type: typeof resStudent,
    value: resStudent
});
