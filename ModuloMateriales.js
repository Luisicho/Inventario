class  moduloMateriales   {
    constructor ( codigo ,  cantidad ,  descripcion ,  caracteristicas ,  marca ,  area ,  tipo ,  peso ,  caducidad )  {
            this . _codigo  =  codigo
            this . _cantidad  =  cantidad
            this . _descripcion  =  descripcion
            this . _caracteristicas  =  caracteristicas
            this . _marca  =  marca
            this . _area  =  area
            this. _tipo  =  tipo
            this . _peso  =  peso
            this. _caducidad  =  caducidad
        }
        // Codigo
    set  codigo ( c )  {
        this. _codigo  =  c
    }

    get  codigo ( )  {
            return this. _codigo
        }
        // Cantidad prueba 
    set  cantidad ( c )  {
        this._cantidad  =  c
    }

    get  cantidad ( )  {
            return  this. _cantidad
    }
    // Descripcion
    set  descripcion ( c )  {
        this . _descripcion  =  c
    }

    get  descripcion ( )  {
        return this. _descripcion
        }
        // Caracteristicas
    set  caracteristicas ( c )  {
        this. _caracteristicas  =  c
    }

    get  caracteristicas ( )  {
            return this. _caracteristicas
        }
        // marca
    set  marca ( c )  {
        this. _marca  =  c
    }

    get  marca ( )  {
            return this. _marca
        }
        // area
    set area ( c )  {
        this. _area  =  c
    }

    get  area ( )  {
            return  this. _area
        }
        // Tipo
    set  tipo ( c )  {
        this. _tipo  =  c
    }

    get  tipo ( )  {
            return this. _tipo
        }
        // Capaciad
    set  peso ( c )  {
        this. _peso  =  c
    }

    get  peso ( )  {
            return  this._peso
        }
        // caducidadi
    set  caducidad ( c )  {
        this. _caducidad  =  c
    }

    get  caducidad ( )  {
        return  this. _caducidad
    }

    imprimir ()  {
        consola . log ( "Codigo:"  +  this . _codigo  +  "Cantidad:"  +  this . _cantidad  +  "Descripcion:"  +  this . descripcion  +
            "Caracteristicas:"  +  this . _caracteristicas  +  "marca:"  +  this . _descripcion  +  "area:"  +  this . _area  +
            "Tipo:"  +  this . _tipo  +  "peso:"  +  this. _peso  +  "caducidad:"  +  this._caducidad )
    }
}
let  objetoEquipo  =  new  moduloEquipo ( '1111' ,  100 ,  'Mortero' ,  'secado rapido' ,  'Azul' ,  'Enjarres' ,  'sr' ,  50 ,  2 ) ;
objetoEquipo . _caducidad  =  10
objetoEquipo . imprimir ()