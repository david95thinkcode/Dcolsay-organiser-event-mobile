export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    
    confirmation_code: string;
    is_confirmed: boolean;
    last_ip: string;
}