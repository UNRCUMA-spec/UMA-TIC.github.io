const capsulaProgramacion = {
    id: 2,
    titulo: "Introducción a Arreglos Unidimensionales (Vectores) en C++",
    area: "Programación",
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
        cout &lt;&lt; "Posicion [" &lt;&lt; i &lt;&lt; "]: " &lt;&lt; numeros[i] &lt;&lt; endl;
    }
    return 0;
}</code></pre>
    </div>`,
    ejercicioPregunta: "¿Cuál es el índice del primer elemento en un arreglo en C++?",
    opciones: ["1", "-1", "0", "Depende del tamaño"],
    respuestaCorrecta: 2
};