import { goto } from "$app/navigation";
import { PUBLIC_CONNECT_API_URL } from "$env/static/public";
import type { ConnectUser } from "$lib/api/models/connect";
import type { ConnectWebResponse } from "$lib/api/models/connect/web_response";

export const load = async ({ url }) => {
  const connectUserResponse = await fetch(
    `${PUBLIC_CONNECT_API_URL}/auth/user`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
  return {
    connectUser,
    url,
  };
};
