import { body, param } from 'express-validator';

export class CustomerValidators {
    static login() {
        return [
            body('email', 'Please enter valid Email').isEmail(),
            body('password', 'Please enter valid Password').isString(),
        ];
    }
    
    static signup() {
        return [
            body('email', 'Please enter valid Email').isEmail(),
            body('first_name', 'Please enter valid First name').isString(),
            body('last_name', 'Please enter valid Last name').isString(),
            body('mobile', 'Please enter valid Mobile').isString(),
            body('password', 'Please enter valid Password').isString(),
        ];
    }
}