import { PUBLIC_KONVY_API_URL } from "$env/static/public";
import type { Talent } from "$lib/api/konvy/models";
import type { KonvyPaginated } from "$lib/api/konvy/web_response";

export const load = async ({ fetch }) => {
  try {
    const talents: KonvyPaginated<Talent> = await fetch(
      PUBLIC_KONVY_API_URL + "/talents"
    )
      .then((res) => res.json())
      .then((data) => data.data);

    return {
      talents,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to load talents",
    };
  }
};
