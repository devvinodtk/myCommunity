import { UserProfile } from './user-profile.model';
import { Address } from './address.model';

export interface Member extends UserProfile, Address {
    membershipId: number;
    memberDetails: UserProfile;
    primaryMemberUserId: number;
    localAddress: Address;
    permanentAddress: Address;
    familyMembers?: Array<UserProfile>;
    isActiveMember: boolean;
    typeOfMembership: string;
    membershipRenewedOnDate?: Date;
    isExecutiveCommMember: boolean;
}
