document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE LOS POP-UPS (MODALES) ---
    // Aquí está todo el contenido que pediste, en lenguaje sencillo.
    const datosModal = {
        'regla-contenido': {
            titulo: '🎬 Regla 1: Contenido Atractivo',
            texto: 'Es la regla de oro. Necesitas una mezcla de éxitos globales (como Stranger Things) para atraer gente nueva, y contenido local (como Pálpito en Colombia) que haga que la gente sienta una conexión cultural y se quede.'
        },
        'regla-adaptacion': {
            titulo: '🌎 Regla 2: Adaptación Local',
            texto: 'No puedes tratar a toda LatAm como un solo país. Debes "actuar local": adaptar los precios a la economía, ofrecer buenos doblajes al español "neutro" o local, y entender qué chistes o dramas funcionan en cada región.'
        },
        'regla-precios': {
            titulo: '💰 Regla 3: Modelo de Precios Flexible',
            texto: 'Latinoamérica es muy sensible al precio. Por eso ves planes baratos con anuncios, planes solo para celular (más económicos) y "Bundles", que son paquetes donde pagas Netflix o Disney+ junto con tu factura de internet o celular (Claro, Movistar, etc.).'
        },
        'regla-innovacion': {
            titulo: '⚡ Regla 4: Innovación Tecnológica',
            texto: 'La app no puede fallar. La "UX" (Experiencia de Usuario) debe ser súper fácil, que la app se sienta rápida. Los "Algoritmos" (el sistema que adivina qué te gusta) son claves. Y en LatAm, funciones como "descargar para ver sin datos" son vitales por la inestabilidad del internet.'
        },
        'agente-plataformas': {
            titulo: '📺 Jugador 1: Las Plataformas',
            texto: 'Son los jugadores principales, los dueños del "tablero". Son los que compiten directamente por nosotros (los suscriptores). Ejemplos: Netflix, Disney+, Max, Amazon Prime Video, y también regionales como Vix o Claro Video.'
        },
        'agente-productoras': {
            titulo: '🎥 Jugador 2: Las Productoras',
            texto: 'Son los "creadores" o "proveedores". Hacen las películas y series. A veces, la plataforma (como Netflix) es su propia productora ("Netflix Originals"), pero muchas veces le compran el contenido a productoras externas.'
        },
        'agente-telecos': {
            titulo: '📡 Jugador 3: Las Telecomunicaciones',
            texto: '¡Un jugador clave en LatAm! Son las empresas como Claro, Movistar, Tigo, etc. Ellas controlan el acceso a internet (los "tubos" por donde llega el streaming) y, lo más importante, ¡la facturación! Ser su aliado (en un "bundle") te da acceso a millones de clientes de forma fácil.'
        },
        'agente-reguladores': {
            titulo: '🏛️ Jugador 4: Los Reguladores',
            texto: 'Son los gobiernos. Ellos pueden cambiar las reglas del juego. Por ejemplo, creando un impuesto nuevo (como el IVA a servicios digitales) o exigiendo una "cuota de pantalla", que obliga a las plataformas a producir un porcentaje de contenido en el país.'
        },
        'posicion-dominante': {
            titulo: '👑 Posición Dominante',
            texto: 'Son los que mandan. Tienen más capital (dinero, contenido, prestigio). Netflix es el líder histórico por llegar primero. Disney+ tiene un catálogo cultural gigante (Marvel, Star Wars). Max tiene el prestigio de HBO. Amazon tiene el respaldo de la tienda online más grande del mundo.'
        },
        // ---- TEXTO ACTUALIZADO ----
        'posicion-subordinada': {
            titulo: '♟️ Posición Subordinada',
            texto: '¡Importante! Sus compañías madre (Apple, Paramount) tienen muchísimo dinero. Pero son "subordinadas" <strong>en el juego del streaming</strong> por razones diferentes:<br><br>1. <strong>Catálogo de Nicho:</strong> Apple TV+ invierte en <i>poca</i> cantidad pero (a veces) alta calidad. No compite por volumen de contenido.<br>2. <strong>Menor Cuota de Mercado:</strong> Simplemente, tienen menos suscriptores en LatAm que los 4 gigantes.<br>3. <strong>Inversión Específica:</strong> Aunque Apple es rica, la <i>inversión dedicada</i> a su catálogo de streaming ha sido (históricamente) menor que la de Netflix o Disney.'
        },
        'habitus-definicion': {
            titulo: '🧠 ¿Qué es el Habitus?',
            texto: 'Es el "olfato" o "sentido del juego" que tienen los ejecutivos. No está escrito en un manual, se aprende con la experiencia. Es la mentalidad que les hace "intuir" qué decisión tomar, cómo reaccionar a la competencia, y qué serie será un éxito. Hoy, ese habitus exige ser "data-driven" (decidir basado en datos).'
        },
        'habitus-fuentes': {
            titulo: '🎓 ¿De dónde sale el Habitus?',
            texto: 'Se forma de varias partes: de la experiencia previa (ej. venir de la TV tradicional), de la imitación (copiar lo que le funciona a Netflix, como los planes con anuncios), de la formación (Maestrías en Negocios o Marketing) y de la cultura de la propia empresa.'
        },
        'habitus-doxa': {
            titulo: '💡 ¿Qué es la "Doxa"?',
            texto: 'Es una creencia tan fuerte dentro del "campo" (del juego) que nadie la cuestiona. Se vuelve una verdad absoluta. La doxa del streaming es: "El streaming es el futuro inevitable del entretenimiento y es superior a la TV tradicional". Esta creencia justifica las inversiones millonarias.'
        },
        'capital-economico': {
            titulo: '💰 1. Capital Económico',
            texto: 'El más importante: el DINERO. Es la plata para producir series carísimas (como The Crown), para hacer marketing, para comprar estudios enteros (Amazon comprando MGM) y para aguantar pérdidas durante años hasta dominar el mercado.'
        },
        'capital-cultural': {
            titulo: '🎬 2. Capital Cultural',
            texto: 'Es el "contenido". Es el imán que nos atrae. Puede ser un catálogo gigante (todas las películas de Marvel en Disney+) o la capacidad de crear éxitos nuevos y de prestigio (como las series de HBO en Max). También es el "Know-How" o "saber-hacer" cómo crear contenido que conecte con la gente.'
        },
        'capital-tecnologico': {
            titulo: '🤖 3. Capital Tecnológico',
            texto: 'Es la infraestructura digital. Incluye que la app sea rápida y no se trabe (buena UX), los servidores potentes, y los algoritmos de recomendación (el "Big Data" o análisis de macrodatos) que adivinan qué quieres ver a continuación.'
        },
        'capital-social': {
            titulo: '🤝 4. Capital Social',
            texto: 'Son los "contactos" y "amigos". Es la red de alianzas. En LatAm, esto es crucial. La alianza de Disney+ con Mercado Libre para regalar suscripciones fue puro capital social. También incluye tener buena relación con los mejores directores y actores locales.'
        },
        'capital-simbolico': {
            titulo: '👑 5. Capital Simbólico (La Meta)',
            texto: 'Es el PRESTIGIO. Es la reputación de la marca. Es la forma en que todos los demás capitales son reconocidos. Es la meta final. Por ejemplo, que la gente diga "vamos a netflixear" (la marca se vuelve un verbo) o que HBO sea sinónimo de "calidad".'
        },
        'prestigio-premios': {
            titulo: '🏆 Prestigio por Premios',
            texto: 'Cuando Netflix gana un Oscar por "Roma", le dice al mundo: "No solo paso películas, soy un estudio de cine serio". Los premios (Oscars, Emmys) legitiman a la plataforma como un creador cultural de alta calidad.'
        },
        'prestigio-innovacion': {
            titulo: '💡 Prestigio por Innovación',
            texto: 'Ser el primero da prestigio. Netflix ganó mucho respeto por inventar el "Binge-Watching" (lanzar toda la temporada de golpe con "House of Cards"). Se ganaron la imagen de ser "visionarios" que cambiaron cómo vemos TV.'
        },
        'prestigio-cultura': {
            titulo: '🗣️ Prestigio por Cultura Popular',
            texto: 'Ganas prestigio cuando te vuelves parte de la conversación diaria. Cuando "Baby Yoda" (de Disney+) se vuelve un fenómeno viral, o cuando todos hablan de "El Juego del Calamar", esa plataforma gana relevancia y legitimidad.'
        },
        'prestigio-marca': {
            titulo: '💎 Prestigio por Imagen de Marca',
            texto: 'Son los valores que asociamos a la marca. Disney = Familia, Magia. HBO/Max = Calidad Premium, Adulto, Sofisfisticado. Netflix = Variedad, Tendencia. Este prestigio intangible es un activo súper poderoso.'
        },
        'conv-eco-cult': {
            titulo: '💰Económico ➔ 🎬Cultural',
            texto: 'Es la conversión más obvia: Usas DINERO (Económico) para crear o comprar CONTENIDO (Cultural). Ejemplo: Amazon usa millones de dólares para comprar el estudio MGM y todo su catálogo de películas.'
        },
        'conv-cult-eco': {
            titulo: '🎬Cultural ➔ 💰Económico',
            texto: 'Es monetizar tu contenido. Tienes un éxito gigante como "Stranger Things" (Cultural) y eso se convierte directamente en millones de nuevos suscriptores y retención de usuarios (Económico).'
        },
        'conv-soc-eco': {
            titulo: '🤝Social ➔ 💰Económico',
            texto: 'Usas tus ALIANZAS (Social) para conseguir clientes (Económico). Ejemplo: La alianza de Disney+ con Mercado Libre. Disney usó la red de clientes de Mercado Libre para ganar millones de suscriptores rápido.'
        },
        'conv-sim-eco': {
            titulo: '👑Simbólico ➔ 💰Económico',
            texto: 'Aquí es donde el prestigio se vuelve rentable. La reputación de "calidad premium" de Max/HBO (Simbólico) les permite subir sus precios, y la gente sigue pagando porque asocia la marca con valor (Económico).'
        },
    };

    // --- 2. SELECTORES DE ELEMENTOS ---
    const diapositivas = document.querySelectorAll('.diapositiva');
    const btnSiguiente = document.getElementById('btn-siguiente');
    const btnAnterior = document.getElementById('btn-anterior');
    const contadorSlide = document.getElementById('contador-slide');
    const totalSlides = diapositivas.length;

    // Elementos del Menú
    const btnMenu = document.getElementById('btn-menu');
    const menuNav = document.getElementById('menu-navegacion');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuLinks = document.querySelectorAll('#menu-navegacion li[data-goto-slide]');

    // Elementos del Modal (Pop-up)
    const modalContainer = document.getElementById('modal-container');
    const modalBtnCerrar = document.getElementById('modal-btn-cerrar');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalTexto = document.getElementById('modal-texto'); // Ahora es un DIV
    const modalTriggers = document.querySelectorAll('[data-modal-id]');

    let slideActual = 0; // El índice empieza en 0

    // --- 3. FUNCIONES DE NAVEGACIÓN DE SLIDES ---
    function mostrarDiapositiva(index) {
        // Oculta la diapositiva actual
        if (diapositivas[slideActual]) { 
            diapositivas[slideActual].classList.remove('activa');
        }
        
        // Actualiza el índice
        slideActual = parseInt(index);
        
        // Muestra la nueva diapositiva
        if (diapositivas[slideActual]) { 
            diapositivas[slideActual].classList.add('activa');
        }
        
        // Actualiza el contador
        contadorSlide.textContent = `${slideActual + 1} / ${totalSlides}`;
        
        // Deshabilita/habilita botones en los extremos
        btnAnterior.disabled = (slideActual === 0);
        btnSiguiente.disabled = (slideActual === totalSlides - 1);
    }

    btnSiguiente.addEventListener('click', () => {
        if (slideActual < totalSlides - 1) {
            mostrarDiapositiva(slideActual + 1);
        }
    });

    btnAnterior.addEventListener('click', () => {
        if (slideActual > 0) {
            mostrarDiapositiva(slideActual - 1);
        }
    });

    document.addEventListener('keydown', (e) => { // Esta es la línea que estaba mal antes
        if (e.key === 'ArrowRight') {
            btnSiguiente.click();
        } else if (e.key === 'ArrowLeft') {
            btnAnterior.click();
        }
    });

    // --- 4. FUNCIONES DEL MENÚ (ÍNDICE) ---
    function abrirMenu() {
        menuNav.classList.add('menu-visible');
        menuOverlay.classList.add('menu-overlay-visible');
    }

    function cerrarMenu() {
        menuNav.classList.remove('menu-visible');
        menuOverlay.classList.remove('menu-overlay-visible');
    }

    btnMenu.addEventListener('click', abrirMenu);
    menuOverlay.addEventListener('click', cerrarMenu);

    // Event listeners para los links del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const slideIndex = link.getAttribute('data-goto-slide');
            // ===== ¡¡¡ERROR CORREGIDO AQUÍ!!! =====
            mostrarDiapositiva(slideIndex); // Antes decía mostrarDiapsitiva
            cerrarMenu(); // Cierra el menú después de navegar
        });
    });

    // --- 5. FUNCIONES DEL MODAL (POP-UP) ---
    function abrirModal(id) {
        const data = datosModal[id];
        if (data) {
            modalTitulo.textContent = data.titulo;
            modalTexto.innerHTML = data.texto; // Usamos .innerHTML para renderizar los <br> y <strong>
            modalContainer.classList.add('modal-visible');
        }
    }

    function cerrarModal() {
        modalContainer.classList.remove('modal-visible');
    }

    // Asigna el evento de abrir a todos los triggers
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => { 
            const modalId = trigger.getAttribute('data-modal-id');
            abrirModal(modalId);
        });
    });

    // Eventos para cerrar el modal
    modalBtnCerrar.addEventListener('click', cerrarModal);
    modalContainer.addEventListener('click', (e) => {
        // Cierra solo si se hace clic en el fondo (el contenedor), no en el contenido
        if (e.target === modalContainer) {
            cerrarModal();
        }
    });
    
    // Cerrar modal con la tecla "Escape"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('modal-visible')) {
            cerrarModal();
        }
    });

    // --- INICIALIZACIÓN ---
    mostrarDiapositiva(0); // Muestra la primera diapositiva al cargar

});