export class Client {
    id: number;
    razon_social?: string;
    fullName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    lastName2?: string;
    authdata?: string;
    phoneNumber: number;
    birthdate: Date;
    product: {id: number, name: string}
}