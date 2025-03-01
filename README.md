<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# MS-GATEWAY
El gateway es el enlace entre nuestros clientes y nuestros servicios. Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente.

## Levantar el proyecto

1. Clonar el repositorio
2. Instalar los modulos de node
3. Crear un archivo `.env` basado en el `env.template`
4. Levantar el servidor de NATS
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Levantar los microservicios que se van a consumir
6. Ejecutar `npm run start:dev`

## Arquitectura del Proyecto

<p align="center">
  <img src="assets/arquitectura.png" width="600" alt="Arquitectura">
</p>

- [MS-ORDERS](https://github.com/Gibson-Arbey/NEST-MS-ORDERS)
- [MS-PAYMENTS](https://github.com/Gibson-Arbey/NEST-MS-PAYMENTS)
- [MS-GATEWAY](https://github.com/Gibson-Arbey/NEST-MS-GATEWAY)
- [MS-PRODUCTS](https://github.com/Gibson-Arbey/NEST-MS-PRODUCTS)