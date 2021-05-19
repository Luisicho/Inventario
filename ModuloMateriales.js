class  moduloMateriales   {
    constructor ( codigo ,  cantidad ,  descripcion ,  caracteristicas ,  marca ,  area ,  tipo ,  peso ,  caducidad )  {
            esto . _codigo  =  codigo
            esto . _cantidad  =  cantidad
            esto . _descripcion  =  descripcion
            esto . _caracteristicas  =  caracteristicas
            esto . _marca  =  marca
            esto . _area  =  area
            esto . _tipo  =  tipo
            esto . _peso  =  peso
            esto . _caducidad  =  caducidad
        }
        // Codigo
    set  scodigo ( c )  {
        esto . _codigo  =  c
    }

    obtener  gcodigo ( )  {
            devuelve  esto . _codigo
        }
        // Cantidad prueba 
    set  scantidad ( c )  {
        esto . _cantidad  =  c
    }

    obtener  gcantidad ( )  {
            devuelve  esto . _cantidad
        }
        // Descripcion
    set  sdescripcion ( c )  {
        esto . _descripcion  =  c
    }

    obtener  gdescripcion ( )  {
            devuelve  esto . _descripcion
        }
        // Caracteristicas
    set  scaracteristicas ( c )  {
        esto . _caracteristicas  =  c
    }

    obtener  gcaracteristicas ( )  {
            devuelve  esto . _caracteristicas
        }
        // marca
    set  smarca ( c )  {
        esto . _marca  =  c
    }

    obtener  gmarca ( )  {
            devuelve  esto . _marca
        }
        // area
    establecer  sarea ( c )  {
        esto . _area  =  c
    }

    obtener  garea ( )  {
            devuelve  esto . _area
        }
        // Tipo
    set  stipo ( c )  {
        esto . _tipo  =  c
    }

    obtener  gtipo ( )  {
            devuelve  esto . _tipo
        }
        // Capaciad
    set  speso ( c )  {
        esto . _peso  =  c
    }

    obtener  gpeso ( )  {
            devuelve  esto . _peso
        }
        // caducidadi
    set  scaducidad ( c )  {
        esto . _caducidad  =  c
    }

    obtener  gcaducidad ( )  {
        devuelve  esto . _caducidad
    }

    imprimir ( )  {
        consola . log ( "Codigo:"  +  this . _codigo  +  "Cantidad:"  +  this . _cantidad  +  "Descripcion:"  +  this . descripcion  +
            "Caracteristicas:"  +  esto . _caracteristicas  +  "marca:"  +  esto . _descripcion  +  "area:"  +  esto . _area  +
            "Tipo:"  +  esto . _tipo  +  "peso:"  +  esto . _peso  +  "caducidad:"  +  esto . _caducidad )
    }
}
let  objetoEquipo  =  new  moduloEquipo ( '1111' ,  100 ,  'Mortero' ,  'secado rapido' ,  'Azul' ,  'Enjarres' ,  'sr' ,  50 ,  2 ) ;
objetoEquipo . _caducidad  =  10
objetoEquipo . imprimir ( )