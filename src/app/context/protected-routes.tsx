import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "./auth-context";

const ProtectedRoute = ({ children }: any) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
