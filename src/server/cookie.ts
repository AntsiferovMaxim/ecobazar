import { cookies } from "next/headers";

export const ANONYMOUS_COOKIE_NAME = "anonymousId";

export function getUserFromCookieOrFail(): string {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get(ANONYMOUS_COOKIE_NAME);
  const user = cookie?.value;
  if (!user) {
    throw new Error("Unkown user");
  }

  return user;
}
