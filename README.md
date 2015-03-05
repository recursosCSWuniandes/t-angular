# Taller AngularJS
Taller de AngularJS donde se implementa servicios CRUD y Mocks para los mismos
#**API Rest**
##**Introducción**
La comunicación entre cliente y servidor se realiza intercambiando objetos JSON. Para cada entidad se hace un mapeo a JSON, donde cada uno de sus atributos se transforma en una propiedad de un objeto JSON. Todos los servicios se generan en la URL /webresources/. Por defecto, todas las entidades tienen un atributo `id`, con el cual se identifica cada registro y un atributo `name` que provee la descripción del registro:

```javascript
{
    id: '', //Tipo number
    name: '', //Tipo String
    attribute_1: '',
    attribute_2: '',
    ...
    attribute_n: ''
}
```

###**CRUD Básico**
Para los servicios de CRUD Básico, Cuando se transmite información sobre un registro específico, se realiza enviando un objeto con la estructura mencionada en la sección anterior.
La única excepción se presenta al solicitar al servidor una lista de los registros en la base de datos, que incluye información adicional para manejar paginación de lado del servidor.

La respuesta del servidor al solicitar una colección presenta el siguiente formato:

```javascript
{
    totalRecords: 0, //cantidad de registros en la base de datos
    records: [] //collección con los datos solicitados. cada objeto tiene la estructura de la entidad.
}
```
##***API de la aplicación***
###**Entidad Sport**
####**CRUD Básico**
En la siguiente tabla se detalla los servicios REST generados para la entidad Sport, la estructura del objeto que intercambian y sus respectivas funciones.

#####**Estructura de objeto Sport**
```javascript
{
    id: '' /*Tipo Number*/
    name: '' /*Tipo String*/
    minAge: '' /*Tipo Number*/,
    maxAge: '' /*Tipo Number*/,
    rules: '' /*Tipo String*/,
    country: '' /*Tipo Number*/,
}
```
#####**Servicios**
Método|URI|Acción|Parámetros|Retorno|Error
:--:|:--:|:--:|:--:|:--:|:--:
**GET**|/sports|Obtener todos los objetos de Sport (RETRIEVE)|**@QueryParam page**: página a consultar<br>**@QueryParam maxRecords**: cantidad de registros a consultar<br><br>*Si se omite alguno de estos parámetros se obtiene todos los registros en la base de datos*|colección JSON con instancias de Sport|
**GET**|/sports/:id|Obtener los atributos de una instancia de Sport (RETRIEVE)|**@PathParam id**: Identificador del registro|Objeto JSON con detalle de la instancia de Sport|
**POST**|/sports|Crear una nueva instancia de la entidad Sport (CREATE)|Objeto JSON de la entidad|Objeto JSON de Sport creado|
**PUT**|/sports|Actualiza una instancia de la entidad Sport (UPDATE)|Objeto JSON de Sport|Objeto JSON Sport actualizado|
**DELETE**|/sports/:id|Borra instancia de Sport en el servidor (DELETE)|<strong>@PathParam id</strong>: Identificador del registro| |

###**Entidad Country**
####**CRUD Básico**
En la siguiente tabla se detalla los servicios REST generados para la entidad Country, la estructura del objeto que intercambian y sus respectivas funciones.

#####**Estructura de objeto Country**
```javascript
{
    id: '' /*Tipo Number*/
    name: '' /*Tipo String*/
    population: '' /*Tipo Number*/,
}
```
#####**Servicios**
Método|URI|Acción|Parámetros|Retorno|Error
:--:|:--:|:--:|:--:|:--:|:--:
**GET**|/countries|Obtener todos los objetos de Country (RETRIEVE)|**@QueryParam page**: página a consultar<br>**@QueryParam maxRecords**: cantidad de registros a consultar<br><br>*Si se omite alguno de estos parámetros se obtiene todos los registros en la base de datos*|colección JSON con instancias de Country|
**GET**|/countries/:id|Obtener los atributos de una instancia de Country (RETRIEVE)|**@PathParam id**: Identificador del registro|Objeto JSON con detalle de la instancia de Country|
**POST**|/countries|Crear una nueva instancia de la entidad Country (CREATE)|Objeto JSON de la entidad|Objeto JSON de Country creado|
**PUT**|/countries|Actualiza una instancia de la entidad Country (UPDATE)|Objeto JSON de Country|Objeto JSON Country actualizado|
**DELETE**|/countries/:id|Borra instancia de Country en el servidor (DELETE)|<strong>@PathParam id</strong>: Identificador del registro| |
**GET**|/countries/mostPopulated|Obtiene del servidor el país con **menor** población|| Objeto JSON de Country|Si no hay paises retorna error 404
**GET**|/countries/leastPopulated|Obtiene del servidor el país con **mayor** población|| Objeto JSON de Country|Si no hay paises retorna error 404
