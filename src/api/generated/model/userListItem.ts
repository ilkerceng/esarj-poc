/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Swagger Esarj
 * OpenAPI spec version: 1.0.0
 */
import type { AccountType } from './accountType';
import type { Status } from './status';

export interface UserListItem {
  accountType: AccountType;
  customerId: string;
  id: number;
  personCompany: string;
  status: Status;
}
