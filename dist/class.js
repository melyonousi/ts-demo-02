"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // we cannot declare a multiple constructor as default ana parametries
    // constructor() {}
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return { id: 1, name: "Mohamed", email: "elyonousimohamed@" };
    }
    register() {
        return { id: 1, name: "Mohamed", email: "elyonousimohamed@", age: 27 };
    }
    logout() {
        console.log("Good by!");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    static getDateCreated() {
        const date = new Date();
        return date.toLocaleDateString('ma-MA', { day: "2-digit", month: "long", year: "numeric" });
    }
}
_Employee_id = new WeakMap();
let emp1 = new Employee(1, "Mohamed", "Tetouan 93040");
let emp1_address = emp1.getNameWithAddress();
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
    constructor(id, name, address, role) {
        super(id, name, address);
        this.role = role;
    }
    getNameWithAddress() {
        return `${this.name} is ${this.role} at ${this.address}`;
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
//# sourceMappingURL=class.js.map