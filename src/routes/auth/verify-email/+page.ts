import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { env } from "$env/dynamic/public";
import { verifyAccessToken } from "$lib/api/connect/access_token";
import type { ConnectUser } from "$lib/api/connect/models";
import type { ConnectWebResponse } from "$lib/api/connect/web_response";

export const load = async ({ url }) => {
  if (browser) {
    const authResponse = await verifyAccessToken();
    if (!authResponse) {
      goto("/auth?error=token_expired");
      return {
        connectUser: null,
        url,
      };
    }

    const connectUserResponse = await fetch(
      `${env.PUBLIC_CONNECT_API_URL}/users/me`,
      {
        headers: {
          Authorization: `Bearer ${authResponse.accessToken}`,
        },
      }
    );
    const connectUserResponseBody: ConnectWebResponse<ConnectUser> =
      await connectUserResponse.json();
    if (!connectUserResponseBody.success) {
      throw new Error(connectUserResponseBody.message);
    }
    if (!connectUserResponseBody.data) {
      throw new Error("No user found");
    }
    const connectUser = connectUserResponseBody.data;
    if (connectUser.isEmailVerified) {
      goto(url.searchParams.get("targetRedirectUrl") ?? url.host + "/account");
    }
    const lastVerifyEmailSentAt = localStorage.getItem("lastVerifyEmailSentAt");
    return {
      connectUser,
      url,
      lastVerifyEmailSentAt,
    };
  }
};
