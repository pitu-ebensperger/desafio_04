# React (G90) | Hito 5 - Pizzería Mamma Mía
En este hito se realizará la implementación del enrutamiento con lo aprendido hasta el momento en React Router. El sistema de enrutamiento responderá a una vista index, a los componentes register, login, cart, entre otros.


(*) Backend en: **http://localhost:5001/**

###  Instrucciones
1. Realizar las instalaciones necesarias para trabajar con React Router y su respectiva configuración en el proyecto.
2. Trasladar los componentes Home, Register, Login, Cart y Pizza a la carpeta pages.
3. Crear las rutas necesarias para los componentes:
    - ruta "/"
    - ruta "/register"
    - ruta "/login"
    - ruta "/cart"
    - ruta "/pizza/p001"
    - ruta "/profile"
    - ruta "/404"
4. Implementar un componente NotFound que se muestre cuando una ruta no exista.
5. Implementar un componente Profile que muestre un email de un usuario y un botón para cerrar sesión.
6. Crear un componente Navbar que contiene un menú de navegación con enlaces a las rutas anteriores  (utilizando Link). Además, el botón "🛒 Total: $xxx" redirige a la ruta “/cart”.