export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    photo: string;
    salt: string;
    findPassword(password: string): Promise<boolean>;
}
