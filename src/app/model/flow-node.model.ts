export class FlowNode  {

    /**
     * idNode: nodo que ha devuelto el motor y que identifica la ruta hcargar por el cliente
     * data: datos que necesita la ruta que cargara el componente solicitado
     */
    constructor(
      public idNode: string,
      public data?: any
    ) {}
}
