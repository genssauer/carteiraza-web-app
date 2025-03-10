import { eUserStatus } from '../enums/user-status.enum';

export interface iUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  status: eUserStatus;
  createdAt: Date;
  updatedAt: Date;
}
