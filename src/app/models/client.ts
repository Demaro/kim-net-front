export class Client {
    id: number;
    fullName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    authdata?: string;
    phoneNumber: number;
    birthdate: Date;
    product: {id: number, name: string}
}