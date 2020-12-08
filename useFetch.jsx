import { useState, useEffect, useRef } from 'react';



export const UseFetch = (url) => {

    const isMounted = useRef(true) //Le damos un valor al useRef que vamos a usar en el setTimeOut
    const [state, setstate] = useState({ data: null, loading: true, error: null });


    useEffect(() => {

        return () => {
            isMounted.current = false; //Al no tener nada antes del return esto lo que hace es ejecutarse cuando la pàgina cambia, o se sale de ella, no como si tuviese cuerpo que se ejecutaria al cargar la pagina
        }

    }, [])



    useEffect(() => {

        setstate({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {


                setTimeout(() => {

                    if (isMounted.current) { //Aqui le decimos que siempre y cuando isMounted sea true, entonces se ejecutara el setState

                        setstate({
                            loading: false,
                            error: null,
                            data
                        })
                    } else {
                        console.log('SetState no se llamo');
                    }
                }, 3000) //Le damos 4seg para que se ejecute esto. 
            })

    }, [url])

    return state;


}
