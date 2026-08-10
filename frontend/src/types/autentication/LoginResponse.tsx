export interface LoginResponse {
  success: string;
  data: {
    user_id: number;
    username: string;
    access_token: string;
    refresh_token: string;
  };
}