//archivo auxiliar del  SW, para la ogicade una funcion


//guardar en el cache dinamico
function actualizaCacheDinamico( dynamicCache, req, res ) {
    if( res.ok ) {
        return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone());
            
            return res.clone();
        });

    } else{
        return res;
    }
}