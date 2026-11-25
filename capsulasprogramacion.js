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
    formato: "Lectura breve con apoyo visual",
    tags: ["VSCode", "Programacion", "EditorDeCodigo", "Extensiones",           "DesarrolloSoftware"],
    explicacion: 
        `Para los estudiantes de Tecnologías de la Información, dominar herramientas estándar de la industria es fundamental. Visual Studio Code (VS Code) es actualmente el entorno de código preferido a nivel mundial, ya que agiliza el desarrollo de software y prepara al alumno para integrarse rápidamente a flujos de trabajo profesionales y corporativos modernos. <br> 
        
        <br>Visual Studio Code es un editor de código fuente optimizado, gratuito y desarrollado por Microsoft. A diferencia de un IDE tradicional complejo, es ligero y altamente personalizable de acuerdo con el proyecto que se esté trabajando.<br>
        
        <br><strong>Sus características más destacadas son:<br></strong>  
        <br><strong>Multiplataforma</strong> : Disponible de forma nativa en Windows, macOS y Linux.<br>
        
        <br><strong>Soporte Universal:</strong> Compatible con casi cualquier lenguaje de programación (Python, C++, Java, JavaScript, etc.).<br>
       
        <br><strong>Extensiones:</strong> Su Marketplace permite instalar complementos para autocompletado avanzado (IntelliSense), formato automático, resaltado de sintaxis y conexión directa con bases de datos.<br> 
        
        <br><strong>Terminal Integrada:</strong> Permite compilar código, ejecutar scripts o utilizar herramientas de control de versiones (Git) sin tener que abandonar la interfaz del editor.<br>`,
    recursoHtml: `
        <img src="recursos-visuales/visuales_caps_programacion/1.2.2.-interfaz-vscode-imagen.png"
         alt="Imagen de Visual Studio Code">`,
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
    retroalimentacionIncorrecta: "Inténtalo de nuevo. Piensa en las herramientas que VS Code ofrece además de editar texto."
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
    id: 9,
    titulo: "Git y GitHub: Control de Versiones",
    area: "Programación y desarrollo de software",
    duracion: "5 a 7 minutos",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual",
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
    ejercicioPregunta: "Estás trabajando en un proyecto grupal y terminaste de escribir una nueva función en tu computadora. Ya guardaste los cambios en tu repositorio local con el comando git commit. ¿Qué comando debes utilizar para subir esos cambios al repositorio compartido en GitHub para que tu equipo los vea?",
    opciones: [
        "A) git clone",
        "B) git pull",
        "C) git push",
        "D) git init"
    ],
    respuestaCorrecta: 2,
    retroalimentacionCorrecta: "¡Correcto! La opción C es correcta porque git push se encarga de 'empujar' o transferir los commits de tu repositorio local hacia el repositorio remoto (GitHub). El comando git clone es para descargar un proyecto, git pull para actualizar tu entorno local con cambios de otros, y git init para inicializar un proyecto nuevo desde cero.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo."
};

const Otros_datos_Git_GitHub = {
    id: 10,
    titulo: "Colaboración y herramientas avanzadas de Git y GitHub",
    area: "Programación y desarrollo de software",
    duracion: "5 a 7 minutos",
    nivel: "Inicial",
    formato: "Lectura breve con apoyo visual",
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
    ejercicioPregunta: "Estás a punto de subir tu código a GitHub, pero te das cuenta de que hay un archivo con contraseñas locales que no debe hacerse público. ¿Qué elemento de Git debes utilizar para evitar que este archivo se suba al repositorio remoto?",
    opciones: [
        "A) Crear una nueva rama con git branch.",
        "B) Eliminar el archivo permanentemente de tu computadora.",
        "C) Registrar el nombre del archivo dentro de .gitignore.",
        "D) Usar el comando git clone."
    ],
    respuestaCorrecta: 2,
    retroalimentacionCorrecta: "¡Correcto! La opción C es correcta porque .gitignore le indica a Git qué archivos debe excluir del control de versiones. Esto evita que se agreguen archivos locales o privados por accidente, siempre que Git aún no los esté siguiendo. Nunca guardes contraseñas en el repositorio.",
    retroalimentacionIncorrecta: "Inténtalo de nuevo."
};
