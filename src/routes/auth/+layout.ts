import { browser } from "$app/environment";

export const load = async ({ url }) => {
  let targetRedirectUrl = url.host + "/account";

  if (browser) {
    const targetRedirectUrlParams = url.searchParams.get("targetRedirectUrl");

    if (targetRedirectUrlParams) {
      localStorage.setItem("targetRedirectUrl", targetRedirectUrlParams);
    }

    targetRedirectUrl =
      localStorage.getItem("targetRedirectUrl") ?? targetRedirectUrl;
  }

  return {
    url,
    targetRedirectUrl,
  };
};
