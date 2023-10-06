import React, { useRef } from "react";
import '../css/Eduardo.css'

//basado en Eduardo.jsx

export function Benjamin() {
    const ref = useRef();

    const handleClick = () => {
        const nav = ref.current;
        nav.classList.toggle('pasatiempos-b');
    };

    return(
        <div className="tw-bg-indigo-950 tw-p-5 tw-mt-10 tw-rounded-md tw-border-solid tw-border-fuchsia-500 tw-border">
            <div className="titulo">
                <h1>Soy Benjamín González y tengo 21 años.</h1>
            </div>
            <div className="contenido-pasatiempos">
                <div className="tw-flex tw-justify-center tw-gap-4">
                    <h2 className="tw-underline tw-underline-offset-3 tw-decoration-fuchsia-500 tw-text-white">Mis pasatiempos</h2>
                    <button className="tw-border-fuchsia-500 tw-rounded-xl tw-bg-indigo-950" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 9l6 6l6 -6" />
                    </svg></button>
                </div>
                <div id="pasatiempos" ref={ref}>
                    <div className="pasatiempos">
                        Me gusta ver fútbol más que jugarlo, lo disfruto mucho, sobretodo el equipo del que soy hincha y la selección chilena por más que no sea fútbol de alto nivel.
                    </div>
                    <div className="pasatiempos">
                        En el colegio jugaba Rugby pero lo tuve que dejar a causa de una lesión, pero me sigue interesando el deporte.
                    </div>
                    <div className="pasatiempos">
                        Juego bastante a juegos de PC, principalmente LoL.
                    </div>
                    <div className="pasatiempos">
                        Voy seguido al gimnasio y me gusta mucho entrenar.
                    </div>
                    <div className="pasatiempos">
                        Desde que tuve mi primer ramo de programación que me interesé por estos temas.
                    </div>
                </div>
            </div>
        </div>
    )
}