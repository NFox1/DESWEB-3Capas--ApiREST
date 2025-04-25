# DESWEB-3Capas--ApiREST
Esta aplicación implementa una API REST para la gestión de productos, manteniendo una arquitectura de 3 capas, aunque la capa de controlador se ha integrado directamente en las rutas de Express en app.js para simplificar.

Características de una API REST implementadas:

Uso de métodos HTTP estándar:  
GET /productos: Recupera la lista de todos los productos.  
POST /productos: Crea un nuevo producto.  

Uso de rutas basadas en recursos: La URL /productos representa la colección de productos. 

Transferencia de estado mediante JSON: Las solicitudes y respuestas utilizan el formato JSON para la transferencia de datos.  

Respuestas con códigos de estado HTTP: Se utilizan códigos de estado HTTP para indicar el resultado de las peticiones, por ejemplo...  
200 OK  
201 Created  
400 Bad Request  

Diseño sin estado (Stateless): Cada petición del cliente al servidor contiene toda la información necesaria para entender la solicitud. El servidor no guarda información sobre el estado del cliente entre peticiones.

Diferencias entre este diseño y la arquitectura de 3 capas anterior:

Interfaz Principal:
Arquitectura Anterior: Endpoints HTTP (/productos) manejados por un controlador.
API REST Refactorizada: Endpoints HTTP (/productos) manejados directamente en app.js.  

Organización del Código:
Arquitectura Anterior: Lógica de enrutamiento en app.js, lógica de manejo de peticiones en productController.js.
API REST Refactorizada: Lógica de enrutamiento y manejo de peticiones combinada en app.js.  

Separación de Responsabilidades:
Arquitectura Anterior: Más estricta separación entre el enrutamiento y la lógica de la aplicación.
API REST Refactorizada: Ligeramente menos separación; la lógica de las rutas está más acoplada a la definición de las rutas.  

Mantenibilidad (para aplicaciones más grandes):
Arquitectura Anterior: Generalmente más fácil de mantener y escalar debido a la clara separación.
API REST Refactorizada: Podría volverse más difícil de manejar a medida que la aplicación crece.