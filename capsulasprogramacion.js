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
        "Para los estudiantes de Tecnologías de la Información, dominar herramientas estándar de la industria es fundamental. Visual Studio Code (VS Code) es actualmente el entorno de código preferido a nivel mundial, ya que agiliza el desarrollo de software y prepara al alumno para integrarse rápidamente a flujos de trabajo profesionales y corporativos modernos. <br> <br> Visual Studio Code es un editor de código fuente optimizado, gratuito y desarrollado por Microsoft. A diferencia de un IDE tradicional complejo, es ligero y altamente personalizable de acuerdo con el proyecto que se esté trabajando. Sus características más destacadas son: Multiplataforma: Disponible de forma nativa en Windows, macOS y Linux. Soporte Universal: Compatible con casi cualquier lenguaje de programación (Python, C++, Java, JavaScript, etc.). Extensiones: Su Marketplace permite instalar complementos para autocompletado avanzado (IntelliSense), formato automático, resaltado de sintaxis y conexión directa con bases de datos. Terminal Integrada: Permite compilar código, ejecutar scripts o utilizar herramientas de control de versiones (Git) sin tener que abandonar la interfaz del editor.",
    recursoHtml: `
        <img src=">`,
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
