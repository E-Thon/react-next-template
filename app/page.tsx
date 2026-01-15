import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const accessTokenCookie = cookieStore.get("IPM_AT");

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessTokenCookie?.value}`
    }
  });

  const data = await response.json();
  console.log(data);
  
  return null;
}
