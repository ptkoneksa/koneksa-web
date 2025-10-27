export type ConnectWebResponse<T> = {
  success: boolean;
  message: string;
  data: T | null;
};
