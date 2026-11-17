const capsulaRedes = {
    id: 4,
    titulo: "Fundamentos de Direccionamiento IP y Subredes",
    area: "Infraestructura, arquitectura, redes y ciberseguridad",
    duracion: "6 min",
    nivel: "Intermedio",
    formato: "Infografía",
    tags: ["Redes", "IP", "Ciberseguridad"],
    explicacion: "Comprende la estructura de direcciones IPv4, clases de red y el cálculo básico de subredes para la interconexión segura de dispositivos.",
    recursoHtml: `<div class="bg-indigo-50 p-6 rounded-xl border border-indigo-200 text-center">
        <i class="fas fa-network-wired text-5xl text-indigo-700 mb-3"></i>
        <h4 class="font-bold text-slate-800 text-base">Estructura IPv4 /24</h4>
        <p class="text-xs text-slate-600 mt-2 font-mono">Red: 192.168.1.0 | Máscara: 255.255.255.0</p>
    </div>`,
    ejercicioPregunta: "¿Qué máscara de subred corresponde a un prefijo barra /24?",
    opciones: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.255"],
    respuestaCorrecta: 0
};