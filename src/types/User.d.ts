declare interface UserAuthI {
  email: string;
  password: string;
}

declare interface UserI extends Omit<UserAuthI, 'password'> {
  id: string;
  name: string;
}
