import { nanoid } from "nanoid";
import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";
import { ANONYMOUS_COOKIE_NAME } from "./server/cookie";

export function middleware(request: NextRequest) {
  const cookiesStore = cookies();
  if (cookiesStore.has(ANONYMOUS_COOKIE_NAME)) {
    return;
  }

  const response = NextResponse.redirect(request.url);
  response.cookies.set(ANONYMOUS_COOKIE_NAME, nanoid(), {
    httpOnly: true,
    secure: true,
  });

  return response;
}
