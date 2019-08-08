import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    flatNo: string;
    photourl: string;
    contactNumber: string;
    userType: string;
    photos?: Photo[];
}
