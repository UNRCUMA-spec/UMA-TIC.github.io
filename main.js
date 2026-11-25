const listaCapsulas = [
    capsulaSociales, 
    capsulaProgramacion, 
    capsulaMatematicas, 
    capsulaRedes, 
    capsulaDatos, 
    capsulaGestion, 
    capsulaInvestigacion,
    capsulaQuéesVisualStudioCode,
    capsulaCondicionales,
    capsulaTiposDatos,
    capsulaSistemaBinario,
    capsulaReglaDeTres,
    capsulaTripleRestriccion,
    capsulaModelosIngresos,
    capsulaMatrizEisenhower
    
];

function navegarA(idSeccion) {
    document.querySelectorAll('.seccion-pagina').forEach(sec => sec.classList.add('hidden'));
    
    if(idSeccion === 'inicio') {
        document.getElementById('sec-inicio').classList.remove('hidden');
    } else if(idSeccion === 'catalogo') {
        document.getElementById('sec-catalogo').classList.remove('hidden');
        filtrarCapsulas();
    } else if(idSeccion === 'capsula') {
        document.getElementById('sec-capsula').classList.remove('hidden');
    } else if(idSeccion === 'acerca') {
        document.getElementById('sec-acerca').classList.remove('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenuMobil() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function filtrarPorArea(area) {
    navegarA('catalogo');
    document.getElementById('filtroAreaSelect').value = area;
    document.getElementById('filtroFormatoSelect').value = 'Todos';
    const inputCentral = document.getElementById('busquedaCentral');
    const inputHeader = document.getElementById('busquedaHeader');
    if(inputCentral) inputCentral.value = '';
    if(inputHeader) inputHeader.value = '';
    filtrarCapsulas();
}

function filtrarCapsulas() {
    const area = document.getElementById('filtroAreaSelect').value;
    const formato = document.getElementById('filtroFormatoSelect').value;
    
    const textoCentral = document.getElementById('busquedaCentral') ? document.getElementById('busquedaCentral').value.toLowerCase().trim() : '';
    const textoHeader = document.getElementById('busquedaHeader') ? document.getElementById('busquedaHeader').value.toLowerCase().trim() : '';
    const query = textoCentral || textoHeader;

    const grid = document.getElementById('gridCapsulas');

    const filtradas = listaCapsulas.filter(cap => {
        const cumpleArea = (area === 'Todas' || cap.area === area);
        const cumpleFormato = (formato === 'Todos' || cap.formato === formato);
        
        const coincideTexto = !query || 
            cap.titulo.toLowerCase().includes(query) || 
            cap.explicacion.toLowerCase().includes(query) || 
            (cap.tags && cap.tags.some(tag => tag.toLowerCase().includes(query)));

        return cumpleArea && cumpleFormato && coincideTexto;
    });

    grid.innerHTML = '';
    if(filtradas.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500">
            <i class="fas fa-folder-open text-4xl mb-3 text-slate-300"></i>
            <p>No se encontraron cápsulas que coincidan con tu búsqueda.</p>
        </div>`;
        return;
    }

    filtradas.forEach(cap => {
        let colorHeader = 'bg-slate-800 border-slate-600 text-amber-200';
        let colorBoton = 'bg-slate-800 hover:bg-slate-900 border-slate-700 text-white';
        let colorFormato = 'text-slate-800';

        if(cap.area.includes('Programación')) {
            colorHeader = 'bg-blue-900 border-blue-500/40 text-amber-200';
            colorBoton = 'bg-blue-600 hover:bg-blue-700 border-blue-400 text-white';
            colorFormato = 'text-blue-700';
        } else if(cap.area.includes('Matemáticas')) {
            colorHeader = 'bg-amber-900 border-amber-500/40 text-amber-200';
            colorBoton = 'bg-amber-600 hover:bg-amber-700 border-amber-400 text-white';
            colorFormato = 'text-amber-700';
        } else if(cap.area.includes('Infraestructura')) {
            colorHeader = 'bg-indigo-900 border-indigo-500/40 text-amber-200';
            colorBoton = 'bg-indigo-600 hover:bg-indigo-700 border-indigo-400 text-white';
            colorFormato = 'text-indigo-700';
        } else if(cap.area.includes('Datos')) {
            colorHeader = 'bg-purple-900 border-purple-500/40 text-amber-200';
            colorBoton = 'bg-purple-600 hover:bg-purple-700 border-purple-400 text-white';
            colorFormato = 'text-purple-700';
        } else if(cap.area.includes('Gestión')) {
            colorHeader = 'bg-slate-800 border-slate-500/40 text-amber-200';
            colorBoton = 'bg-slate-700 hover:bg-slate-800 border-slate-600 text-white';
            colorFormato = 'text-slate-700';
        } else if(cap.area.includes('Humanidades')) {
            colorHeader = 'bg-emerald-900 border-emerald-500/40 text-amber-200';
            colorBoton = 'bg-emerald-600 hover:bg-emerald-700 border-emerald-400 text-white';
            colorFormato = 'text-emerald-700';
        } else if(cap.area.includes('Investigación')) {
            colorHeader = 'bg-rose-900 border-rose-500/40 text-amber-200';
            colorBoton = 'bg-rose-600 hover:bg-rose-700 border-rose-400 text-white';
            colorFormato = 'text-rose-700';
        }

        grid.innerHTML += `
            <div class="bg-white rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition duration-300 flex flex-col overflow-hidden group">
                <div class="${colorHeader} p-4 flex justify-between items-center border-b">
                    <span class="text-[11px] font-semibold uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded">${cap.area}</span>
                    <span class="text-xs text-slate-200"><i class="far fa-clock mr-1"></i>${cap.duracion}</span>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="font-bold text-slate-900 text-base group-hover:text-vino-800 transition mb-2">${cap.titulo}</h3>
                        <p class="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">${cap.explicacion}</p>
                    </div>
                    <div>
                        <div class="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 mb-4">
                            <span>Nivel: <strong class="text-slate-700">${cap.nivel}</strong></span>
                            <span>Formato: <strong class="${colorFormato}">${cap.formato}</strong></span>
                        </div>
                        <button onclick="verDetalleCapsula(${cap.id})" class="w-full ${colorBoton} font-medium text-xs py-2.5 rounded-lg transition text-center shadow border">
                            Ver Cápsula / Iniciar
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function verDetalleCapsula(id) {
    const cap = listaCapsulas.find(item => item.id === id);
    if(!cap) return;

    const contenedor = document.getElementById('detalleCapsulaContenido');
    contenedor.innerHTML = `
        <div class="text-white p-6 border-b-4 border-dorado-500" style="background-color: #630037;">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">${cap.area}</span>
            <h2 class="text-2xl font-bold mt-1">${cap.titulo}</h2>
            <p class="text-xs text-vino-200 mt-2">Validado por la Academia UNRC | Nivel ${cap.nivel} • ${cap.duracion}</p>
        </div>
        <div class="p-6 sm:p-8 space-y-8">
            <div class="space-y-2">
                <h3 class="text-base font-bold text-vino-900 flex items-center">
                    <span class="bg-vino-800 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs mr-2">1</span>
                    Explicación Breve
                </h3>
                <p class="text-sm text-slate-700 leading-relaxed pl-8">${cap.explicacion}</p>
            </div>

            <div class="space-y-2">
                <h3 class="text-base font-bold text-vino-900 flex items-center mb-3">
                    <span class="bg-vino-800 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs mr-2">2</span>
                    Recurso Multimedia / Interactivo
                </h3>
                <div class="pl-8">${cap.recursoHtml}</div>
            </div>

            <div class="space-y-3">
                <h3 class="text-base font-bold text-vino-900 flex items-center">
                    <span class="bg-vino-800 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs mr-2">3</span>
                    Ejercicio Práctico
                </h3>
                <div class="pl-8 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                    <p class="text-xs font-bold text-slate-800">${cap.ejercicioPregunta}</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        ${cap.opciones.map((opt, idx) => `
                            <button onclick="evaluarRespuesta(${idx === cap.respuestaCorrecta})" class="text-left p-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 transition text-slate-700">
                                ${opt}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    navegarA('capsula');
}

function evaluarRespuesta(esCorrecta) {
    if(esCorrecta) {
        alert("¡Respuesta Correcta! Has completado el ejercicio con éxito.");
    } else {
        alert("Respuesta incorrecta. Revisa el contenido explicativo e inténtalo de nuevo.");
    }
}

function ejecutarBusquedaCentral() {
    const selectArea = document.getElementById('filtroAreaSelect');
    const selectFormato = document.getElementById('filtroFormatoSelect');
    if(selectArea) selectArea.value = 'Todas';
    if(selectFormato) selectFormato.value = 'Todos';

    navegarA('catalogo');
}

function buscarHero(e) {
    if(e.key === 'Enter') {
        ejecutarBusquedaCentral();
    }
}

function buscarHeader(e) {
    if(e.key === 'Enter') {
        const val = document.getElementById('busquedaHeader').value;
        const central = document.getElementById('busquedaCentral');
        if(central) central.value = val;
        ejecutarBusquedaCentral();
    }
}

function buscarEtiqueta(tag) {
    const central = document.getElementById('busquedaCentral');
    if(central) central.value = tag;
    ejecutarBusquedaCentral();
}

window.onload = function() {
    filtrarCapsulas();
};
