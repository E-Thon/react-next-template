'use client';

import { useRouter } from "next/navigation";
import { useAuth } from "../../lib/contexts/AuthContext";

export default function LogoutBtn() {
  // TODO: Import actual auth context when available
  // const { logout, token } = useAuth();
  const router = useRouter();
  const token = null; // TODO: Get from auth context
  const logout = () => {}; // TODO: Get from auth context

  function handleLogout() {
    logout();
    router.push("/");
  }

  return token ? (
    <button onClick={handleLogout} className="btn btn--secondary">
      Log out
    </button>
  ) : null;
}
