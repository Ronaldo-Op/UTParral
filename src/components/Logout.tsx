import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserEmail(session?.user?.email);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserEmail(session?.user?.email);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    console.log("Sesión actual:", sessionData.session);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error.message);
    } else {
      navigate("/");
      console.log("Sesión cerrada");
    }
  };

  if (!userEmail) return null;

  return (
    <div>
      <Button onClick={handleLogout} className="w-9">
        <LogOut></LogOut>
      </Button>
    </div>
  );
};

export default Logout;
