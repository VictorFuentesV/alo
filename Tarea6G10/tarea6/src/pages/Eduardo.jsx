import React, { useRef } from "react";
import '../css/Eduardo.css'

export function Eduardo() {
    const ref = useRef();

    const handleClick = () => {
        const nav = ref.current;
        nav.classList.toggle('pasatiempos-b');
    };

    return(
        <div className="tw-bg-indigo-950 tw-p-5 tw-mt-10 tw-rounded-md tw-border-solid tw-border-fuchsia-500 tw-border">
            <div className="titulo">
                <h1>Hola, mi nombre es Eduardo Torres y tengo 22 años.</h1>
            </div>
            <div className="contenido-pasatiempos">
                <div className="tw-flex tw-justify-center tw-gap-4">
                    <h2 className="tw-underline tw-underline-offset-3 tw-decoration-fuchsia-500 tw-text-white">Pasatiempos</h2>
                    <button className="tw-border-fuchsia-500 tw-rounded-xl tw-bg-indigo-950" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 9l6 6l6 -6" />
                    </svg></button>
                </div>
                <div id="pasatiempos" ref={ref}>
                    <div className="pasatiempos">
                        Aprender información completamente inútil como <a href="https://www.gaussianos.com/el-problema-de-los-cuatro-cuatros/">saber calcular cualquier número utilizando cuatro 4s</a>
                        o incluso memorizar 105 dígitos de pi en una hora.
                    </div>
                    <div className="pasatiempos">
                        Theorycrafting en juegos, especialmente gachas.
                        El theorycrafting consiste en el estudio de las mecánicas de un juego, incluyendo mecánicas ocultas e interacciones específicas entre personajes y el entorno.
                    </div>
                    <div className="pasatiempos">
                        Solía hacer natación y running con un grupo de triatlón
                        pero ahora hago running más que nada.
                    </div>
                    <div className="pasatiempos">
                        Me gusta coleccionar basura para luego utilizarla para construir productos de uso diario, como recipientes o muebles.
                    </div>
                    <div className="pasatiempos">
                        Y uh supongo que va de más incluir la programación como hobby.
                    </div>
                </div>
            </div>
        </div>
    )
}