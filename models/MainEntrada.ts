export type MainEntrada = {
  ordenesCompra: Array<number>;
  articulos: Array<ArticuloMaster>;
  entradaID: number;
  almacenID: number | null | undefined;
  fechaCreacion: Date | undefined;
  fechaModificacion: Date | undefined;
  usuario_creacion: string | undefined;
  usuario_modificacion: string | undefined;
  observaciones: string;
  kardex: null | {
    cve_usuario: string;
    entradaID: number;
    fechaAplicacion: Date | string;
    fechaCreacion: Date|undefined;
    kardexID: number;
    salidaID: number;
    tipoMovimiento: string;
  };
  cancelacion: null;
  historial: Array<Historia> | null;
  firma_entrega: string | null;
  firma_recibe: string | undefined;
  referencia: null;
  traspasoID: number;
  fotografias: string[]; // Puedes ajustar este tipo según la estructura real
  informacionGPS:  string | null;
};
export type ArticuloMaster = {
  entradaID: number;
  asignacionID: number;
  articuloID: number;
  id_Unidad_Presupuestal: number;
  adquisicionID: number;
  proveedorID: number;
  cantidad: number;
  loteID: number | null | undefined;
  lote: string | undefined;
  loteOperGob: null | number | string | undefined;
  fechaCaducidad: null | Date;
};

//Datos del historial del registro
type Historia = {
  cve_usuario: string;
  descripcion: string;
  fecha: Date | string;
  historialID: number;
  movimientoID: number;
};