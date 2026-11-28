const capsulaDatos = {
    id: 5,
    titulo: "Normalización de Bases de Datos Relacionales",
    area: "Datos, sistemas de información e inteligencia artificial",
    duracion: "10 min",
    nivel: "Avanzado",
    formato: "Video",
    tags: ["Bases de Datos", "SQL", "IA"],
    explicacion: "Aprende las formas normales (1FN, 2FN, 3FN) para evitar redundancias y asegurar la consistencia de los datos en sistemas de información.",
    recursoHtml: `<div class="bg-purple-50 p-6 rounded-xl border border-purple-200 text-center">
        <i class="fas fa-database text-5xl text-purple-700 mb-3"></i>
        <h4 class="font-bold text-slate-800 text-base">Modelado Entidad-Relación</h4>
        <p class="text-xs text-slate-600 mt-2">Eliminación de dependencias transitivas y optimización de consultas.</p>
    </div>`,
    ejercicioPregunta: "¿Qué busca principalmente la Tercera Forma Normal (3FN)?",
    opciones: ["Eliminar dependencias transitivas", "Duplicar registros", "Crear índices", "Borrar claves primarias"],
    respuestaCorrecta: 0
};

const capsulaModeloRelacional = {
    id: 11,
    titulo: "Fundamentos de Bases de Datos: El Modelo Relacional",
    area: "Datos, sistemas de información e inteligencia artificial",
    duracion: "5 a 7 minutos",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["BasesDeDatos", "ModeloRelacional", "SGBD", "LlavePrimaria", "LlaveForanea"],
    explicacion: `Toda aplicación moderna depende de la gestión eficiente y segura de la información. Para los estudiantes de Tecnologías de la Información, comprender cómo se estructuran y relacionan los datos en un Sistema Gestor de Bases de Datos (SGBD) es esencial para construir sistemas escalables, íntegros y confiables en el entorno profesional.

<br><br>Una base de datos relacional organiza la información en tablas bidimensionales que pueden vincularse entre sí mediante identificadores únicos. Sus elementos fundamentales son:

<br><strong>SGBD (Sistema Gestor de Bases de Datos):</strong> Software que administra la creación, consulta y seguridad de los datos (ej. PostgreSQL, MySQL, SQL Server).
<br><strong>Entidades y Tablas:</strong> Cada tabla representa un objeto o concepto del mundo real (ej. Estudiantes, Cursos).
<br><strong>Registros (Filas) y Campos (Columnas):</strong> Cada fila almacena un registro individual y cada columna define un atributo específico (ej. nombre, matrícula, correo).
<br><strong>Llave Primaria (Primary Key - PK):</strong> Campo único e irrepetible que identifica de manera exclusiva cada fila dentro de una tabla (ej. id_estudiante).
<br><strong>Llave Foránea (Foreign Key - FK):</strong> Campo que referencia a la llave primaria de otra tabla para establecer una relación lógica entre ambas.`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/modelorelacional.jpg"
         alt="Diagrama Entidad-Relación del Modelo Relacional">`,
    videoId: "ZZQhNYlN9QU",
    videoTitulo: "Modelo Entidad-Relación y llaves primarias y foráneas — J. Alberto Bernal",
    ejercicioPregunta: "¿Cuál es la función principal de una Llave Primaria (Primary Key) dentro de una tabla relacional?",
    opciones: [
        "A) Permitir que existan registros duplicados para agilizar las búsquedas.",
        "B) Identificar de forma única e irrepetible cada registro dentro de una tabla.",
        "C) Conectar automáticamente la base de datos con una interfaz web.",
        "D) Almacenar únicamente archivos multimedia de gran tamaño."
    ],
    respuestaCorrecta: 1,
    retroalimentacionCorrecta: "¡Correcto! La opción B es correcta porque la Llave Primaria garantiza la unicidad de cada fila, evitando ambigüedades al consultar, actualizar o relacionar registros.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo.",
    quiz: [
        {
            pregunta: "¿Cuál es la función principal de una Llave Primaria (Primary Key) dentro de una tabla relacional?",
            opciones: [
                "A) Permitir que existan registros duplicados para agilizar las búsquedas.",
                "B) Identificar de forma única e irrepetible cada registro dentro de una tabla.",
                "C) Conectar automáticamente la base de datos con una interfaz web.",
                "D) Almacenar únicamente archivos multimedia de gran tamaño."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! La Llave Primaria garantiza la unicidad de cada fila, evitando ambigüedades al consultar, actualizar o relacionar registros.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "Si necesitas vincular la tabla \"Pedidos\" con la tabla \"Clientes\" para saber quién realizó cada compra, ¿qué elemento debes incluir en la tabla \"Pedidos\"?",
            opciones: [
                "A) Una Llave Foránea (Foreign Key) que apunte a la llave primaria de \"Clientes\".",
                "B) Una copia completa de todas las columnas de la tabla \"Clientes\".",
                "C) Un índice alfabético sin relación entre tablas.",
                "D) Un archivo de texto plano externo."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! La Llave Foránea crea el puente referencial entre ambas tablas sin necesidad de duplicar toda la información del cliente en cada pedido.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "¿Qué software actúa como intermediario entre los usuarios, las aplicaciones y los archivos físicos de la base de datos para garantizar su integridad y consulta?",
            opciones: [
                "A) El compilador del lenguaje de programación.",
                "B) El Sistema Gestor de Bases de Datos (SGBD).",
                "C) El sistema de control de versiones Git.",
                "D) El navegador web."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! El SGBD (como MySQL o PostgreSQL) gestiona el almacenamiento, la concurrencia, la seguridad y la ejecución de consultas sobre los datos.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "Estás importando alumnos que pueden compartir nombre, pero cada uno tiene una matrícula única. ¿Qué campo conviene usar como llave primaria?",
            opciones: [
                "A) El nombre, porque es fácil de leer.",
                "B) La matrícula, porque identifica de forma única a cada alumno.",
                "C) La carrera, porque agrupa alumnos.",
                "D) La fecha de inscripción, porque cambia cada ciclo."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! La matrícula puede funcionar como llave primaria si cada valor es único y no nulo.",
            retroalimentacionIncorrecta: "Elige un campo único por alumno, no uno que pueda repetirse como el nombre o la carrera."
        },
        {
            pregunta: "Al registrar un pedido para el cliente 42, el sistema debe impedir que se use un cliente inexistente. ¿Cómo modelas esa relación?",
            opciones: [
                "A) `Pedidos.cliente_id` como llave foránea que referencia `Clientes.id_cliente`.",
                "B) Copiar todas las columnas de Clientes dentro de Pedidos.",
                "C) Usar el nombre del cliente como llave primaria de Pedidos.",
                "D) Guardar el cliente en un archivo de texto separado."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! La llave foránea conecta el pedido con un cliente existente y ayuda a mantener la integridad referencial.",
            retroalimentacionIncorrecta: "Usa una llave foránea que apunte a la llave primaria de Clientes."
        }
    ],
    referencias: [
        {
            titulo: "W3Schools. SQL PRIMARY KEY Constraint.",
            url: "https://www.w3schools.com/sql/sql_primarykey.asp"
        },
        {
            titulo: "W3Schools. SQL FOREIGN KEY Constraint.",
            url: "https://www.w3schools.com/sql/sql_foreignkey.asp"
        },
        {
            titulo: "J. Alberto Bernal. Modelo Entidad-Relación y llaves primarias y foráneas (video en español).",
            url: "https://www.youtube.com/watch?v=ZZQhNYlN9QU"
        }
    ],
    actividadInteractiva: {
        instrucciones: "Diseña las tablas Clientes y Pedidos para registrar varias compras por cliente. Define la llave primaria de cada tabla y el campo que las relaciona.",
        solucion: "Una solución posible es Clientes(id_cliente PK, nombre, correo) y Pedidos(id_pedido PK, fecha, cliente_id FK que referencia Clientes.id_cliente). Así cada pedido apunta a un cliente existente."
    }
};

const capsulaNormalizacionBD = {
    id: 12,
    titulo: "Normalización de Bases de Datos: Evitando la Redundancia",
    area: "Datos, sistemas de información e inteligencia artificial",
    duracion: "5 a 7 minutos",
    nivel: "Intermedio",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["Normalizacion", "BasesDeDatos", "FormasNormales", "IntegridadDatos", "DisenoBD"],
    explicacion: `Diseñar tablas sin una estructura adecuada provoca datos duplicados, desperdicio de almacenamiento e inconsistencias al actualizar registros. Para los estudiantes de Tecnologías de la Información, dominar la normalización es clave para construir bases de datos limpias, confiables y libres de anomalías operativas.

<br><br>La normalización es un proceso sistemático que divide tablas grandes y desordenadas en tablas más pequeñas y bien relacionadas aplicando reglas llamadas Formas Normales (FN):
<br><strong>Primera Forma Normal (1FN):</strong> Exige que cada celda contenga un único valor atómico (indivisible) y que no existan grupos repetitivos de columnas.
<br><strong>Segunda Forma Normal (2FN):</strong> Cumple con la 1FN y asegura que todos los atributos no clave dependan por completo de toda la llave primaria (elimina dependencias parciales).
<br><strong>Tercera Forma Normal (3FN):</strong> Cumple con la 2FN y elimina las dependencias transitivas, es decir, ningún campo no clave debe depender de otro campo no clave.
<br><strong>Beneficio principal:</strong> Previene anomalías de inserción, actualización y borrado, garantizando la integridad referencial.`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/normalizacionbd.jpg"
         alt="Esquema comparativo antes y después de normalizar">`,
    videoId: "kvt2wE-q-yY",
    videoTitulo: "Normalización en bases de datos con ejercicio — TodoCode",
    ejercicioPregunta: "¿Cuál es el objetivo principal de aplicar la normalización en el diseño de una base de datos relacional?",
    opciones: [
        "A) Aumentar la duplicidad de datos para tener respaldos en cada tabla.",
        "B) Minimizar la redundancia de datos y evitar anomalías de inserción, actualización y eliminación.",
        "C) Convertir todas las tablas en un único archivo de texto plano.",
        "D) Eliminar el uso de llaves primarias y foráneas."
    ],
    respuestaCorrecta: 1,
    retroalimentacionCorrecta: "¡Correcto! La normalización organiza los atributos en tablas cohesivas para evitar que un mismo dato se repita innecesariamente y genere inconsistencias al modificarse.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo.",
    quiz: [
        {
            pregunta: "¿Cuál es el objetivo principal de aplicar la normalización en el diseño de una base de datos relacional?",
            opciones: [
                "A) Aumentar la duplicidad de datos para tener respaldos en cada tabla.",
                "B) Minimizar la redundancia de datos y evitar anomalías de inserción, actualización y eliminación.",
                "C) Convertir todas las tablas en un único archivo de texto plano.",
                "D) Eliminar el uso de llaves primarias y foráneas."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! La normalización organiza los atributos en tablas cohesivas para evitar que un mismo dato se repita innecesariamente y genere inconsistencias al modificarse.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "En una tabla de contactos, la columna \"Teléfonos\" almacena dos números separados por coma en una misma celda (ej. \"5512345678, 5587654321\"). ¿Qué forma normal se está incumpliendo?",
            opciones: [
                "A) Primera Forma Normal (1FN).",
                "B) Tercera Forma Normal (3FN).",
                "C) Forma Normal de Boyce-Codd (FNBC).",
                "D) Ninguna, ya que se permite cualquier cantidad de valores por celda."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! La 1FN establece el principio de atomicidad: cada celda debe contener un solo valor indivisible.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "¿Qué condición adicional exige la Tercera Forma Normal (3FN) respecto a la Segunda Forma Normal (2FN)?",
            opciones: [
                "A) Que todas las columnas sean de tipo numérico.",
                "B) Que se eliminen las dependencias transitivas entre columnas que no son llave primaria.",
                "C) Que la tabla tenga exactamente tres columnas.",
                "D) Que no existan relaciones entre tablas."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! En 3FN ningún atributo no clave debe depender de otro atributo no clave; todos deben depender únicamente de la llave primaria.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "Una tabla Pedidos repite el nombre y la dirección del cliente en cada compra. ¿Qué cambio reduce esa redundancia sin perder la relación?",
            opciones: [
                "A) Guardar los datos del cliente en cada columna de producto.",
                "B) Crear Clientes con su propia llave primaria y guardar esa llave como foránea en Pedidos.",
                "C) Eliminar la llave primaria de Pedidos.",
                "D) Unir todos los pedidos en una sola celda."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! Separar Clientes y relacionar Pedidos mediante una llave foránea evita repetir los datos del cliente en cada pedido.",
            retroalimentacionIncorrecta: "Separa la información del cliente en su propia tabla y conserva la relación mediante una llave."
        },
        {
            pregunta: "En Inscripciones, la llave primaria es `(estudiante_id, curso_id)`, pero `estudiante_nombre` depende solo de `estudiante_id`. ¿Qué problema de diseño se presenta?",
            opciones: [
                "A) Una dependencia parcial que se corrige al separar los datos de Estudiantes; esto incumple 2FN.",
                "B) Una dependencia transitiva que se resuelve eliminando todas las llaves.",
                "C) Una violación de 1FN porque los nombres son texto.",
                "D) Ninguna: todo atributo debe depender de una sola parte de la llave compuesta."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! Con una llave compuesta, los atributos no clave deben depender de toda la llave; `estudiante_nombre` depende solo de una parte.",
            retroalimentacionIncorrecta: "Compara el atributo con la llave compuesta completa: depende solo de `estudiante_id`, por lo que hay una dependencia parcial."
        }
    ],
    referencias: [
        {
            titulo: "Microsoft Learn. Database normalization description.",
            url: "https://learn.microsoft.com/en-us/previous-versions/troubleshoot/microsoft-365/microsoft-365-apps/access/database-normalization-description"
        },
        {
            titulo: "W3Schools. SQL PRIMARY KEY Constraint.",
            url: "https://www.w3schools.com/sql/sql_primarykey.asp"
        },
        {
            titulo: "W3Schools. SQL FOREIGN KEY Constraint.",
            url: "https://www.w3schools.com/sql/sql_foreignkey.asp"
        },
        {
            titulo: "TodoCode. Normalización en bases de datos con ejercicio (video en español).",
            url: "https://www.youtube.com/watch?v=kvt2wE-q-yY"
        }
    ],
    actividadInteractiva: {
        instrucciones: "Una tabla Pedidos repite nombre_cliente, correo_cliente y producto cada vez que hay una compra. Propón una separación que reduzca duplicados y permita varios productos por pedido.",
        solucion: "Separa Clientes(id_cliente PK, nombre, correo), Pedidos(id_pedido PK, fecha, cliente_id FK) y DetallePedido(id_pedido FK, producto_id FK, cantidad). Los datos del cliente se guardan una vez y el detalle resuelve los productos de cada pedido."
    }
};

const capsulaLenguajeSQL = {
    id: 13,
    titulo: "Lenguaje SQL: Comandos Esenciales DDL y DML",
    area: "Datos, sistemas de información e inteligencia artificial",
    duracion: "5 a 7 minutos",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["SQL", "ConsultasSQL", "DDL", "DML", "BasesDeDatosRelacionales"],
    explicacion: `SQL (Structured Query Language) es el lenguaje estándar universal para interactuar con bases de datos relacionales. Para los estudiantes de Tecnologías de la Información, dominar la diferencia entre los comandos que definen estructuras y los que manipulan registros es indispensable para desarrollar aplicaciones backend y realizar análisis de datos con precisión.

<br><br>El lenguaje SQL se divide en sublenguajes especializados según el tipo de operación que realizan sobre la base de datos:
<br><strong>DDL (Data Definition Language):</strong> Define y modifica la estructura física de los objetos de la base de datos. Sus comandos clave son CREATE (crear tablas/bases), ALTER (modificar estructura) y DROP (eliminar objetos).
<br><strong>DML (Data Manipulation Language):</strong> Gestiona directamente los datos almacenados dentro de las tablas. Sus comandos principales son SELECT (consultar), INSERT (agregar), UPDATE (actualizar) y DELETE (eliminar).
<br><strong>Cláusula WHERE:</strong> Actúa como filtro condicional en consultas SELECT, UPDATE y DELETE para afectar únicamente a los registros que cumplan un criterio específico.
<br><strong>Buenas prácticas:</strong> Nunca ejecutar UPDATE o DELETE sin verificar previamente la cláusula WHERE, evitando alterar toda la tabla por accidente.`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/comandossql.jpg"
         alt="Infografía de comandos SQL DDL y DML">`,
    videoId: "YpTK1_hA43Q",
    videoTitulo: "Tipos de comandos SQL: DDL, DML, DCL y TCL — Ingenioteka",
    ejercicioPregunta: "¿A qué sublenguaje de SQL pertenecen los comandos CREATE, ALTER y DROP?",
    opciones: [
        "A) DML (Lenguaje de Manipulación de Datos).",
        "B) DDL (Lenguaje de Definición de Datos).",
        "C) DCL (Lenguaje de Control de Datos).",
        "D) HTML (Lenguaje de Marcado de Hipertexto)."
    ],
    respuestaCorrecta: 1,
    retroalimentacionCorrecta: "¡Correcto! Los comandos DDL se encargan de crear, alterar o eliminar la estructura de tablas, vistas y esquemas en la base de datos.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo.",
    quiz: [
        {
            pregunta: "¿A qué sublenguaje de SQL pertenecen los comandos CREATE, ALTER y DROP?",
            opciones: [
                "A) DML (Lenguaje de Manipulación de Datos).",
                "B) DDL (Lenguaje de Definición de Datos).",
                "C) DCL (Lenguaje de Control de Datos).",
                "D) HTML (Lenguaje de Marcado de Hipertexto)."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! Los comandos DDL se encargan de crear, alterar o eliminar la estructura de tablas, vistas y esquemas en la base de datos.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "¿Qué sucede si ejecutas la instrucción \"DELETE FROM usuarios;\" omitiendo la cláusula WHERE?",
            opciones: [
                "A) El sistema marca un error de sintaxis y no ejecuta nada.",
                "B) Se elimina únicamente el último registro ingresado.",
                "C) Se eliminan absolutamente todos los registros contenidos en la tabla \"usuarios\".",
                "D) Se borra únicamente la estructura de las columnas pero se conservan los datos."
            ],
            respuestaCorrecta: 2,
            retroalimentacionCorrecta: "¡Correcto! Sin la cláusula WHERE para filtrar filas específicas, DELETE actúa sobre la totalidad de los registros de la tabla.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "¿Qué instrucción SQL permite obtener el nombre y correo de los alumnos inscritos en el séptimo semestre?",
            opciones: [
                "A) SELECT nombre, correo FROM alumnos WHERE semestre = 7;",
                "B) INSERT INTO alumnos (nombre, correo) VALUES (7);",
                "C) UPDATE alumnos SET semestre = 7;",
                "D) ALTER TABLE alumnos ADD semestre 7;"
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! SELECT especifica las columnas a mostrar, FROM indica la tabla de origen y WHERE filtra los registros del semestre 7.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "Necesitas agregar a Ana, con id 10 y semestre 7, a la tabla alumnos. ¿Qué consulta inserta un registro nuevo?",
            opciones: [
                "A) `UPDATE alumnos SET id = 10;`",
                "B) `INSERT INTO alumnos (id, nombre, semestre) VALUES (10, 'Ana', 7);`",
                "C) `DELETE FROM alumnos WHERE id = 10;`",
                "D) `ALTER TABLE alumnos ADD Ana;`"
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! `INSERT INTO` agrega una fila y `VALUES` proporciona los valores de sus columnas.",
            retroalimentacionIncorrecta: "Busca el comando DML que agrega una fila nueva."
        },
        {
            pregunta: "Debes cambiar el correo de la alumna con id 10 sin modificar a los demás. ¿Qué consulta es segura?",
            opciones: [
                "A) `UPDATE alumnos SET correo = 'ana@ejemplo.com';`",
                "B) `DELETE FROM alumnos WHERE id = 10;`",
                "C) `UPDATE alumnos SET correo = 'ana@ejemplo.com' WHERE id = 10;`",
                "D) `ALTER TABLE alumnos ADD correo;`"
            ],
            respuestaCorrecta: 2,
            retroalimentacionCorrecta: "¡Correcto! `WHERE id = 10` limita la actualización a la fila objetivo.",
            retroalimentacionIncorrecta: "Una actualización sin WHERE puede modificar todas las filas; filtra por el identificador de la alumna."
        }
    ],
    referencias: [
        {
            titulo: "W3Schools. SQL Tutorial.",
            url: "https://www.w3schools.com/sql/"
        },
        {
            titulo: "W3Schools. SQL INSERT INTO Statement.",
            url: "https://www.w3schools.com/sql/sql_insert.asp"
        },
        {
            titulo: "W3Schools. SQL UPDATE Statement.",
            url: "https://www.w3schools.com/sql/sql_update.asp"
        },
        {
            titulo: "Ingenioteka. Tipos de comandos SQL: DDL, DML, DCL y TCL (video en español).",
            url: "https://www.youtube.com/watch?v=YpTK1_hA43Q"
        }
    ],
    actividadInteractiva: {
        instrucciones: "En una tabla alumnos(id, nombre, correo, semestre), escribe una consulta para listar nombre y correo de quienes cursan el semestre 7. Después actualiza el correo de la alumna con id 10 sin afectar a otras filas.",
        solucion: "Consulta: SELECT nombre, correo FROM alumnos WHERE semestre = 7;. Actualización: UPDATE alumnos SET correo = 'ana@ejemplo.com' WHERE id = 10;. El filtro WHERE limita el cambio al registro indicado."
    }
};

const capsulaSQLvsNoSQL = {
    id: 14,
    titulo: "Bases de Datos SQL vs. NoSQL: Criterios de Selección",
    area: "Datos, sistemas de información e inteligencia artificial",
    duracion: "5 a 7 minutos",
    nivel: "Intermedio",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["NoSQL", "SQL", "MongoDB", "ArquitecturaSoftware", "Escalabilidad"],
    explicacion: `Con el auge de aplicaciones web masivas, redes sociales e Internet de las Cosas (IoT), las bases de datos relacionales tradicionales encontraron nuevos retos de escalabilidad. Para los estudiantes de Tecnologías de la Información, saber distinguir cuándo emplear un motor SQL o uno NoSQL es una competencia arquitectónica clave en proyectos modernos.

<br><br>Las bases de datos NoSQL (Not Only SQL) surgieron para manejar grandes volúmenes de datos no estructurados o semiestructurados con alta velocidad y flexibilidad:
<br><strong>Modelo y Esquema:</strong> SQL utiliza tablas con esquemas rígidos predefinidos; NoSQL emplea esquemas flexibles mediante documentos JSON (ej. MongoDB), pares clave-valor (ej. Redis), familias de columnas o grafos.
<br><strong>Escalabilidad:</strong> SQL suele escalar verticalmente (aumentando CPU/RAM en un servidor), mientras que NoSQL está diseñado para escalar horizontalmente (distribuyendo datos en múltiples servidores o nodos).
<br><strong>Consistencia vs. Disponibilidad:</strong> SQL prioriza transacciones estrictas (propiedades ACID: Atomicidad, Consistencia, Aislamiento y Durabilidad); NoSQL suele priorizar disponibilidad y velocidad (modelo BASE).
<br><strong>Criterio de elección:</strong> Usa SQL para sistemas financieros, inventarios y relaciones complejas; elige NoSQL para catálogos dinámicos, analítica en tiempo real y datos cambiantes.`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/sqlvsnosql.jpg"
         alt="Diagrama comparativo entre bases de datos SQL y NoSQL">`,
    videoId: "8K1PKSqHFRQ",
    videoTitulo: "¿SQL o NoSQL? ¿Cuál base de datos es mejor? — EDteam",
    ejercicioPregunta: "¿Cuál es una característica distintiva de las bases de datos NoSQL orientadas a documentos como MongoDB?",
    opciones: [
        "A) Obligan a definir todas las columnas y tipos de datos antes de insertar el primer registro.",
        "B) Almacenan información en estructuras flexibles similares a JSON, permitiendo que los registros tengan distintos campos.",
        "C) Solo funcionan en computadoras sin conexión a internet.",
        "D) No permiten realizar búsquedas ni filtros sobre los datos almacenados."
    ],
    respuestaCorrecta: 1,
    retroalimentacionCorrecta: "¡Correcto! Las bases de datos documentales manejan esquemas dinámicos en formato JSON/BSON, facilitando la evolución rápida de los modelos de datos.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo.",
    quiz: [
        {
            pregunta: "¿Cuál es una característica distintiva de las bases de datos NoSQL orientadas a documentos como MongoDB?",
            opciones: [
                "A) Obligan a definir todas las columnas y tipos de datos antes de insertar el primer registro.",
                "B) Almacenan información en estructuras flexibles similares a JSON, permitiendo que los registros tengan distintos campos.",
                "C) Solo funcionan en computadoras sin conexión a internet.",
                "D) No permiten realizar búsquedas ni filtros sobre los datos almacenados."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! Las bases de datos documentales manejan esquemas dinámicos en formato JSON/BSON, facilitando la evolución rápida de los modelos de datos.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "¿En qué escenario resulta más recomendable elegir una base de datos relacional (SQL) con propiedades ACID?",
            opciones: [
                "A) Un sistema bancario de transferencias financieras donde cada transacción requiere consistencia estricta.",
                "B) Un sistema de caché temporal de sesiones de usuario en memoria RAM.",
                "C) El almacenamiento de millones de registros de sensores IoT con formatos variables cada segundo.",
                "D) Una red social enfocada exclusivamente en recomendaciones de grafos en tiempo real."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! Las operaciones financieras exigen integridad transaccional estricta (ACID) para garantizar que el dinero no se duplique ni se pierda ante fallos.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "¿Qué significa que una base de datos NoSQL favorezca la \"escalabilidad horizontal\"?",
            opciones: [
                "A) Que solo puede crecer aumentando la memoria RAM de un único servidor central.",
                "B) Que permite distribuir la carga y el almacenamiento añadiendo más servidores económicos en paralelo (clúster).",
                "C) Que las tablas solo pueden crecer en número de columnas pero no de filas.",
                "D) Que reduce automáticamente el tamaño de las imágenes almacenadas."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! El escalamiento horizontal distribuye los datos entre múltiples nodos o servidores, permitiendo soportar tráfico masivo y alta disponibilidad.",
            retroalimentacionIncorrecta: "Inténtalo de nuevo."
        },
        {
            pregunta: "Una plataforma recibe lecturas JSON de sensores con campos que varían según el dispositivo y necesita distribuir la carga entre varios servidores. ¿Qué opción encaja mejor con esos requisitos?",
            opciones: [
                "A) Una hoja de cálculo compartida como base principal.",
                "B) Una base documental NoSQL como MongoDB, evaluando el esquema y la estrategia de escalado.",
                "C) Un único archivo de texto plano sin índices.",
                "D) Una tabla relacional sin identificadores ni restricciones."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! Una base documental permite almacenar documentos con campos variables y MongoDB ofrece opciones de escalado horizontal.",
            retroalimentacionIncorrecta: "Considera un modelo documental para datos JSON variables y evalúa cómo distribuir la carga."
        },
        {
            pregunta: "Un sistema de pedidos necesita relacionar clientes, productos e inventario, y aplicar restricciones para evitar referencias inválidas. ¿Qué modelo es una opción natural?",
            opciones: [
                "A) Una base relacional SQL con llaves y restricciones adecuadas.",
                "B) Archivos de texto independientes sin identificadores.",
                "C) Una base clave-valor sin modelar las relaciones.",
                "D) Una carpeta con un archivo por cada pedido."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! El modelo relacional permite expresar relaciones mediante llaves y aplicar restricciones de integridad.",
            retroalimentacionIncorrecta: "Elige el modelo que represente relaciones y restricciones referenciales de forma explícita."
        }
    ],
    referencias: [
        {
            titulo: "W3Schools. SQL Tutorial.",
            url: "https://www.w3schools.com/sql/"
        },
        {
            titulo: "W3Schools. MongoDB Tutorial.",
            url: "https://www.w3schools.com/mongodb/"
        },
        {
            titulo: "MongoDB Manual. What is MongoDB?",
            url: "https://www.mongodb.com/docs/manual/"
        },
        {
            titulo: "EDteam. ¿SQL o NoSQL? ¿Cuál base de datos es mejor? (video en español).",
            url: "https://www.youtube.com/watch?v=8K1PKSqHFRQ"
        }
    ],
    actividadInteractiva: {
        instrucciones: "Elige un tipo de base de datos para cada caso y explica tu decisión: (1) transferencias bancarias que requieren consistencia transaccional; (2) catálogo de productos con atributos distintos según su categoría.",
        solucion: "Para las transferencias, SQL es una opción natural por sus transacciones ACID y relaciones explícitas. Para el catálogo variable, una base documental NoSQL puede facilitar documentos con campos distintos. La elección final también depende de requisitos de consistencia, consultas y operación."
    }
};