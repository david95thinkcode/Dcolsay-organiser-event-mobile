/**
 * That const is key to access user data stored in Storage
 */

const CURRENT_USER_MAIL_KEY:string = 'DCOLSAY_email';
const CURRENT_USER_PASS_KEY:string = 'DCOLSAY_password';

export function getEmailKey() {
    return CURRENT_USER_MAIL_KEY;
}

export function getPasswordKey() {
    return CURRENT_USER_PASS_KEY;
}
