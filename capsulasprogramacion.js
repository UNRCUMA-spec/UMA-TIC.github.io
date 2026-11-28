const capsulaProgramacion = {
    id: 2,
    titulo: "Introducción a Arreglos Unidimensionales (Vectores) en C++",
    area: "Programación y desarrollo de software",
    duracion: "7 min",
    nivel: "Intermedio",
    formato: "Video",
    tags: ["C++", "Estructuras de Datos", "Programación"],
    explicacion: "Los arreglos permiten almacenar múltiples elementos del mismo tipo de forma contigua en memoria. Aprende su sintaxis, declaración e iteración básica con bucles for.",
    recursoHtml: `<div class="bg-slate-900 text-slate-100 p-6 rounded-xl shadow-inner font-mono text-xs">
        <div class="flex items-center justify-between pb-3 border-b border-slate-700 mb-3 text-slate-400">
            <span>ejemplo_vector.cpp</span>
            <span>C++17</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>#include &lt;iostream&gt;
using namespace std;
int main() {
    int numeros[5] = {10, 20, 30, 40, 50};
    for(int i = 0; i &lt; 5; i++) {
        cout &lt;&lt; numeros[i] &lt;&lt; endl;
    }
    return 0;
}</code></pre>
    </div>`,
    ejercicioPregunta: "¿Cuál es el índice del primer elemento en un arreglo en C++?",
    opciones: ["1", "-1", "0", "Depende del tamaño"],
    respuestaCorrecta: 2
};
const capsulaQuéesVisualStudioCode= {
    id: 8,
    titulo: "¿Qué es Visual Studio Code?",
    area: "Programación y desarrollo de software",
    duracion: "5 min",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["VSCode", "Programacion", "EditorDeCodigo", "Extensiones",           "DesarrolloSoftware"],
    explicacion: 
        "Para los estudiantes de Tecnologías de la Información, dominar herramientas estándar de la industria es fundamental. Visual Studio Code (VS Code) es actualmente el entorno de código preferido a nivel mundial, ya que agiliza el desarrollo de software y prepara al alumno para integrarse rápidamente a flujos de trabajo profesionales y corporativos modernos. <br> <br> Visual Studio Code es un editor de código fuente optimizado, gratuito y desarrollado por Microsoft. A diferencia de un IDE tradicional complejo, es ligero y altamente personalizable de acuerdo con el proyecto que se esté trabajando. Sus características más destacadas son: Multiplataforma: Disponible de forma nativa en Windows, macOS y Linux. Soporte Universal: Compatible con casi cualquier lenguaje de programación (Python, C++, Java, JavaScript, etc.). Extensiones: Su Marketplace permite instalar complementos para autocompletado avanzado (IntelliSense), formato automático, resaltado de sintaxis y conexión directa con bases de datos. Terminal Integrada: Permite compilar código, ejecutar scripts o utilizar herramientas de control de versiones (Git) sin tener que abandonar la interfaz del editor.",
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/1.2.2.-interfaz-vscode-imagen.png"
         alt="Imagen de Visual Studio Code">`,
    videoId: "TbzrOz8HbFM",
    videoTitulo: "Curso de Visual Studio Code desde CERO (Completo) — Soy Dalto",
    ejercicioPregunta: 
        "¿Cuál de las siguientes opciones describe mejor la ventaja operativa de Visual Studio Code frente a editores de texto básicos como el Bloc de Notas?",
    opciones: [
        "A) Está atado a un único lenguaje de programación propietario e incompatible con otras plataformas",
        "B) Solo funciona en computadoras con hardware muy avanzado y requiere una licencia de pago corporativa.", 
        "C) Su capacidad de potenciar el flujo de trabajo mediante extensiones, autocompletado inteligente (IntelliSense) y una terminal integrada.", 
        "D) Es un sistema operativo diseñado exclusivamente para la creación de bases de datos."
        ],
    respuestaCorrecta: 2,
    retroalimentacionCorrecta: "¡Correcto! VS Code va más allá del texto plano; su arquitectura basada en extensiones permite adaptar el editor a cualquier lenguaje, mientras que herramientas integradas como la terminal y el autocompletado lo convierten en un entorno escalable y productivo, manteniendo un rendimiento ligero, gratuito y multiplataforma.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo. Piensa en las herramientas que VS Code ofrece además de editar texto.",
    quiz: [
        {
            pregunta: "En un proyecto Python, necesitas ejecutar `main.py` y depurar errores sin salir del editor. ¿Qué flujo de trabajo es el más adecuado en VS Code?",
            opciones: [
                "A) Instalar la extensión de Python, seleccionar el intérprete del proyecto y ejecutar o depurar el archivo.",
                "B) Cambiar la extensión del archivo a .html.",
                "C) Instalar una extensión de formato para CSS.",
                "D) Abrir el archivo como texto sin formato."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! La extensión de Python y el intérprete seleccionado permiten ejecutar y depurar el proyecto con el entorno que realmente utiliza.",
            retroalimentacionIncorrecta: "Revisa cómo VS Code configura el soporte del lenguaje y el intérprete del proyecto."
        },
        {
            pregunta: "Al ejecutar el proyecto, aparece `ModuleNotFoundError`, aunque instalaste el paquete requerido. ¿Qué deberías revisar primero?",
            opciones: [
                "A) Si VS Code tiene seleccionado el mismo intérprete o entorno virtual donde instalaste el paquete.",
                "B) Si el nombre de la carpeta del proyecto está en mayúsculas.",
                "C) Si el archivo tiene un tema de color instalado.",
                "D) Si el paquete aparece en la lista de extensiones de temas."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! El paquete puede estar instalado en otro entorno; selecciona en VS Code el intérprete asociado al proyecto.",
            retroalimentacionIncorrecta: "Comprueba qué intérprete está activo y en qué entorno instalaste el paquete."
        },
        {
            pregunta: "Quieres detener el programa en una línea específica y revisar el valor de una variable. ¿Qué herramienta de VS Code debes usar?",
            opciones: [
                "A) El formato automático del documento.",
                "B) El minimapa del editor.",
                "C) Un punto de interrupción (breakpoint) y la vista Ejecutar y depurar.",
                "D) El cambio de tema de color."
            ],
            respuestaCorrecta: 2,
            retroalimentacionCorrecta: "¡Correcto! Un breakpoint pausa la ejecución y permite inspeccionar variables desde la vista de depuración.",
            retroalimentacionIncorrecta: "Busca la herramienta que pausa la ejecución para inspeccionar el estado del programa."
        }
    ],
    referencias: [
        {
            titulo: "Microsoft. Documentación de Visual Studio Code.",
            url: "https://code.visualstudio.com/docs"
        },
        {
            titulo: "Soy Dalto. Curso de Visual Studio Code desde CERO (video en español).",
            url: "https://www.youtube.com/watch?v=TbzrOz8HbFM"
        }
    ],
    actividadInteractiva: {
        instrucciones: "Crea un archivo llamado saludo.py en un proyecto de prueba, escribe un programa que imprima Hola, mundo, ejecútalo desde VS Code y coloca un punto de interrupción en la línea de impresión.",
        solucion: "Selecciona el intérprete de Python del proyecto, usa Ejecutar archivo de Python en terminal y después inicia la depuración con el breakpoint para inspeccionar la ejecución."
    }
};
 
const capsulaCondicionales = {
    id: 101,
    titulo: "Condicionales (if / else)",
    area: "Programación y desarrollo de software",
    duracion: "8 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Python", "Condicionales", "Programación"],
    explicacion: "Los condicionales permiten que un programa tome decisiones: ejecuta un bloque de código solo si se cumple una condición y otro si no se cumple. Aprende la sintaxis de if, elif y else y practica con ejemplos.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_programacion/condicionales.png" alt="Infografía sobre condicionales if y else" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_programacion/condicionales.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "¿Qué operador se usa para comprobar si dos valores son iguales?",
    opciones: [
        "=",
        "==",
        "!=",
        "=>"
    ],
    respuestaCorrecta: 1
};
const capsulaTiposDatos = {
    id: 106,
    titulo: "Variables y tipos de datos",
    area: "Programación y desarrollo de software",
    duracion: "7 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Python", "Variables", "Tipos de datos", "Programación"],
    explicacion: "Una variable es una caja con nombre donde un programa guarda un dato. Conoce los cuatro tipos de datos básicos (texto, entero, decimal y booleano) y practica arrastrando cada tipo a su ejemplo.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_programacion/tiposdedatos.png" alt="Infografía sobre variables y tipos de datos" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_programacion/tipos-de-datos.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "¿Qué tipo de dato representa 3.14?",
    opciones: [
        "Texto (String)",
        "Entero (Integer)",
        "Decimal (Float)",
        "Booleano (Boolean)"
    ],
    respuestaCorrecta: 2
};

const capsulaGitGithub = {
    id: 108,
    titulo: "Git y GitHub: Control de Versiones",
    area: "Programación y desarrollo de software",
    duracion: "5 a 7 minutos",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["Git", "GitHub", "ControlDeVersiones", "TrabajoColaborativo", "Repositorios"],
    explicacion: `En el desarrollo de software actual, trabajar en equipo sin sobrescribir el código de otros es un reto. Git y GitHub son herramientas estándar de la industria que resuelven este problema, permitiendo a los estudiantes de Tecnologías de la Información gestionar el historial de sus proyectos, automatizar tareas y colaborar de manera segura a nivel global.

<br><br>Aunque suelen confundirse, Git y GitHub cumplen funciones complementarias en el ciclo de vida del desarrollo de software:

<br><strong>¿Qué es Git?</strong> Es un sistema de control de versiones distribuido que se instala en tu computadora. Registra los cambios en los archivos de un proyecto localmente, permitiendo regresar a versiones anteriores si algo falla.

<br><strong>¿Qué es GitHub?</strong> Es una plataforma en la nube que aloja repositorios de Git, facilitando la colaboración remota, la revisión de código y la integración continua.

<br><strong>Flujo básico de trabajo:</strong> Consta de tres pasos principales: git add (prepara cambios), git commit (guarda el historial local) y git push (envía los cambios a la nube en GitHub).

<br><strong>Ramificaciones (Branches):</strong> Permiten trabajar en nuevas características de forma aislada sin afectar el código principal (rama main).`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/flujo-git-github.png"
         alt="Imagen del flujo de trabajo de Git y GitHub">`,
    videoId: "jGehuhFhtnE",
    videoTitulo: "¿Qué es Git y cómo funciona? — EDteam",
    ejercicioPregunta: "Guardaste tus cambios con git commit y quieres compartirlos en GitHub. ¿Qué comando debes usar?",
    opciones: [
        "A) git clone",
        "B) git pull",
        "C) git push",
        "D) git init"
    ],
    respuestaCorrecta: 2,
    retroalimentacionCorrecta: "¡Correcto! git push envía los commits locales al repositorio remoto para compartirlos con el equipo.",
    retroalimentacionIncorrecta: "git clone descarga un repositorio y git pull recibe cambios; para enviar tus commits usa git push.",
    quiz: [
        {
            pregunta: "Guardaste tus cambios con git commit y quieres compartirlos en GitHub. ¿Qué comando debes usar?",
            opciones: [
                "A) git clone",
                "B) git pull",
                "C) git push",
                "D) git init"
            ],
            respuestaCorrecta: 2,
            retroalimentacionCorrecta: "¡Correcto! git push envía los commits locales al repositorio remoto para compartirlos con el equipo.",
            retroalimentacionIncorrecta: "git clone descarga un repositorio y git pull recibe cambios; para enviar tus commits usa git push."
        },
        {
            pregunta: "¿Cuál es la diferencia principal entre Git y GitHub?",
            opciones: [
                "A) Git es una plataforma web y GitHub es un editor de código.",
                "B) Git controla versiones localmente y GitHub aloja repositorios Git para colaborar en la nube.",
                "C) Git y GitHub son dos nombres del mismo comando.",
                "D) GitHub reemplaza la necesidad de guardar cambios con Git."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! Git registra el historial de versiones; GitHub aloja repositorios Git y facilita la colaboración remota.",
            retroalimentacionIncorrecta: "Recuerda: Git es el sistema de control de versiones; GitHub es una plataforma que hospeda repositorios."
        },
        {
            pregunta: "¿Qué hace git add README.md antes de crear un commit?",
            opciones: [
                "A) Prepara el archivo para incluirlo en el siguiente commit.",
                "B) Envía el archivo directamente a GitHub.",
                "C) Borra el historial del repositorio.",
                "D) Descarga la última versión del repositorio remoto."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! git add coloca los cambios seleccionados en el área de preparación para el siguiente commit.",
            retroalimentacionIncorrecta: "git add prepara cambios localmente; no los envía al remoto ni los confirma por sí solo."
        },
        {
            pregunta: "Después de preparar los cambios con git add, ¿qué comando guarda una nueva versión en el historial local?",
            opciones: [
                "A) git push",
                "B) git commit",
                "C) git clone",
                "D) git fetch"
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! git commit registra los cambios preparados en el historial local.",
            retroalimentacionIncorrecta: "El comando que crea una entrada en el historial local es git commit."
        },
        {
            pregunta: "Quieres desarrollar una mejora sin alterar directamente la rama principal. ¿Qué recurso de Git te ayuda?",
            opciones: [
                "A) El archivo README.",
                "B) Una rama (branch) independiente.",
                "C) El comando git push --force.",
                "D) Una copia del historial en un documento de texto."
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! Una rama permite trabajar de forma aislada y después integrar los cambios cuando estén listos.",
            retroalimentacionIncorrecta: "Crea una rama para trabajar en la mejora sin modificar directamente la rama principal."
        }
    ],
    actividadInteractiva: {
        instrucciones: "En un repositorio de práctica que ya tenga un remoto configurado, cambia una línea del README. Revisa el estado, prepara solo ese archivo, crea un commit y compártelo con el equipo.",
        solucion: "Ejecuta git status, git add README.md y git commit -m \"Update README\". Para compartir el commit, usa git push origin main si estás trabajando en main; si estás en otra rama, reemplaza main por su nombre."
    },
    referencias: [
        {
            titulo: "W3Schools. Git Tutorial.",
            url: "https://www.w3schools.com/git/"
        },
        {
            titulo: "Git. Getting Started - About Version Control.",
            url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"
        },
        {
            titulo: "EDteam. ¿Qué es Git y cómo funciona? (video en español).",
            url: "https://www.youtube.com/watch?v=jGehuhFhtnE"
        }
    ]
};

const Otros_datos_Git_GitHub = {
    id: 10,
    titulo: "Colaboración y herramientas avanzadas de Git y GitHub",
    area: "Programación y desarrollo de software",
    duracion: "5 a 7 minutos",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual y quiz",
    tags: ["Git", "GitHub", "ControlDeVersiones", "TrabajoColaborativo", "Repositorios"],
    explicacion: `Una vez dominado el guardado básico del código, los estudiantes de Tecnologías de la Información deben aprender a escalar sus proyectos. El verdadero poder de Git y GitHub radica en su capacidad para manejar múltiples versiones simultáneas, ignorar archivos innecesarios y gestionar la revisión de código en equipo mediante ramificaciones y Pull Requests.

<br><br>Para colaborar efectivamente en proyectos de software reales, es necesario utilizar herramientas más avanzadas de control de versiones:

<br><strong>Clonación (git clone):</strong> Permite descargar un repositorio remoto completo de GitHub a tu equipo local para empezar a trabajar.

<br><strong>Ramas (Branches):</strong> Líneas de desarrollo independientes. Permiten crear nuevas funciones (usando git branch o git checkout) sin alterar el código estable de la rama principal (main).

<br><strong>Fusión (git merge):</strong> Es el proceso de unir los cambios terminados de una rama secundaria de vuelta a la rama principal.

<br><strong>Pull Requests (PR):</strong> Es una función de GitHub donde propones tus cambios al equipo. Antes de hacer la fusión (merge), otros desarrolladores pueden revisar el código, hacer comentarios y aprobarlo.

<br><strong>El archivo .gitignore:</strong> Le indica a Git qué archivos o carpetas no debe rastrear ni subir a GitHub, por ejemplo, dependencias locales o archivos de configuración privados. Solo ignora archivos que Git aún no está siguiendo; si un archivo ya fue agregado al repositorio, .gitignore no lo eliminará del historial.`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/git-ramas-merge-imagen.jpg"
         alt="Diagrama de ramas y fusión en Git">`,
    videoId: "dSE-9ThG320",
    videoTitulo: "Git Flow Explicado Fácil: Ramas, Pull Request y Merge — ryudevcode",
    ejercicioPregunta: "Estás a punto de subir tu código a GitHub, pero te das cuenta de que hay un archivo con contraseñas locales que no debe hacerse público. ¿Qué elemento de Git debes utilizar para evitar que este archivo se suba al repositorio remoto?",
    opciones: [
        "A) Crear una nueva rama con git branch.",
        "B) Eliminar el archivo permanentemente de tu computadora.",
        "C) Registrar el nombre del archivo dentro de .gitignore.",
        "D) Usar el comando git clone."
    ],
    respuestaCorrecta: 2,
    retroalimentacionCorrecta: "¡Correcto! La opción C es correcta porque .gitignore le indica a Git qué archivos debe excluir del control de versiones. Esto evita que se agreguen archivos locales o privados por accidente, siempre que Git aún no los esté siguiendo. Nunca guardes contraseñas en el repositorio.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo.",
    quiz: [
        {
            pregunta: "Antes de compartir un repositorio, detectas que `config.local` contiene datos privados y todavía no está bajo seguimiento de Git. ¿Qué haces para excluirlo?",
            opciones: [
                "A) Añadir `config.local` a `.gitignore` antes de agregarlo al repositorio.",
                "B) Crear una rama con el mismo nombre que el archivo.",
                "C) Ejecutar `git clone` sobre el repositorio.",
                "D) Renombrar el archivo después de subirlo."
            ],
            respuestaCorrecta: 0,
            retroalimentacionCorrecta: "¡Correcto! `.gitignore` evita que Git agregue archivos no rastreados que coincidan con sus reglas. No elimina archivos que ya estén en el historial.",
            retroalimentacionIncorrecta: "Usa `.gitignore` antes de agregar el archivo. Si ya fue rastreado, ignorarlo no lo quita del historial."
        },
        {
            pregunta: "Vas a desarrollar una función nueva sin modificar `main`. ¿Qué comando crea y cambia a una rama independiente llamada `feature/busqueda`?",
            opciones: [
                "A) `git pull feature/busqueda`",
                "B) `git switch -c feature/busqueda`",
                "C) `git init feature/busqueda`",
                "D) `git merge main`"
            ],
            respuestaCorrecta: 1,
            retroalimentacionCorrecta: "¡Correcto! `git switch -c` crea la rama y te cambia a ella para trabajar de forma aislada.",
            retroalimentacionIncorrecta: "Elige el comando que crea una rama nueva y cambia a ella."
        },
        {
            pregunta: "Terminaste la rama `feature/busqueda` y quieres que el equipo revise tus commits antes de integrarlos a `main`. ¿Qué flujo corresponde?",
            opciones: [
                "A) Borrar la rama antes de compartirla.",
                "B) Ejecutar `git init` y reemplazar el repositorio remoto.",
                "C) Enviar la rama al remoto con `git push` y abrir un Pull Request en GitHub.",
                "D) Ejecutar `git clone` sobre tu copia local."
            ],
            respuestaCorrecta: 2,
            retroalimentacionCorrecta: "¡Correcto! El push publica la rama y el Pull Request permite revisar los cambios antes de fusionarlos.",
            retroalimentacionIncorrecta: "Primero publica tu rama en el remoto; después abre el Pull Request para revisión."
        }
    ],
    actividadInteractiva: {
        instrucciones: "En un repositorio de práctica, crea una rama feature/busqueda, modifica el README, guarda un commit y prepara el cambio para revisión. No incluyas archivos privados.",
        solucion: "Prueba el comando git switch -c feature/busqueda, realiza el cambio, ejecuta git add README.md y git commit -m \"Add search feature\". Luego publica la rama con git push -u origin feature/busqueda y abre un Pull Request hacia main."
    },
    referencias: [
        {
            titulo: "W3Schools. Git Tutorial.",
            url: "https://www.w3schools.com/git/"
        },
        {
            titulo: "W3Schools. Git Branches.",
            url: "https://www.w3schools.com/git/git_branch.asp"
        },
        {
            titulo: "GitHub Docs. About pull requests.",
            url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests"
        },
        {
            titulo: "ryudevcode. Git Flow Explicado Fácil: Ramas, Pull Request y Merge (video en español).",
            url: "https://www.youtube.com/watch?v=dSE-9ThG320"
        }
    ]
};
