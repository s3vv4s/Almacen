export type DecodeJWT = {
   puedeCapturar: boolean,
    puedeUsarTablet: boolean,
    puedeUsarInterfazWeb: boolean,
    puedeConsultar: boolean,

    puedeRegresarMovimientos: boolean,
    puedeEliminarMovimientos: boolean,
    puedeModificarMovimientos: boolean,
};
export type TokenRefresh = {
  token: string,
    fingerprint: string
};