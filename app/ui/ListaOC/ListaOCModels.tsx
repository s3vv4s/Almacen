export type Movimientos = {
  lista: Movimiento[];
  numeroResultados: number;
  numeroPaginas: number;
  paginaActual: number;
}

export type Movimiento ={
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