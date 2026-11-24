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
    explicacion: "Diseñar buenas tablas es solo la mitad del trabajo; la otra mitad consiste en saber pedirle cosas a la base de datos. A principios de los años 70, Donald Chamberlin y Raymond Boyce desarrollaron en IBM un lenguaje declarativo llamado SQL (Structured Query Language). A diferencia de otros lenguajes de programación donde debes explicar cómo hacer una búsqueda paso a paso, en SQL simplemente declaras qué información deseas obtener o modificar. Casi toda interacción con una base de datos se resume en cuatro operaciones fundamentales conocidas por el acrónimo CRUD (Create, Read, Update, Delete), que se traducen en INSERT INTO, SELECT, UPDATE y DELETE. La estructura de estos comandos funciona casi como una oración en inglés: un verbo de acción (SELECT, INSERT, UPDATE, DELETE), el objeto o tabla sobre el que actúa (Estudiantes) y una condición lógica (WHERE) que delimita el alcance para evitar afectar registros que no corresponden.",
    recursoHtml: `<div id="unidad-uapa-sql-crud" class="bg-gradient-to-br from-purple-50 via-fuchsia-50/60 to-amber-50/60 p-5 sm:p-6 rounded-2xl border-2 border-purple-200 space-y-6 text-slate-800 shadow-inner">
        <!-- CASO PRÁCTICO DE APERTURA -->
        <div class="bg-white p-4 sm:p-5 rounded-xl border-l-4 border-purple-600 shadow-sm space-y-2">
            <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                    <i class="fas fa-graduation-cap mr-1"></i> Caso práctico de apertura
                </span>
                <span class="text-[11px] font-semibold text-fuchsia-700">Escenario real: Control Escolar</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm sm:text-base">El día de publicación de calificaciones en control escolar</h4>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                El mejor ejemplo del poder de las consultas SQL ocurre en el sistema de control escolar el día de publicación de calificaciones. Imagina que 5,000 estudiantes entran al mismo tiempo a revisar sus notas, un profesor necesita corregir una calificación capturada por error y el departamento de servicios escolares debe dar de alta a un alumno de nuevo ingreso. Nadie abre una hoja de cálculo gigante para buscar fila por fila: el sistema ejecuta instrucciones breves y exactas que leen, insertan o modifican únicamente el registro necesario en fracciones de segundo, sin bloquear al resto de los usuarios.
            </p>
        </div>

        <!-- SELECTOR INTERACTIVO DE OPERACIONES CRUD -->
        <div class="bg-white p-4 sm:p-5 rounded-xl border border-purple-200 shadow-sm space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-purple-700">Explorador interactivo CRUD</span>
                    <h4 class="font-bold text-slate-900 text-sm sm:text-base">Haz clic en cada operación para inspeccionar su consulta</h4>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    <button type="button" onclick="mostrarComandoCRUD('create')" id="btn-crud-create" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow transition">
                        C · INSERT
                    </button>
                    <button type="button" onclick="mostrarComandoCRUD('read')" id="btn-crud-read" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-100 text-sky-800 hover:bg-sky-200 transition">
                        R · SELECT
                    </button>
                    <button type="button" onclick="mostrarComandoCRUD('update')" id="btn-crud-update" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 transition">
                        U · UPDATE
                    </button>
                    <button type="button" onclick="mostrarComandoCRUD('delete')" id="btn-crud-delete" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-100 text-rose-800 hover:bg-rose-200 transition">
                        D · DELETE
                    </button>
                </div>
            </div>

            <div id="visor-crud-interactivo" class="space-y-2">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xs font-bold text-emerald-700"><i class="fas fa-plus-circle mr-1"></i>Create (INSERT INTO) — Crear / Insertar</span>
                    <span class="text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">Agrega filas nuevas</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Agrega nuevos registros (filas) a una tabla existente. Es indispensable que los valores coincidan en orden y tipo de dato con las columnas definidas.
                </p>
                <pre class="bg-slate-900 text-emerald-300 p-3.5 rounded-xl font-mono text-xs overflow-x-auto border border-slate-700"><code>INSERT INTO Estudiantes (Matricula, Nombre, Carrera)
VALUES ('20260145', 'Ana López', 'TIC');</code></pre>
            </div>
        </div>

        <!-- DESARROLLO CONCEPTUAL: 4 OPERACIONES CRUD -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-xl border-t-4 border-emerald-500 border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Create • Crear / Insertar</span>
                    <span class="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">C</span>
                </div>
                <h5 class="font-bold text-slate-900 text-sm">INSERT INTO</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Agrega nuevos registros (filas) a una tabla existente. Es indispensable que los valores coincidan en orden y tipo de dato con las columnas definidas.
                </p>
                <pre class="bg-slate-900 text-emerald-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>INSERT INTO Estudiantes (Matricula, Nombre, Carrera)
VALUES ('20260145', 'Ana López', 'TIC');</code></pre>
            </div>

            <div class="bg-white p-4 rounded-xl border-t-4 border-sky-500 border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-sky-700">Read • Leer / Consultar</span>
                    <span class="text-[10px] font-bold bg-sky-100 text-sky-800 px-2 py-0.5 rounded">R</span>
                </div>
                <h5 class="font-bold text-slate-900 text-sm">SELECT</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Extrae información de una o varias tablas sin alterarla. Se combina con <code>FROM</code> para indicar la tabla y con <code>WHERE</code> para filtrar exactamente qué filas nos interesan.
                </p>
                <pre class="bg-slate-900 text-sky-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>SELECT Nombre, Carrera
FROM Estudiantes
WHERE Matricula = '20260145';</code></pre>
            </div>

            <div class="bg-white p-4 rounded-xl border-t-4 border-amber-500 border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-amber-700">Update • Actualizar / Modificar</span>
                    <span class="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded">U</span>
                </div>
                <h5 class="font-bold text-slate-900 text-sm">UPDATE</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Cambia los valores de registros que ya existen en la tabla. Aquí la cláusula <code>WHERE</code> actúa como un cinturón de seguridad: si la omites, modificarás absolutamente todas las filas de la tabla.
                </p>
                <pre class="bg-slate-900 text-amber-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>UPDATE Estudiantes
SET Carrera = 'Ingeniería de Software'
WHERE Matricula = '20260145';</code></pre>
            </div>

            <div class="bg-white p-4 rounded-xl border-t-4 border-rose-500 border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition">
                <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold uppercase tracking-wider text-rose-700">Delete • Eliminar</span>
                    <span class="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">D</span>
                </div>
                <h5 class="font-bold text-slate-900 text-sm">DELETE FROM</h5>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Borra registros específicos de una tabla. Al igual que en la actualización, usar <code>WHERE</code> es crítico para evitar vaciar la tabla por completo.
                </p>
                <pre class="bg-slate-900 text-rose-300 p-3 rounded-lg font-mono text-[11px] overflow-x-auto"><code>DELETE FROM Estudiantes
WHERE Matricula = '20260145';</code></pre>
            </div>
        </div>

        <!-- PARA REFLEXIONAR -->
        <div class="bg-gradient-to-r from-amber-100 via-amber-50 to-orange-50 p-4 sm:p-5 rounded-xl border-l-4 border-amber-500 shadow-sm space-y-1.5">
            <h5 class="font-bold text-amber-950 text-sm flex items-center">
                <i class="fas fa-shield-alt text-amber-600 mr-2"></i>Para reflexionar
            </h5>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                En entornos reales de desarrollo, un <code>UPDATE</code> o un <code>DELETE</code> sin la cláusula <code>WHERE</code> es uno de los errores más temidos en la informática, capaz de borrar años de información comercial en milisegundos. Dominar SQL no solo implica memorizar comandos, sino desarrollar el hábito de delimitar siempre el alcance de cada instrucción.
            </p>
        </div>

        <!-- AUTOEVALUACIÓN (3 PREGUNTAS) -->
        <div class="bg-white p-4 sm:p-5 rounded-xl border border-purple-200 shadow-sm space-y-5">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                <h5 class="font-bold text-purple-950 text-sm sm:text-base flex items-center">
                    <i class="fas fa-check-double text-purple-600 mr-2"></i>Autoevaluación
                </h5>
                <span class="text-[11px] bg-purple-100 text-purple-800 font-semibold px-2.5 py-0.5 rounded-full">Escoge la opción que consideres correcta</span>
            </div>

            <!-- Pregunta 1 -->
            <div class="space-y-2 text-xs">
                <p class="font-semibold text-slate-800">1. ¿Qué comando de SQL se utiliza únicamente para extraer y visualizar datos sin modificar el contenido de la tabla?</p>
                <div class="space-y-1.5">
                    <button type="button" onclick="responderAutoevaluacionSQL(1, false, 'UPDATE modifica registros existentes; no es el comando de consulta de lectura.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        a. UPDATE
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(1, true, 'SELECT extrae y muestra información sin alterar los datos almacenados.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        b. SELECT
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(1, false, 'INSERT INTO agrega nuevas filas a una tabla.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        c. INSERT INTO
                    </button>
                </div>
                <div id="feedback-sql-1" class="hidden p-2.5 rounded-lg text-xs border"></div>
            </div>

            <!-- Pregunta 2 -->
            <div class="space-y-2 text-xs pt-2 border-t border-slate-100">
                <p class="font-semibold text-slate-800">2. ¿Qué ocurre si ejecutas la instrucción DELETE FROM Productos; sin incluir una cláusula WHERE?</p>
                <div class="space-y-1.5">
                    <button type="button" onclick="responderAutoevaluacionSQL(2, false, 'En SQL estándar es sintácticamente válido omitir WHERE en DELETE, por lo que no se cancela automáticamente por sintaxis.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        a. El sistema marca un error de sintaxis y cancela la operación automáticamente.
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(2, false, 'Sin condición WHERE, la instrucción no se limita a un solo registro o al último agregado.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        b. Se elimina únicamente el último registro que fue agregado a la tabla.
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(2, true, 'Sin una cláusula WHERE que filtre filas, se eliminan todos los registros de la tabla Productos.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        c. Se eliminan todos los registros almacenados dentro de la tabla Productos.
                    </button>
                </div>
                <div id="feedback-sql-2" class="hidden p-2.5 rounded-lg text-xs border"></div>
            </div>

            <!-- Pregunta 3 -->
            <div class="space-y-2 text-xs pt-2 border-t border-slate-100">
                <p class="font-semibold text-slate-800">3. Si necesitas corregir el número telefónico de un cliente que ya está registrado en tu base de datos, ¿qué combinación de comandos debes utilizar?</p>
                <div class="space-y-1.5">
                    <button type="button" onclick="responderAutoevaluacionSQL(3, true, 'UPDATE con SET y WHERE actualiza el teléfono únicamente del cliente con ID_Cliente = 10.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        a. UPDATE Clientes SET Telefono = '5512345678' WHERE ID_Cliente = 10;
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(3, false, 'INSERT INTO se usa para crear nuevos registros, no para modificar un dato existente con WHERE.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
                        b. INSERT INTO Clientes (Telefono) VALUES ('5512345678') WHERE ID_Cliente = 10;
                    </button>
                    <button type="button" onclick="responderAutoevaluacionSQL(3, false, 'SELECT solo consulta el dato, no lo actualiza.')" class="w-full text-left px-3 py-2 rounded-lg border border-slate-200 hover:bg-purple-50 hover:border-purple-300 transition">
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

function mostrarComandoCRUD(tipo) {
    const visor = document.getElementById('visor-crud-interactivo');
    if (!visor) return;

    const datos = {
        create: {
            tituloClass: 'text-emerald-700',
            icono: 'fa-plus-circle',
            etiqueta: 'Create (INSERT INTO) — Crear / Insertar',
            badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
            badgeTexto: 'Agrega filas nuevas',
            desc: 'Agrega nuevos registros (filas) a una tabla existente. Es indispensable que los valores coincidan en orden y tipo de dato con las columnas definidas.',
            codeClass: 'text-emerald-300',
            sql: `INSERT INTO Estudiantes (Matricula, Nombre, Carrera)\nVALUES ('20260145', 'Ana López', 'TIC');`
        },
        read: {
            tituloClass: 'text-sky-700',
            icono: 'fa-search',
            etiqueta: 'Read (SELECT) — Leer / Consultar',
            badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
            badgeTexto: 'Consulta sin modificar',
            desc: 'Extrae información de una o varias tablas sin alterarla. Se combina con FROM para indicar la tabla y con WHERE para filtrar exactamente qué filas nos interesan.',
            codeClass: 'text-sky-300',
            sql: `SELECT Nombre, Carrera\nFROM Estudiantes\nWHERE Matricula = '20260145';`
        },
        update: {
            tituloClass: 'text-amber-700',
            icono: 'fa-edit',
            etiqueta: 'Update (UPDATE) — Actualizar / Modificar',
            badgeClass: 'bg-amber-50 text-amber-900 border-amber-200',
            badgeTexto: 'Usa WHERE como cinturón de seguridad',
            desc: 'Cambia los valores de registros que ya existen en la tabla. Aquí la cláusula WHERE actúa como un cinturón de seguridad: si la omites, modificarás absolutamente todas las filas de la tabla.',
            codeClass: 'text-amber-300',
            sql: `UPDATE Estudiantes\nSET Carrera = 'Ingeniería de Software'\nWHERE Matricula = '20260145';`
        },
        delete: {
            tituloClass: 'text-rose-700',
            icono: 'fa-trash-alt',
            etiqueta: 'Delete (DELETE FROM) — Eliminar',
            badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
            badgeTexto: 'Delimita el borrado con WHERE',
            desc: 'Borra registros específicos de una tabla. Al igual que en la actualización, usar WHERE es crítico para evitar vaciar la tabla por completo.',
            codeClass: 'text-rose-300',
            sql: `DELETE FROM Estudiantes\nWHERE Matricula = '20260145';`
        }
    };

    const actual = datos[tipo] || datos.create;

    visor.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xs font-bold ${actual.tituloClass}"><i class="fas ${actual.icono} mr-1"></i>${actual.etiqueta}</span>
            <span class="text-[11px] ${actual.badgeClass} border px-2 py-0.5 rounded-full font-medium">${actual.badgeTexto}</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${actual.desc}</p>
        <pre class="bg-slate-900 ${actual.codeClass} p-3.5 rounded-xl font-mono text-xs overflow-x-auto border border-slate-700"><code>${actual.sql}</code></pre>
    `;

    const estilosBotones = {
        create: { activa: 'bg-emerald-600 text-white shadow', inactiva: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' },
        read: { activa: 'bg-sky-600 text-white shadow', inactiva: 'bg-sky-100 text-sky-800 hover:bg-sky-200' },
        update: { activa: 'bg-amber-600 text-white shadow', inactiva: 'bg-amber-100 text-amber-900 hover:bg-amber-200' },
        delete: { activa: 'bg-rose-600 text-white shadow', inactiva: 'bg-rose-100 text-rose-800 hover:bg-rose-200' }
    };

    Object.keys(estilosBotones).forEach(clave => {
        const btn = document.getElementById(`btn-crud-${clave}`);
        if (!btn) return;
        const base = 'px-3 py-1.5 rounded-lg text-xs font-bold transition ';
        btn.className = base + (clave === tipo ? estilosBotones[clave].activa : estilosBotones[clave].inactiva);
    });
}

function responderAutoevaluacionSQL(numeroPregunta, esCorrecta, mensaje) {
    const caja = document.getElementById(`feedback-sql-${numeroPregunta}`);
    if (!caja) return;

    caja.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-300', 'text-emerald-900', 'bg-rose-50', 'border-rose-300', 'text-rose-900');

    if (esCorrecta) {
        caja.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-900');
        caja.innerHTML = `<i class="fas fa-check-circle mr-1"></i> <span class="font-bold">¡Correcto!</span> ${mensaje}`;
    } else {
        caja.classList.add('bg-rose-50', 'border-rose-300', 'text-rose-900');
        caja.innerHTML = `<i class="fas fa-times-circle mr-1"></i> <span class="font-bold">Inténtalo de nuevo:</span> ${mensaje}`;
    }
}