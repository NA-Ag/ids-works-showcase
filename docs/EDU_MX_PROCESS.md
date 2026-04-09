# Proceso de Registro de Dominio .EDU.MX

Para registrar un dominio **.edu.mx** a través de **Akky** (el registrador principal acreditado por Registry .MX), es necesario cumplir con un proceso riguroso, ya que esta es una categoría "cerrada" exclusiva para instituciones educativas en México.

Este documento sirve como guía o Standard Operating Procedure (SOP) para que IDS Works gestione este trámite para los colegios, o para entregarlo al departamento administrativo del colegio si ellos deciden hacerlo.

## 1. Requisitos de Elegibilidad
Solo pueden solicitar este dominio:
*   Instituciones educativas con validez oficial (SEP o UNAM).
*   Centros de investigación registrados ante el CONACYT.
*   Escuelas incorporadas a la Secretaría de Educación Pública.

## 2. Documentación Necesaria (Digitalizada)
El colegio debe proporcionar los siguientes documentos en formato PDF o imagen legible:

1.  **Clave de Centro de Trabajo (CCT):** El requisito principal para acreditar que la institución es oficial.
2.  **Copia del Registro ante la SEP (RVOE):** O copia de la publicación en el Diario Oficial de la Federación que otorgue la validez oficial.
3.  **Identificación Oficial:** Copia por ambos lados (INE o Pasaporte) del Director o Representante Legal de la institución.
4.  **Nombramiento:** Si el nombre del Director actual no aparece en el registro original de la SEP, se debe adjuntar el documento oficial que lo acredite como el representante legal o director actual.
5.  **Carta Solicitud:** Una carta en hoja membretada de la institución, firmada de forma autógrafa por el Director, donde se solicite formalmente el dominio (ej. `colegioids.edu.mx`) y se explique brevemente el uso que se le dará (ej. "Portal institucional y correos de alumnos").

## 3. Proceso Paso a Paso en Akky

### Paso 1: Búsqueda y "Compra"
1.  Ingresa a [Akky.mx](https://www.akky.mx).
2.  Busca el nombre deseado con la terminación `.edu.mx`. El nombre **debe estar directamente relacionado con la razón social o nombre oficial de la escuela**. No se permiten nombres genéricos.
3.  Añádelo al carrito y completa el proceso de registro creando una cuenta (idealmente a nombre del colegio). El costo suele ser gratuito o tener una tarifa administrativa muy baja.

### Paso 2: Estado "Pendiente" y Envío Digital
1.  Al finalizar, el dominio quedará en estado "Pendiente de Documentación".
2.  Envía toda la documentación digitalizada (del punto 2) al correo: **ayuda@akky.mx** o **dominioscerrados@akky.mx**, indicando el número de solicitud o nombre de usuario.

### Paso 3: Revisión y Envío Físico (Si aplica)
1.  Akky revisará los documentos digitales.
2.  Si todo es correcto y Akky lo requiere (políticas recientes pueden variar), te pedirán enviar los originales o copias certificadas por mensajería postal a sus oficinas en Monterrey (Av. Eugenio Garza Sada 427, Col. Altavista). *Siempre espera la confirmación por correo antes de enviar papeles físicos.*

### Paso 4: Activación y Configuración DNS
1.  Una vez que Registry .MX valide los documentos, el dominio será activado en el panel de Akky.
2.  En este punto, IDS Works entrará al panel de Akky para configurar los **Nameservers** o los **Registros A/CNAME** para apuntarlos a Vercel/Netlify (donde vivirá la página web) y los registros **MX/TXT** para conectarlos con Microsoft 365 (correos).