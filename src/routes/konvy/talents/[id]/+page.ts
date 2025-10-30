import { env } from "$env/dynamic/public";
import type { Talent } from "$lib/api/konvy/models";

export const load = async ({ fetch, params }) => {
  try {
    const talent: Talent = await fetch(
      env.PUBLIC_KONVY_API_URL + `/talents/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => data.data);

    return {
      talent,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to load talent",
    };
  }
};
