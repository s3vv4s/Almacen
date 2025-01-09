

export type ArgumentsMovimientos = {
AlmacenID?: number,
AsignacionID?: number|string,
MovimientoID?: number|string,//Se quita
observaciones?: string,
//orderBy:"MovimientoID desc",//se quita
pagina?:number,
referencia?:string, ///Esta la eliminaremos
status?:string|"NUEVO"|"APLICADO",
tipoMovimiento?:string|"S"|"E",

}
