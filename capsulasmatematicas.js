const capsulaMatematicas = {
    id: 3,
    titulo: "Derivadas por Definición e Interpretación Geométrica",
    area: "Matemáticas y ciencias básicas",
    duracion: "8 min",
    nivel: "Intermedio",
    formato: "Quiz",
    tags: ["Cálculo", "Funciones", "Matemáticas"],
    explicacion: "Comprende el concepto de la derivada como la razón de cambio instantánea y la pendiente de la recta tangente a una curva en un punto determinado.",
    recursoHtml: `<div class="bg-amber-50 p-6 rounded-xl border border-amber-200 text-center">
        <i class="fas fa-square-root-variable text-5xl text-amber-700 mb-3"></i>
        <h4 class="font-bold text-slate-800 text-base">Fórmula del Límite de Fermat</h4>
        <p class="font-serif text-lg font-bold text-vino-900 my-3">f'(x) = lim <sub>h → 0</sub> [f(x + h) - f(x)] / h</p>
    </div>`,
    ejercicioPregunta: "Geométricamente, ¿qué representa la derivada de una función en un punto?",
    opciones: ["El área bajo la curva", "La pendiente de la recta tangente", "El valor máximo de la función", "El eje de simetría"],
    respuestaCorrecta: 1
};
const capsulaSistemaBinario = {
    id: 102,
    titulo: "Sistema binario",
    area: "Matemáticas y ciencias básicas",
    duracion: "8 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Binario", "Bits", "Matemáticas", "Computación"],
    explicacion: "El sistema binario usa solo dos dígitos, 0 y 1, y es el lenguaje con el que las computadoras guardan y procesan la información. Aprende a convertir entre decimal y binario con la suma de pesos y con divisiones sucesivas.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_matematicas/sistemabinario.png" alt="Infografía sobre el sistema binario" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_matematicas/sistema-binario.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "¿Cuál es el número 13 escrito en binario?",
    opciones: [
        "1011",
        "1101",
        "1110",
        "1001"
    ],
    respuestaCorrecta: 1
};
const capsulaReglaDeTres = {
    id: 107,
    titulo: "Regla de tres en la vida digital",
    area: "Matemáticas y ciencias básicas",
    duracion: "8 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Regla de tres", "Proporcionalidad", "Matemáticas"],
    explicacion: "La regla de tres permite encontrar un valor desconocido a partir de tres datos relacionados. Aprende la directa y la inversa, calcula tus propios casos y practica arrastrando cada resultado a su problema.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_matematicas/reglatres.png" alt="Infografía sobre la regla de tres directa e inversa" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_matematicas/regla-de-tres.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "Si 5 fotos pesan 20 MB, ¿cuánto pesan 12 fotos?",
    opciones: [
        "40 MB",
        "48 MB",
        "60 MB",
        "100 MB"
    ],
    respuestaCorrecta: 1
};