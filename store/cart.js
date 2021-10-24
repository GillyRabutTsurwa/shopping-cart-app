import { writable, get } from "svelte/store";

export function cartOpen() {
  if (!get(cartStatus)) cartStatus.set(true);
  console.log(get(cartStatus));
}

export function cartClose() {
  if (get(cartStatus)) cartStatus.set(false);
  console.log(get(cartStatus));
}

export function toggleCartStatus() {
  get(cartStatus) ? cartStatus.set(false) : cartStatus.set(true);
}

export const cartStatus = writable(false);
