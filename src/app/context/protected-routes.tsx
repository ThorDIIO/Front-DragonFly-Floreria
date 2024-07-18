import { useEffect } from "react";

import { Spinner } from "@nextui-org/react";
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
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
