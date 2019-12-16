export interface UserProfile {
    userId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    emailId?: string;
    mobile: number;
    telephone?: string;
    dateOfBirth?: Date;
    gender: string;
    eduction?: string;
    profession?: string;
    company?: string;
    bloodGroup?: string;
    photoUrl?: string;
}
