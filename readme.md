## 5. Análisis final (teórico)

- ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?
- ¿Cuáles son las ventajas de usar getters y setters?
- ¿Qué problemas pueden surgir al modificar prototipos nativos como String?
- Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?


#### DESARROLLO

- Al comparar las funciones constructoras con prototype y la sintaxis class, noté que ambas logran básicamente lo mismo, pero con estilos distintos. Las funciones constructoras son la forma más antigua de trabajar en JavaScript y requieren más pasos para agregar métodos, mientras que las clases son más claras y ordenadas, lo que hace que el código sea más fácil de leer. La sintaxis de class es más amigable.
- Usar getters y setters me pareció útil porque no solo permiten acceder o modificar propiedades, sino que también nos dan la posibilidad de validar datos y proteger información interna del objeto, es una forma de mantener un control extra sobre cómo se manipula la información.
- Al modificar prototipos nativos como String, entendí que hay que hacerlo con cuidado, porque puede romper partes del código o generar conflictos cuando se espera el comportamiento original.
- Al pensar en un objeto como personPrototype que contiene un método, la diferencia entre asignar ese método directamente al prototype o usar Object.assign está en la forma de hacerlo. Si es un solo método, asignarlo directamente es simple, pero si queremos copiar varios métodos a la vez, Object.assign es más práctico y mantiene el código más limpio.