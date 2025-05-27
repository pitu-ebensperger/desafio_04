import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  // Estados para almacenar pizzas, manejar loading y errores
  const [pizzas, setPizzas] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  //Función para buscar pizzas de API
  const fetchPizzas = async () => { 
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5001/api/pizzas");
      if (!response.ok) throw new Error("Error al obtener las pizzas");
      const data = await response.json();
      setPizzas(data);
    } catch (err) {
      setError(err.message);
      console.error("Error para obtener las pizzas:", err);
    } finally {
      setLoading(false);
    }
  };

   // Efecto para cargar pizzas
  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading, error, fetchPizzas}}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;