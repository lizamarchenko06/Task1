class User {
    private _name: string;
    private readonly _login: string;
    private _password: string;
    private readonly _grade: number;
    static count: number = 0;

    constructor(name: string, login: string, password: string, grade: number) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return '********';
    }

    showInfo(): void {
        console.log(`Name: ${this._name}, Login: ${this._login}`);
    }

    eq(user: User): boolean {
        return this._grade === user._grade;
    }

    lt(user: User): boolean {
        return this._grade < user._grade;
    }

    gt(user: User): boolean {
        return this._grade > user._grade;
    }
}

class SuperUser extends User {
    private _role: string;
    static count: number = 0;

    constructor(name: string, login: string, password: string, role: string, grade: number) {
        super(name, login, password, grade);
        this._role = role;
        SuperUser.count++;
    }

    get role(): string {
        return this._role;
    }

    set role(role: string) {
        this._role = role;
    }

    showInfo(): void {
        console.log(`Name: ${this._name}, Login: ${this.login}, Role: ${this._role}`);
    }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3);
const user2 = new User('George Harrison', 'george', '5678', 2);
const user3 = new User('Richard Starkey', 'ringo', '8523', 3);
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5);

user1.showInfo();
admin.showInfo();

console.log(`Всего обычных пользователей: ${User.count}`);
console.log(`Всего супер-пользователей: ${SuperUser.count}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = 'Ringo Starr';
user1.name = 'New Name';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

try {
    user2.login = 'geo';
} catch (error) {
    console.log(error);
}

try {
    console.log((user3 as any).grade);
} catch (error) {
    console.log(error);
}

try {
    (admin as any).grade = 10;
} catch (error) {
    console.log(error);
}

