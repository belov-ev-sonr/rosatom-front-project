
export class UserModel {
    id: number;
    login: string;
    firstName: string;
    secondName: string;
    middleName: string;
    phone: string;
    password: string;
    email: string;

    constructor(user: any = {}) {
        this.id = user.id;
        this.login = user.login;
        this.firstName = user.firstName;
        this.secondName = user.secondName;
        this.middleName = user.middleName;
        this.phone = user.phone;
        this.password = user.password;
        this.email = user.email;
    }
}
