export class Client {
    id: number;
    fullName: string;
    email: string;
    firstName?: string;
    lastName?: string;
    authdata?: string;
    phoneNumber: number;
    product: {id: number, name: string}
}