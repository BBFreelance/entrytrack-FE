export interface AccessControlEntry {
  acl_id: number;
  user_id: number;
  resource: string;
  permission: string;
  user?: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}