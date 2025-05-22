# React (G90) | Hito 7 - Pizzería Mamma Mía
Implementaremos rutas protegidas y vamos a utilizar el hook useParams para obtener el id de la pizza en la página de Pizza.jsx.


(*) Backend en: **http://localhost:5001/**

###  Instrucciones
1. Implementar rutas protegidas yvamos a utilizar el hook useParams para obtener el id de la pizza en la página de Pizza.jsx.
2. Crear un UserContext para almacenar el token (simulado) que estamos utilizando en el Navbar.jsx, El context tiene que tener las siguientes características:
   - Un estado que almacene el token, por defecto, estará en true.
   - Un método logout que cambie el estado del token a false.
4. Utilizar el UserContext en el Navbar.jsx, al hacer click en el botón de logout, se debe ejecutar el método logout.
5. Utilizar el UserContext en la página de Cart.jsx, deshabilita el botón "pagar" en caso de que el token sea false.
6. Implementa la ruta protegida para "/profile". Si el token es false, redirige a "/login". Además, si el token es true, los usuarios no deberían poder acceder a la página de login y register (los puedes redirigir al home).
