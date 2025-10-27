import { writable } from "svelte/store";
import type { ConnectUser } from "$lib/api/connect/models";

export const connectUser = writable<ConnectUser | null>(null);
