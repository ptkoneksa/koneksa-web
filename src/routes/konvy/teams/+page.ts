import { PUBLIC_KONVY_API_URL } from "$env/static/public";
import type { Talent } from "$lib/api/models/konvy";
import type { KonvyPaginated } from "$lib/api/models/konvy/web_response";

export const load = async ({ fetch }) => {
  try {
    const teams: KonvyPaginated<Talent> = await fetch(
      PUBLIC_KONVY_API_URL + "/teams"
    )
      .then((res) => res.json())
      .then((data) => data.data);

    return {
      teams,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Failed to load talents",
    };
  }
};
