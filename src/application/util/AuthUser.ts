export interface AuthUser {
  id?: number;
  fullName?: string;
  permission?: string[];
  role?: string;
  email?: string;
  person?:{ id: number };
}
