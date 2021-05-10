# TRUR
Sitio web de TRUR, Producciones Audiovisuales

Este sitio Web está siendo realizado como proyecto Final de Desarrollo Web en CoderHouse, y está siendo paulatinamente actualizado con una nueva estética y contenido.

### -- Update 1.9 (RC) -- Actualización de contenido.
Cambios en la versión 1.9:

- Se trabaja en el reemplazo de Lorem, por el contenido adecuado. Ya no hay contenido placeholder.
- Se corrigen errores ortográficos.

#### -- Update 1.8 (RC)
Cambios en la versión 1.8:

- Se trabaja en el responsive del contenedor `main`
    - Se realiza adaptación del contenedor de `main__lower` en `index.html`.
- Todo el sitio es responsive y completamente funcional en resoluciones: 320, 375, 425, 768, 1024, 1440px, 4k y resoluciones intermedias.
- Se soluciona icono en tab de navegación que no se mostraba en todas las páginas.
- Se añade al diseño imágenes nuevas en `main__upper` cargadas en demanda en pantallas con resoluciones menores o iguales a 430px.

#### -- Update 1.7 (beta)--
Cambios en la versión 1.7:

- Se reemplaza el contenedor de grid general por flex.
- Se trabaja en el responsive del contenedor `footer`
    - El footer es completamente funcional en resoluciones: 320, 375, 425, 768, 1024, 1440px, 4k y resoluciones intermedias.
- Se solucionan problemas encontrados en el responsive del header. 

#### -- Update 1.6 (beta)--
Cambios en la versión 1.6:

- Se eliminan los archivos `styles.css` y `stylesGrid.css` ya que estaban en desuso de versiones previas del sitio.
- Se hacen correcciones ortográficas en el footer.
- Se crea archivo `variables.scss`
    - Se trasladan las variables del .scss principal y se organiza el contenido.
    - Se declaran variables para el uso de breakpoints.
- Se comienza a hacer responsive el sitio.
- Header reestructurado:
    - Se utilizan las capacidades de Bootstrap para hacer responsive el `nav-bar`
        - El header es completamente funcional en resoluciones: 320, 375, 425, 768, 1024, 1440px, 4k y resoluciones intermedias.
    - Se integra el logo de TRÜR dentro del `nav-bar`

#### --Update 1.5 (beta)--
Cambios en la versión 1.5:

- Rediseño del footer:
    - Nuevas grid areas en el footer.
    - Agregado copyright.
    - Agregado mapa de ubicación.
    - Cambio en la ubicación de la barra de links.
    - Agregado mini-formulario de subscripción de novedades.
    - Agregado logo y pequeña sección de descripción.
    - Eliminado degradado del background y reemplazado por fondo sólido.

#### --Update 1.4 (alpha)--
Cambios en la versión 1.4:

- Añadida compatibilidad de diseño al resto de las páginas.
- Añadida nueva animación de `fade-in` en el tag `main` de todas las paginas para una transición más fluida.
- Ajustadas, y mejoradas las imágenes de `main__upper` de cada sección.
- Ajustado el tamaño de `main__upper` para coincidir con el tamaño de pantallas 1080p.
- Se agrega link interno para traslado rápido entre la presentación de la página y el contenido.
- Arreglada la galería para ser funcional en el nuevo diseño.
- Modificado el color del Modal de la galería.
- Modificado color y presentación del formulario de contacto.
- Se modifica `.active` en la barra de navegación:
    - Este cambio además incluye mayor accesibilidad al cambiar en todas las paginas el atributo `aria-current`.
- Se elimina el `dropdown` del `nav-bar` debido a que no tiene relevancia semántica.
- Se modifica tabla en `services.html` a una estética más apropiada.
- El sitio, sigue SIN ser responsive.
- Se cambia numeración de versionado.

#### --Update 1.3 (pre-alpha)--
Cambios de la versión 1.3:

- Aplicado nuevo diseño:
    - Aplicado diseño de color oscuro, mejora de contraste general.
    - `index.html` llegando a su diseño final.
    - Cambio `.navbar-light` de Bootstrap a `.navbar-dark`. 
    - `.nBCard` mejoradas, estructura y forma.
    - Cambio de imagen de logo.
    - Añadidos botón de acceso rápido sobre video de `.main__header`.
    - Añadida descripción del sitio con botón de acceso rápido bajo `.main__lower__heading`.
    - Añadida animación en demanda de las `.nBCard` mediante JS
        - Añadido archivo *animationsTrigger.js*.
        - Uso de Intersection Observer API.
    - Aplicados bordes a `<video>` en `.nBCard`.
    - El sitio ya NO es responsive por el momento.

#### --Update 1.2 (pre-alpha)--
Cambios de la versión 1.2:
- Se mejora la estructura del grid general (en proceso).
- Ajuste de `.contentHeader`, (el contenedor no estaba siendo correctamente visualizado en todos los navegadores, y no tenía la totalidad del alto especificado por `grid-area`)
- Ajuste de `.NBCard`, (los contenedores poseen texto visible nuevamente, la ubicación de los elementos será corregida a futuro)
- Se agrega `.main__lower__heading` como contenedor para futuro contenido en index.html.
- Se corrige uno de los colores de la animación de fondo debido al poco contraste.

#### --Update 1.1 (pre-alpha)--

Se prepara proyecto para versión 2.0. Cambios realizados en estilos e index:

- Cambio de estructura (aun en adaptación) del grid general.
- Ajuste del video de header (aun en pruebas)
- Cambio en el fondo (realizada animación)
- Se añade icono para ser representado en los tabs de los navegadores.

#### --README: Versión 1.00 (RELEASE)--

La primer versión del sitio completo corresponde a la Versión 1.00 la cual incluye:

- Sitio funcional desde el commit "Instancia Inicial de Website TRUR"
- Este commit corresponde a la **4ta entrega del proyecto final** :blush: . No debe contarse como entrega las versiones posteriores al 29/04/21 hasta nuevo aviso.


