const capsulaGestion = {
    id: 6,
    titulo: "Introducción a la Administración de Proyectos TIC",
    area: "Gestión, innovación y administración tecnológica",
    duracion: "7 min",
    nivel: "Inicial",
    formato: "Quiz",
    tags: ["Gestión", "PMBOK", "Scrum"],
    explicacion: "Conoce los fundamentos para planificar, ejecutar y controlar proyectos tecnológicos combinando metodologías predictivas y ágiles.",
    recursoHtml: `<div class="bg-slate-100 p-6 rounded-xl border border-slate-300 text-center">
        <i class="fas fa-chart-line text-5xl text-slate-700 mb-3"></i>
        <h4 class="font-bold text-slate-800 text-base">Ciclo de Vida del Proyecto</h4>
        <p class="text-xs text-slate-600 mt-2">Inicio, Planificación, Ejecución, Monitoreo y Cierre.</p>
    </div>`,
    ejercicioPregunta: "¿Qué metodología ágil utiliza Sprints y tableros Kanban?",
    opciones: ["Scrum", "Cascada (Waterfall)", "PMBOK Tradicional", "Modelo en V"],
    respuestaCorrecta: 0
};
const capsulaTripleRestriccion = {
    id: 103,
    titulo: "La triple restricción: alcance, tiempo y costo",
    area: "Gestión, innovación y administración tecnológica",
    duracion: "7 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Administración de proyectos", "Alcance", "Tiempo", "Costo"],
    explicacion: "Todo proyecto debe equilibrar tres límites: el alcance, el tiempo y el costo. Están conectados, y un cambio en uno afecta al menos a otro. Practica con un simulador qué pasa cuando el tiempo no alcanza.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_gestion/triplerestriccion.png" alt="Infografía sobre la triple restricción de un proyecto" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_gestion/triple-restriccion.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-slate-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "¿Cuáles son las tres restricciones de un proyecto?",
    opciones: [
        "Alcance, tiempo y costo",
        "Calidad, riesgo y clientes",
        "Equipo, oficina y herramientas",
        "Planeación, ejecución y cierre"
    ],
    respuestaCorrecta: 0
};

const capsulaModelosIngresos = {
    id: 104,
    titulo: "¿Cómo gana dinero una app? Modelos de ingresos digitales",
    area: "Gestión, innovación y administración tecnológica",
    duracion: "9 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Economía digital", "Modelos de ingresos", "Freemium", "Aplicaciones"],
    explicacion: "Un modelo de ingresos es la forma en que una empresa gana dinero con sus productos o servicios. Conoce cinco modelos (suscripción, freemium, publicidad, comisión y pago único), calcula un ejemplo freemium y clasifica apps reales.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_gestion/modelosingresos.png" alt="Infografía sobre los modelos de ingresos digitales" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_gestion/modelos-ingresos.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-slate-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "¿Qué modelo cobra una cuota recurrente por seguir usando el servicio?",
    opciones: [
        "Publicidad",
        "Suscripción",
        "Comisión",
        "Pago único"
    ],
    respuestaCorrecta: 1
};

const capsulaMatrizEisenhower = {
    id: 105,
    titulo: "Matriz de Eisenhower: priorizar lo urgente y lo importante",
    area: "Gestión, innovación y administración tecnológica",
    duracion: "9 min",
    nivel: "Inicial",
    formato: "Infografía",
    tags: ["Administración del tiempo", "Priorización", "Productividad"],
    explicacion: "La matriz de Eisenhower ordena las tareas con dos preguntas: ¿es urgente? y ¿es importante? Las respuestas dejan cuatro cuadrantes (hacer primero, programar, delegar y eliminar). Clasifica tareas de ejemplo y arma tu propia matriz.",
    recursoHtml: `<img src="recursos-visuales/visuales_caps_gestion/matrizeisenhower.png" alt="Infografía de la matriz de Eisenhower" class="w-full rounded-xl border border-slate-200">
        <a href="recursos-visuales/visuales_caps_gestion/matriz-eisenhower.html" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 rounded-lg bg-slate-700 text-white font-semibold">Abrir la práctica interactiva</a>`,
    ejercicioPregunta: "¿Qué hacer con una tarea urgente e importante?",
    opciones: [
        "Programarla para después",
        "Hacerla primero",
        "Eliminarla",
        "Delegarla siempre"
    ],
    respuestaCorrecta: 1
};