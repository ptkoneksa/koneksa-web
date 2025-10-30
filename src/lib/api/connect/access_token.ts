import { env } from "$env/dynamic/public";
import type { AuthResponse, ConnectUser } from "$lib/api/connect/models";
import type { ConnectWebResponse } from "$lib/api/connect/web_response";
import { connectUser } from "$lib/stores/connect";

export const verifyAccessToken = async (): Promise<AuthResponse | null> => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!accessToken || !refreshToken) {
    return null;
  }

  // Verify access token
  const response = await fetch(
    `${env.PUBLIC_CONNECT_API_URL}/auth/verify-access-token`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const responseBody: ConnectWebResponse<ConnectUser> = await response.json();
  if (responseBody.success && responseBody.data) {
    connectUser.set(responseBody.data);
    return {
      user: responseBody.data,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  } else {
    // Refresh access token
    if (!refreshToken) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      connectUser.set(null);
      return null;
    }
    const response = await fetch(
      `${env.PUBLIC_CONNECT_API_URL}/auth/refresh-access-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      }
    );
    const responseBody: ConnectWebResponse<AuthResponse> =
      await response.json();
    if (responseBody.success && responseBody.data) {
      localStorage.setItem("accessToken", responseBody.data.accessToken);
      localStorage.setItem("refreshToken", responseBody.data.refreshToken);
      connectUser.set(responseBody.data.user);
      return responseBody.data;
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      connectUser.set(null);
      return null;
    }
  }
};

export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};
