import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPizzas = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5001/api/pizzas");
      if (!response.ok) throw new Error("Error al obtener las pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error, fetchPizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;