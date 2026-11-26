const listaCapsulas = [
    capsulaSociales, 
    capsulaProgramacion, 
    capsulaMatematicas, 
    capsulaRedes, 
    capsulaDatos, 
    capsulaSqlCrud,
    capsulaGestion, 
    capsulaInvestigacion,
    capsulaQuéesVisualStudioCode,
    capsulaCondicionales,
    capsulaTiposDatos,
    capsulaSistemaBinario,
    capsulaReglaDeTres,
    capsulaTripleRestriccion,
    capsulaModelosIngresos,
    capsulaMatrizEisenhower,
    capsulaGitGithub,
    Otros_datos_Git_GitHub,
    capsulaModeloRelacional,
    capsulaNormalizacionBD,
    capsulaLenguajeSQL,
    capsulaSQLvsNoSQL
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
    const abierto = menu.classList.toggle('is-open');
    const boton = document.getElementById('btnMobileMenu');
    boton.setAttribute('aria-expanded', String(abierto));
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
}

function cerrarMenuMobil() {
    document.getElementById('mobileMenu').classList.remove('is-open');
    const boton = document.getElementById('btnMobileMenu');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú de navegación');
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
        let colorHeader = 'bg-slate-800';
        let colorBoton = 'bg-slate-800 hover:bg-slate-900 border-slate-700 text-white';
        let colorFormato = 'text-slate-800';

        if(cap.area.includes('Programación')) {
            colorHeader = 'bg-blue-900';
            colorBoton = 'bg-blue-600 hover:bg-blue-700 border-blue-400 text-white';
            colorFormato = 'text-blue-700';
        } else if(cap.area.includes('Matemáticas')) {
            colorHeader = 'bg-amber-900';
            colorBoton = 'bg-amber-600 hover:bg-amber-700 border-amber-400 text-white';
            colorFormato = 'text-amber-700';
        } else if(cap.area.includes('Infraestructura')) {
            colorHeader = 'bg-indigo-900';
            colorBoton = 'bg-indigo-600 hover:bg-indigo-700 border-indigo-400 text-white';
            colorFormato = 'text-indigo-700';
        } else if(cap.area.includes('Datos')) {
            colorHeader = 'bg-purple-900';
            colorBoton = 'bg-purple-600 hover:bg-purple-700 border-purple-400 text-white';
            colorFormato = 'text-purple-700';
        } else if(cap.area.includes('Gestión')) {
            colorHeader = 'bg-slate-800';
            colorBoton = 'bg-slate-700 hover:bg-slate-800 border-slate-600 text-white';
            colorFormato = 'text-slate-700';
        } else if(cap.area.includes('Humanidades')) {
            colorHeader = 'bg-emerald-900';
            colorBoton = 'bg-emerald-600 hover:bg-emerald-700 border-emerald-400 text-white';
            colorFormato = 'text-emerald-700';
        } else if(cap.area.includes('Investigación')) {
            colorHeader = 'bg-rose-900';
            colorBoton = 'bg-rose-600 hover:bg-rose-700 border-rose-400 text-white';
            colorFormato = 'text-rose-700';
        }

        grid.innerHTML += `
            <div class="bg-white rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition duration-300 flex flex-col overflow-hidden group">
                <div class="capsula-catalogo-encabezado ${colorHeader}">
                    <span class="capsula-area">${cap.area}</span>
                    <span class="capsula-duracion"><i class="far fa-clock mr-1"></i>${cap.duracion}</span>
                </div>
                <div class="p-5 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 class="capsula-titulo mb-2">${cap.titulo}</h3>
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

    const preguntas = cap.quiz?.length
        ? cap.quiz
        : [{
            pregunta: cap.ejercicioPregunta,
            opciones: cap.opciones,
            respuestaCorrecta: cap.respuestaCorrecta,
            retroalimentacionCorrecta: cap.retroalimentacionCorrecta,
            retroalimentacionIncorrecta: cap.retroalimentacionIncorrecta
        }];

    const contenedor = document.getElementById('detalleCapsulaContenido');
    contenedor.innerHTML = `
        <div class="capsula-encabezado">
            <span class="capsula-area">${cap.area}</span>
            <h2 class="capsula-titulo">${cap.titulo}</h2>
            <p class="capsula-info">Validado por la Academia UNRC | Nivel ${cap.nivel} • ${cap.duracion}</p>
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
                ${cap.videoId ? `
                    <div class="pl-8 space-y-2">
                        <p class="text-sm font-semibold text-slate-800">Video complementario en español: ${cap.videoTitulo}</p>
                        <div class="w-full max-w-3xl">
                            <button
                                type="button"
                                class="video-preview group relative block w-full cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-900 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                                style="aspect-ratio: 16 / 9;"
                                data-video-id="${cap.videoId}"
                                data-video-title="${cap.videoTitulo}"
                                aria-label="Reproducir video: ${cap.videoTitulo}">
                                <img
                                    class="video-thumbnail absolute inset-0 h-full w-full object-cover"
                                    src="https://i.ytimg.com/vi/${cap.videoId}/hqdefault.jpg"
                                    alt=""
                                    loading="eager">
                                <span class="absolute inset-0 flex items-center justify-center bg-transparent transition-colors group-hover:bg-black/10">
                                    <span class="flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                                        <svg aria-hidden="true" viewBox="0 0 24 24" class="h-8 w-8 fill-white">
                                            <path d="M8 5v14l11-7z"></path>
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        </div>
                        <a href="https://www.youtube.com/watch?v=${cap.videoId}"
                           target="_blank" rel="noopener noreferrer"
                           class="inline-block text-sm text-blue-700 underline hover:text-blue-900">
                            Si el video no se reproduce, ábrelo en YouTube
                        </a>
                    </div>
                ` : ''}
            </div>

            <div class="space-y-3">
                <h3 class="text-base font-bold text-vino-900 flex items-center">
                    <span class="bg-vino-800 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs mr-2">3</span>
                    ${cap.quiz?.length ? 'Quiz' : 'Ejercicio Práctico'}
                </h3>
                <div class="pl-8 space-y-4">
                    ${preguntas.map((pregunta, preguntaIdx) => `
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                            <p class="text-xs font-bold text-slate-800">${pregunta.pregunta}</p>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                ${pregunta.opciones.map((opt, idx) => `
                                    <button onclick="evaluarRespuesta(${idx === pregunta.respuestaCorrecta}, ${cap.id}, ${preguntaIdx})" class="text-left p-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 transition text-slate-700">
                                        ${opt}
                                    </button>
                                `).join('')}
                            </div>
                            <div id="retroalimentacion-${cap.id}-${preguntaIdx}"
                                 role="status"
                                 aria-live="polite"></div>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${cap.actividadInteractiva ? `
                <div class="space-y-3">
                    <h3 class="text-base font-bold text-vino-900">Reto práctico</h3>
                    <div class="pl-8 space-y-3">
                        <p class="text-sm text-slate-700 leading-relaxed">${cap.actividadInteractiva.instrucciones}</p>
                        <details class="rounded-xl border border-blue-200 bg-blue-50 p-4">
                            <summary class="cursor-pointer text-sm font-semibold text-blue-900">
                                Ver una posible solución
                            </summary>
                            <p class="mt-3 text-sm text-slate-700 leading-relaxed">${cap.actividadInteractiva.solucion}</p>
                        </details>
                    </div>
                </div>
            ` : ''}

            ${cap.referencias?.length ? `
                <div class="space-y-3">
                    <h3 class="text-base font-bold text-vino-900">Referencias bibliográficas</h3>
                    <ul class="pl-8 list-disc space-y-2 text-sm text-slate-700">
                        ${cap.referencias.map(referencia => `
                            <li>
                                <a href="${referencia.url}" target="_blank" rel="noopener noreferrer"
                                   class="text-blue-700 underline hover:text-blue-900">
                                    ${referencia.titulo}
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
    contenedor.querySelectorAll('.video-preview').forEach(boton => {
        boton.addEventListener('click', () => {
            const videoId = boton.dataset.videoId;
            const videoTitle = boton.dataset.videoTitle;

            if (!videoId || !videoTitle) {
                console.error("Faltan los datos necesarios para reproducir el video.");
                return;
            }

            const reproductor = document.createElement('iframe');
            reproductor.className = "w-full max-w-3xl rounded-xl border border-slate-200";
            reproductor.style.aspectRatio = "16 / 9";
            reproductor.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&playsinline=1`;
            reproductor.title = videoTitle;
            reproductor.loading = "lazy";
            reproductor.referrerPolicy = "strict-origin-when-cross-origin";
            reproductor.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            reproductor.allowFullscreen = true;
            boton.replaceWith(reproductor);
        });
    });
    activarImagenesAmpliables(contenedor);
    navegarA('capsula');

    // Reinicia la entrada en cada apertura, incluso para la misma cápsula.
    contenedor.classList.remove('capsula-entrada');
    void contenedor.offsetWidth;
    contenedor.classList.add('capsula-entrada');
}

