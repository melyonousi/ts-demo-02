import { Login, User } from "./interface"

class Employee implements Login {
    #id: number
    protected name: string
    address: string

    get empId(): number {
        return this.#id
    }

    set empId(id: number) {
        this.#id = id
    }

    // we cannot declare a multiple constructor as default ana parametries
    // constructor() {}
    constructor(id: number, name: string, address: string) {
        this.#id = id
        this.name = name
        this.address = address
    }
    
    login(): User {
        return { id: 1, name: "Mohamed", email: "elyonousimohamed@"}
    }
    register(): User {
        return { id: 1, name: "Mohamed", email: "elyonousimohamed@", age: 27 }
    }
    logout(): void {
        console.log("Good by!");
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`
    }

    static getDateCreated(): string {
        const date = new Date()
        return date.toLocaleDateString('ma-MA', { day: "2-digit", month: "long", year: "numeric" });
    }
}
let emp1 = new Employee(1, "Mohamed", "Tetouan 93040")
let emp1_address = emp1.getNameWithAddress()
console.log({
    type: typeof Employee,
    value: Employee
});
console.log({
    type: typeof emp1,
    value: emp1
});
console.log({
    type: typeof emp1.getNameWithAddress,
    value: emp1_address
});
class Manager extends Employee {
    role: string
    constructor(id: number, name: string, address: string, role: string) {
        super(id, name, address)
        this.role = role
    }

    getNameWithAddress(): string {
        return `${this.name} is ${this.role} at ${this.address}`
    }
}
console.log({
    type: typeof Manager,
    value: new Manager(2, "Khaouda", "Tetouan", "Admin").getNameWithAddress()
});
console.log({
    type: typeof Employee.getDateCreated(),
    value: Employee.getDateCreated()
});

