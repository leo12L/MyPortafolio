/** Constantes globales del sitio. */

export const GITHUB_URL = 'https://github.com/leo12L'
export const EMAIL = 'leonardomunozcavazos@gmail.com'

/**
 * Redactor de Gmail en el navegador. Se usa en vez de `mailto:` porque este
 * último no hace nada si el visitante no tiene un cliente de correo
 * predeterminado en su sistema.
 */
export const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`

/**
 * El giro/color de la tarjeta del hero ocurre en la primera parte del scroll;
 * el resto del recorrido se usa para que termine de bajar hasta su posición final.
 */
export const LIMITE_TARJETA = 0.6
