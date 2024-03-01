type InputRequiredFields<T> = {
  name: keyof T;
  label?: string;
  placeholder: string;
  type?: string;
  [key: string]: unknown;
};
