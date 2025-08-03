import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { isAuthenticated } from "@/lib/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuthenticated();
      if (loggedIn) {
        navigate("/admin");
      }
    };

    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/admin");
    }

    setLoading(false);
  };

  return (
    <>
      <h2>Iniciar sesión</h2>
      <hr />
      <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto my-5">
        <span className="font-bold">Correo:</span>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border"
        />
        <span className="font-bold">Contraseña:</span>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border"
        />

        {error && <p className="text-red-600">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Cargando..." : "Ingresar"}
        </Button>
      </form>
    </>
  );
};

export default Login;
