# DESWEB-3Capas--ApiREST

## Características REST de esta API

1. Interfaz uniforme:
   - Uso de métodos HTTP estándar (GET, POST)
   - Uso de nombres de recursos en plural (/productos)
   - Representación de recursos en JSON

2. Sin estado (Stateless): Cada solicitud contiene toda la información necesaria

3. Manejo adecuado de códigos de estado HTTP:
   - 200 para éxito en GET
   - 201 para creación exitosa
   - 400 para errores de cliente
   - 404 para rutas no encontradas
   - 500 para errores de servidor

4. Separación clara entre cliente y servidor

5. Recursos identificables: Los productos son recursos identificables con URIs (/productos)

## Diferencias con la arquitectura anterior

1. Enfoque:
   - Anterior: Aplicación web con interfaz HTML servida desde el backend
   - Actual: API REST pura que solo devuelve datos (JSON)

2. Capa de presentación:
   - Anterior: Incluía generación de HTML en el backend
   - Actual: Eliminada completamente, el frontend sería una aplicación separada

3. Rutas/Endpoints:
   - Anterior: Mezclaba rutas API (/api/products) y rutas de vista (/) 
   - Actual: Solo endpoints REST consistentes (/productos)

4. Manejo de errores:
   - Anterior: Solo manejo básico de errores
   - Actual: Manejo más completo con middleware de errores

5. Flexibilidad:
   - Anterior: Acoplada a un frontend específico
   - Actual: Puede ser consumida por cualquier cliente (web, móvil, etc.)

6. Encabezados (Headers):
   - Anterior: No se usaban explícitamente
   - Actual: Se asume el uso de Content-Type: application/json

La principal ventaja de este diseño es que sigue mejor los principios REST, permitiendo una mayor flexibilidad en el consumo de la API por diferentes tipos de clientes y facilitando la escalabilidad.