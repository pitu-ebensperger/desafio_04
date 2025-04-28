# React (G90) | Hito 3 - Pizzería Mamma Mía
El objetivo de este hito es implementar la renderización dinámica de componentes en la
aplicación web.


###  Instrucciones

1. En el componente *Home*: 
        (a) Importa pizzas del archivo pizzas.js; 
        (b) Recorre el array de pizzas y renderiza un componente *CardPizza* por cada pizza, pasándole las props necesarias.
        (c) El resultado final deberían ser 6 tarjetas de pizza con la información correspondiente.
2. Itera por la lista de ingredientes de cada pizza y renderiza un *li* por cada ingrediente. Puedes basarte en los pantallazos de referencia para ver cómo debería quedar.
3. Vamos a simular un carrito de compras en la aplicación. Para esto crea un nuevo componente *Cart* que se renderice en App.jsx. Deja comentado el componente *Home* por ahora en App.jsx. 

*En próximas secciones conoceremos cómo trabajar con rutas y hará sentido tener estos componentes, por ahora solo dejalos comentados para su evaluación.*

###  Objetivos

- *Home*: Se recorre el array de pizzas y renderiza un componente *CardPizza*.
- *CardPizza*: Muestra la información de cada pizza utilizando props.
- *CardPizza*: Itera por la lista de ingredientes de cada pizza y renderiza un *li* por cada ingrediente
- *Cart*: Recorre el array de pizzaCart y muestra la información de cada pizza en el carrito.
- *Cart*: Agrega botones para aumentar y disminuir la cantidad de pizzas en el carrito.
- *Cart*: Calcula el total de la compra y muéstralo en el carrito


