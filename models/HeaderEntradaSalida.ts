/**
 * Model del header pricipal, donde estan las principales caracteristicas de la orden de compra, o del movimiento dicho
 *
 */
export type HeaderApiOC = {
  //Se muestra informacion de la Orden de Compra, y los articulos
  ajusteOrdenCompra: number,
  asignacionID: number,
  cve_ObjetoGasto: string,
  cve_Proyecto: string,
  cve_ordenCompra: string,
  cve_requisicion: string,
  fecha: Date | null | undefined,
  fecha_entrega: Date,
  objetoGasto: string,
  proveedor: string,
  proyecto: string,
  tipoAdquisicion: string,
  total: number,
  traspasos: string,
  alamacenID: number,
  articulos: Array<Articulo>,
  articulosSalida: Array<ArticuloSalida> | null,
  articulosEntrada: Array<ArticuloEntrada>
}
export type Articulo = {
  asignacionID: number | null | undefined,
  cve_ordenCompra: string | null | undefined,
  articuloID: number,
  id_Unidad_Presupuestal: number | null | undefined,
  adquisicionID: number | undefined | null,
  proveedorID: number | null | undefined,
  descripcion: string | null | undefined,
  descripcionAdicional: string | null | undefined,
  cantidadTotal: number,
  cantidadEntradas: number,
  cantidadSalidas: number | null | undefined,
  cantidadTraspasos: number | null | undefined,
  precioUnitario: number | null | undefined,
  tasaIVA: number | null | undefined,
  iva: number | null | undefined,
  precioNeto: number,
  unidadMedida: string | null | undefined
}
export type ArticuloSalida = {
  adquisicionID: number | null,
  almacenID: null | number,
  articuloID: number,
  asignacionID: number,
  cantidadPendiente: number,
  cantidadSalidas: number | undefined
  cantidadTotal: number,
  cve_Unidad_Presupuestal: string | null,
  cve_ordenCompra: string | null
  cve_requisicion: string | null
  descripcion: string | null,
  descripcionAdicional: string | null
  eFiscal: number | null,
  entradaID: number | null,
  fechaCaducidad: Date | null | undefined,
  id_Unidad_Presupuestal: number | null,
  iva: number | null,
  lote: string | undefined,
  loteID: number | null,
  loteOperGob: string | null,
  precioNeto: number | null,
  precioUnitario: number | null,
  proveedorID: number | null,
  tasaIVA: number | null,
  unidadMedida: string | null,
}
export type ArticuloEntrada = {
  adquisicionID: number,
  articuloID: number,
  asignacionID: number,
  cantidadEntradas: number,
  cantidadPendiente: number,
  cantidadSalidas: number
  cantidadTotal: number,
  cantidadTraspasos: number,
  cve_ordenCompra: string,
  descripcion: string,
  descripcionAdicional: string,
  id_Unidad_Presupuestal: number,
  iva: number,
  precioNeto: number,
  precioUnitario: number,
  proveedorID: number,
  tasaIVA: number,
  unidadMedida: number
}