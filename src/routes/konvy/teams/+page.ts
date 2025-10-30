import { env } from "$env/dynamic/public";
import type { Team } from "$lib/api/konvy/models";
import type { KonvyPaginated } from "$lib/api/konvy/web_response";

export const load = async ({ fetch }) => {
  try {
    const teams: KonvyPaginated<Team> = await fetch(
      env.PUBLIC_KONVY_API_URL + "/teams"
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
