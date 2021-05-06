# TRUR
Sitio web de TRUR, Producciones Audiovisuales

Este sitio Web esta siendo realizado como proyecto Final de Desarrollo Web en CoderHouse, y esta siendo paulatinamente actualizado con una nueva estetica y contenido.

### --Update 1.4 (beta)--
Cambios en la versión 1.4:

- Añadida compatibilidad de diseño al resto de las paginas.
- Añadida nueva animacion de `fade-in` en el tag `main` de todas las paginas para una transición mas fluida.
- Ajustadas, y mejoradas las imagenes de `main__upper` de cada sección.
- Ajustado el tamaño de `main__upper` para coincidir con el tamaño de pantallas 1080p.
- Se agrega link interno en para traslado rapido entre la presentación de la página y el contenido.
- Arreglada la galeria para ser funcional en el nuevo diseño.
- Modificado el color del Modal de la galeria.
- Modificado color y presentación del formulario de contacto.
- Se modifica `.active` en la barra de navegación:
    - Este cambio ademas incluye mayor accesibilidad al cambiar en todas las paginas el atributo `aria-current`.
- Se elimina el `dropdown` del `nav-bar` debido a que no tiene relevancia semántica.
- Se modifica tabla en `services.html` a una estetica mas apropiada.
- El sitio, sigue SIN ser responsive.
- Se cambia numeración de versionado.

#### --Update 1.3 (beta)--
Cambios de la versión 1.3:

- Aplicado nuevo diseño:
    - Aplicado diseño de color oscuro, mejora de contraste general.
    - `index.html` llegando a su diseño final.
    - Cambio `.navbar-light` de Bootstrap a `.navbar-dark`. 
    - `.nBCard` mejoradas, estructura y forma.
    - Cambio de imagen de logo.
    - Añadidos botón de acceso rapido sobre video de `.main__header`.
    - Añadida descripción del sitio con botón de acceso rapido bajo `.main__lower__heading`.
    - Añadida animación en demanda de las `.nBCard` mediante JS
        - Añadido archivo *animationsTrigger.js*.
        - Uso de Intersection Observer API.
    - Aplicados bordes a `<video>` en `.nBCard`.
    - El sitio ya NO es responsive por el momento.
    

#### --Update 1.2 (alpha)--
Cambios de la versión 1.2:
- Se mejora la estructura del grid general (en proceso).
- Ajuste de `.contentHeader`, (el contenedor no estaba siendo correctamente visualizado en todos los navegadores, y no tenia la totalidad del alto especificado por `grid-area`)
- Ajuste de `.NBCard`, (los contenedores poseen texto visible nuevamente, la ubicación de los elementos sera corregida a futuro)
- Se agrega `.main__lower__heading` como contenedor para futuro contenido en index.html.
- Se corrije uno de los colores de la animación de fondo debido al poco contraste.


#### --Update 1.1 (alpha)--

Se prepara proyecto para version 2.0. Cambios realizados en estilos e index:

- Cambio de estructura (aun en adaptación) del grid general.
- Ajuste del video de header (aun en pruebas)
- Cambio en el fondo (realizada animación)
- Se añade icono para ser representado en los tabs de los navegadores.

#### --README: Versión 1.00 (RELEASE)--

La primer version del sitio completo corresponde a la version 1.00 la cual incluye:

- Sitio funcional desde el commit "Instancia Inicial de Website TRUR"
- Este commit corresponde a la **4ta entrega del proyecto final** :blush: . No debe contarse como entrega las versiones posteriores al 29/04/21 hasta nuevo aviso.


