import { browser } from "$app/environment";
import { goto } from "$app/navigation";

export const load = async ({ url }) => {
  if (browser) {
    const token = url.searchParams.get("token");
    const refreshToken = url.searchParams.get("refresh_token");
    const targetRedirectUrl =
      localStorage.getItem("targetRedirectUrl") ?? "/account";

    if (!token || !refreshToken) {
      goto("/auth?error=missing_token_or_refresh_token");
      return;
    }

    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.removeItem("targetRedirectUrl");

    window.location.href = targetRedirectUrl;
  }
};
