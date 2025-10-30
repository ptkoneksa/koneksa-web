import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import { env } from "$env/dynamic/public";
import type { ConnectWebResponse } from "$lib/api/connect/web_response";

export const load = async ({ url }) => {
  if (browser) {
    const token = url.searchParams.get("token");
    const targetRedirectUrl =
      localStorage.getItem("targetRedirectUrl") ?? "/account";

    if (!token) {
      throw new Error("Missing verify token");
    }

    const response = await fetch(
      `${env.PUBLIC_CONNECT_API_URL}/auth/verify-email-confirm?token=${token}`
    );
    const responseBody: ConnectWebResponse<string> = await response.json();
    if (!responseBody.success) {
      throw new Error(responseBody.message);
    }

    goto(targetRedirectUrl);
  }
};
