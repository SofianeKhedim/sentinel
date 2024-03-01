declare interface UserAuthI {
  email: string;
  password: string;
}

declare interface UserI extends Omit<UserAuthI, 'password'> {
  access_token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}
