
  export type Movimientos = {
  lista: ListaMovimiento[];
  numeroResultados: number;
  numeroPaginas: number;
  paginaActual: number;
}

export type ListaMovimiento ={
  almacenID: number;
  movimientoID: number;
  ordenesCompra: string;
  tipoMovimiento: string;
  tipoMovimiento_texto: string;
  fechaCreacion: string;
  fechaAplicacion: null | string;
  observaciones: string;
  status: string;
  total: number;
  referencia: null;
  traspasoID: number;
}

export type ArgumentsMovimientos = {
AlmacenID: number,
AsignacionID: number,
//MovimientoID: number,//Se quita
observaciones: string,
//orderBy:"MovimientoID desc",//se quita
pagina:number,
//referencia:string, ///Esta la eliminaremos
status:string|"NUEVO"|"APLICADO",
tipoMovimiento:string|"S"|"E",

}
/*
AlmacenID=15
&AsignacionID=
&MovimientoID=-1
&observaciones=
&orderBy=MovimientoID desc
&pagina=1
&referencia= ///Esta la eliminaremos
&status=
&tipoMovimiento=
*/