function evaluarRespuesta(esCorrecta, idCapsula, indicePregunta = 0) {
    const cap = listaCapsulas.find(item => item.id === idCapsula);

    if (!cap) {
        console.error("No se encontró la cápsula con ID:", idCapsula);
        return;
    }

    const pregunta = cap.quiz?.[indicePregunta] ?? cap;
    const notificacion = document.getElementById(`retroalimentacion-${idCapsula}-${indicePregunta}`);

    if (!notificacion) {
        console.error("No se encontró el espacio de retroalimentación.");
        return;
    }

    const mensaje = esCorrecta
        ? (pregunta.retroalimentacionCorrecta ??
            cap.retroalimentacionCorrecta ??
            "¡Respuesta correcta! Has completado el ejercicio con éxito.")
        : (pregunta.retroalimentacionIncorrecta ??
            cap.retroalimentacionIncorrecta ??
            "Respuesta incorrecta. Revisa el contenido e inténtalo de nuevo.");

    const titulo = document.createElement("p");
    titulo.className = "font-bold mb-1";
    titulo.textContent = esCorrecta ? "✓ ¡Correcto!" : "✕ Inténtalo de nuevo";

    const descripcion = document.createElement("p");
    descripcion.textContent = mensaje;

    notificacion.className = esCorrecta
        ? "rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900 shadow-sm"
        : "rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-900 shadow-sm";

    notificacion.replaceChildren(titulo, descripcion);
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
        cerrarMenuMobil();
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
const visorImagen = document.getElementById('visorImagen');
const imagenAmpliada = document.getElementById('imagenAmpliada');

function abrirImagenAmpliada(imagen) {
    imagenAmpliada.src = imagen.currentSrc || imagen.src;
    imagenAmpliada.alt = imagen.alt || 'Imagen de la cápsula';

    imagen.focus();
    visorImagen.showModal();
    document.body.classList.add('visor-abierto');
}

function activarImagenesAmpliables(contenedor) {
    contenedor.querySelectorAll('img:not(.video-thumbnail)').forEach(imagen => {
        imagen.classList.add('imagen-ampliable');
        imagen.tabIndex = 0;
        imagen.setAttribute('role', 'button');
        imagen.setAttribute(
            'aria-label',
            `Ampliar: ${imagen.alt || 'imagen de la cápsula'}`
        );

        imagen.addEventListener('click', () => {
            abrirImagenAmpliada(imagen);
        });

        imagen.addEventListener('keydown', evento => {
            if (evento.key === 'Enter' || evento.key === ' ') {
                evento.preventDefault();
                abrirImagenAmpliada(imagen);
            }
        });
    });
}

visorImagen.addEventListener('close', () => {
    document.body.classList.remove('visor-abierto');
});
