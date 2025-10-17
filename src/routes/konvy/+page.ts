import { PUBLIC_KONVY_API_URL } from "$env/static/public";
import type { Talent } from "$lib/api/models/konvy";
import type { KonvyPaginated } from "$lib/api/models/konvy/web_response";

export const load = async ({ fetch }) => {
  const talents: KonvyPaginated<Talent> = await fetch(
    PUBLIC_KONVY_API_URL + "/talents"
  )
    .then((res) => res.json())
    .then((data) => data.data);

  return {
    talents,
  };
};
