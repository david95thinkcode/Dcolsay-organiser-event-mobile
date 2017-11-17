export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    tel: string;
    password: string;
    confirmation_code: string;
    is_confirmed: boolean;
    last_ip: string;

    constructor() {
        this.email = '';
        this.password = '';
        this.first_name = '';
        this.last_name = '';
        this.tel = '';
    }
}