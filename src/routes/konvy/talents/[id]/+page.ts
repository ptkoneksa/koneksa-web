import { PUBLIC_KONVY_API_URL } from "$env/static/public";
import type { Talent } from "$lib/api/models/konvy";

export const load = async ({ fetch, params }) => {
  try {
    const talent: Talent = await fetch(
      PUBLIC_KONVY_API_URL + `/talents/${params.id}`
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
