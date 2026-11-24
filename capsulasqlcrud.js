const capsulaSqlCrud = {
    id: 9,
    titulo: "El lenguaje de los datos: Consultas básicas en SQL (CRUD)",
    area: "Datos, sistemas de información e inteligencia artificial",
    asignatura: "Base de Datos",
    resumenCorto: "En el manejo de bases de datos, el objetivo de SQL es dialogar con la información para crear, consultar, actualizar y eliminar registros con precisión quirúrgica.",
    objetivo: "Aplicar las operaciones básicas CRUD en SQL (INSERT INTO, SELECT, UPDATE y DELETE) e identificar el papel crítico de la cláusula WHERE para delimitar el alcance de cada consulta.",
    imagenBanner: "sql-crud-banner.jpg",
    altBanner: "Ilustración de código, ventanas de desarrollo y base de datos SQL",
    autores: "Equipo Académico UMA-TIC / Prácticas Profesionales LTIC - UNRC",
    entidad: "Universidad Nacional Rosario Castellanos (UNRC)",
    licencia: "Uso educativo libre y no comercial citando la fuente (UMA-TIC - UNRC).",
    duracion: "10 min",
    nivel: "Intermedio",
    formato: "Quiz",
    tags: ["SQL", "CRUD", "Base de Datos", "SELECT", "INSERT", "UPDATE", "DELETE", "WHERE"],
    explicacion: "Diseñar buenas tablas es solo la mitad del trabajo; la otra mitad consiste en saber pedirle cosas a la base de datos. A principios de los años 70, Donald Chamberlin y Raymond Boyce desarrollaron en IBM un lenguaje declarativo llamado SQL (Structured Query Language). A diferencia de otros lenguajes de programación donde debes explicar cómo hacer una búsqueda paso a paso, en SQL simplemente declaras qué información deseas obtener o modificar. La estructura de estos comandos funciona casi como una oración en inglés: un verbo de acción (SELECT, INSERT, UPDATE, DELETE), el objeto o tabla sobre el que actúa (Estudiantes) y una condición lógica (WHERE) que delimita el alcance.",
    recursoHtml: `<div id="unidad-uapa-sql-crud" class="bg-purple-50 p-5 sm:p-6 rounded-2xl border border-purple-200 space-y-6 text-slate-800">
        <!-- CASO PRÁCTICO DE APERTURA -->
        <div class="bg-white p-4 sm:p-5 rounded-xl border-l-4 border-purple-700 shadow-sm space-y-2">
            <span class="text-[11px] font-bold uppercase tracking-wider text-purple-700">Caso práctico de apertura</span>
            <h4 class="font-bold text-slate-900 text-sm sm:text-base">El día de publicación de calificaciones en control escolar</h4>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                El mejor ejemplo del poder de las consultas SQL ocurre en el sistema de control escolar el día de publicación de calificaciones. Imagina que 5,000 estudiantes entran al mismo tiempo a revisar sus notas, un profesor necesita corregir una calificación capturada por error y el departamento de servicios escolares debe dar de alta a un alumno de nuevo ingreso. Nadie abre una hoja de cálculo gigante para buscar fila por fila: el sistema ejecuta instrucciones breves y exactas que leen, insertan o modifican únicamente el registro necesario en fracciones de segundo, sin bloquear al resto de los usuarios.
            </p>
        </div>

        <!-- DESARROLLO CONCEPTUAL: 4 OPERACIONES CRUD -->
        <div class="space-y-4">
            <div class="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-1.5">
                <span class="text-[11px] font-bold uppercase tracking-wider text-purple-800">Create • Crear / Insertar</span>
                <h5 class="font-bold text-slate-900 text-sm">INSERT INTO</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Agrega nuevos registros (filas) a una tabla existente. Es indispensable que los valores coincidan en orden y tipo de dato con las columnas definidas.
                </p>
                <pre class="bg-slate-900 text-emerald-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>INSERT INTO Estudiantes (Matricula, Nombre, Carrera)
VALUES ('20260145', 'Ana López', 'TIC');</code></pre>
            </div>

            <div class="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-1.5">
                <span class="text-[11px] font-bold uppercase tracking-wider text-purple-800">Read • Leer / Consultar</span>
                <h5 class="font-bold text-slate-900 text-sm">SELECT</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Extrae información de una o varias tablas sin alterarla. Se combina con <code>FROM</code> para indicar la tabla y con <code>WHERE</code> para filtrar exactamente qué filas nos interesan.
                </p>
                <pre class="bg-slate-900 text-sky-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>SELECT Nombre, Carrera
FROM Estudiantes
WHERE Matricula = '20260145';</code></pre>
            </div>

            <div class="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-1.5">
                <span class="text-[11px] font-bold uppercase tracking-wider text-purple-800">Update • Actualizar / Modificar</span>
                <h5 class="font-bold text-slate-900 text-sm">UPDATE</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Cambia los valores de registros que ya existen en la tabla. Aquí la cláusula <code>WHERE</code> actúa como un cinturón de seguridad: si la omites, modificarás absolutamente todas las filas de la tabla.
                </p>
                <pre class="bg-slate-900 text-amber-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>UPDATE Estudiantes
SET Carrera = 'Ingeniería de Software'
WHERE Matricula = '20260145';</code></pre>
            </div>

            <div class="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-1.5">
                <span class="text-[11px] font-bold uppercase tracking-wider text-purple-800">Delete • Eliminar</span>
                <h5 class="font-bold text-slate-900 text-sm">DELETE FROM</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Borra registros específicos de una tabla. Al igual que en la actualización, usar <code>WHERE</code> es crítico para evitar vaciar la tabla por completo.
                </p>
                <pre class="bg-slate-900 text-rose-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>DELETE FROM Estudiantes
WHERE Matricula = '20260145';</code></pre>
            </div>
        </div>

        <!-- PARA REFLEXIONAR -->
        <div class="bg-amber-50 p-4 sm:p-5 rounded-xl border border-amber-300 space-y-1.5">
            <h5 class="font-bold text-amber-950 text-sm flex items-center">
                <i class="fas fa-lightbulb text-amber-600 mr-2"></i>Para reflexionar
            </h5>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                En entornos reales de desarrollo, un <code>UPDATE</code> o un <code>DELETE</code> sin la cláusula <code>WHERE</code> es uno de los errores más temidos en la informática, capaz de borrar años de información comercial en milisegundos. Dominar SQL no solo implica memorizar comandos, sino desarrollar el hábito de delimitar siempre el alcance de cada instrucción.
            </p>
        </div>

        <!-- AUTOEVALUACIÓN (3 PREGUNTAS) -->
        <div class="bg-white p-4 sm:p-5 rounded-xl border border-purple-200 space-y-5">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <h5 class="font-bold text-purple-950 text-sm sm:text-base">Autoevaluación</h5>
                <span class="text-[11px] text-slate-500">Escoge la opción que consideres correcta</span>
            </div>

            <!-- Pregunta 1 -->
            <div class="space-y-2 text-xs">
                <p class="font-semibold text-slate-800">1. ¿Qué comando de SQL se utiliza únicamente para extraer y visualizar datos sin modificar el contenido de la tabla?</p>
                <div class="space-y-1.5">
                    <button type="button" onclick="responderAutoevaluacionSQL(1, false, 'UPDATE modifica registros existentes; no es el comando de consulta de lectura.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        a. UPDATE
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(1, true, '¡Correcto! SELECT extrae y muestra información sin alterar los datos almacenados.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        b. SELECT
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(1, false, 'INSERT INTO agrega nuevas filas a una tabla.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        c. INSERT INTO
                    </button>
                </div>
                <div id="feedback-sql-1" class="hidden p-2.5 rounded-lg text-xs border"></div>
            </div>

            <!-- Pregunta 2 -->
            <div class="space-y-2 text-xs pt-2 border-t border-slate-100">
                <p class="font-semibold text-slate-800">2. ¿Qué ocurre si ejecutas la instrucción DELETE FROM Productos; sin incluir una cláusula WHERE?</p>
                <div class="space-y-1.5">
                    <button type="button" onclick="responderAutoevaluacionSQL(2, false, 'En SQL estándar es sintácticamente válido omitir WHERE en DELETE, por lo que no se cancela automáticamente por sintaxis.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        a. El sistema marca un error de sintaxis y cancela la operación automáticamente.
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(2, false, 'Sin condición WHERE, la instrucción no se limita a un solo registro o al último agregado.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        b. Se elimina únicamente el último registro que fue agregado a la tabla.
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(2, true, '¡Correcto! Sin una cláusula WHERE que filtre filas, se eliminan todos los registros de la tabla Productos.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        c. Se eliminan todos los registros almacenados dentro de la tabla Productos.
                    </button>
                </div>
                <div id="feedback-sql-2" class="hidden p-2.5 rounded-lg text-xs border"></div>
            </div>

            <!-- Pregunta 3 -->
            <div class="space-y-2 text-xs pt-2 border-t border-slate-100">
                <p class="font-semibold text-slate-800">3. Si necesitas corregir el número telefónico de un cliente que ya está registrado en tu base de datos, ¿qué combinación de comandos debes utilizar?</p>
                <div class="space-y-1.5">
                    <button type="button" onclick="responderAutoevaluacionSQL(3, true, '¡Correcto! UPDATE con SET y WHERE actualiza el teléfono únicamente del cliente con ID_Cliente = 10.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        a. UPDATE Clientes SET Telefono = '5512345678' WHERE ID_Cliente = 10;
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(3, false, 'INSERT INTO se usa para crear nuevos registros, no para modificar un dato existente con WHERE.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        b. INSERT INTO Clientes (Telefono) VALUES ('5512345678') WHERE ID_Cliente = 10;
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(3, false, 'SELECT solo consulta el dato, no lo actualiza.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 transition">
                        c. SELECT Telefono FROM Clientes WHERE ID_Cliente = 10;
                    </button>
                </div>
                <div id="feedback-sql-3" class="hidden p-2.5 rounded-lg text-xs border"></div>
            </div>
        </div>
    </div>`,
    ejercicioPregunta: "En una tabla llamada Inventario, deseas cambiar el precio a 250.00 únicamente del producto con Codigo = 'A-104'. ¿Qué instrucción SQL es la adecuada?",
    opciones: [
        "UPDATE Inventario SET Precio = 250.00 WHERE Codigo = 'A-104';",
        "DELETE FROM Inventario WHERE Codigo = 'A-104';",
        "INSERT INTO Inventario (Precio) VALUES (250.00);",
        "SELECT Precio FROM Inventario;"
    ],
    respuestaCorrecta: 0,
    retroalimentacionCorrecta: "¡Muy bien! UPDATE Inventario SET Precio = 250.00 WHERE Codigo = 'A-104'; modifica solo el registro indicado.",
    retroalimentacionIncorrecta: "Revisa la operación: para modificar un campo en un registro específico se usa UPDATE ... SET ... WHERE ...."
};

function responderAutoevaluacionSQL(numeroPregunta, esCorrecta, mensaje) {
    const caja = document.getElementById(`feedback-sql-${numeroPregunta}`);
    if (!caja) return;

    caja.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-900', 'bg-rose-50', 'border-rose-300', 'text-rose-900');

    if (esCorrecta) {
        caja.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-900');
        caja.innerHTML = `<strong><i class="fas fa-check-circle mr-1"></i></strong> ${mensaje}`;
    } else {
        caja.classList.add('bg-rose-50', 'border-rose-300', 'text-rose-900');
        caja.innerHTML = `<strong><i class="fas fa-times-circle mr-1"></i></strong> ${mensaje}`;
    }
}