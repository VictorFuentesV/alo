import React from "react";
import '../css/Eduardo.css'
import { ButtonA } from "../components/ButtonA";

export function Eduardo() {
    return(
        <div className="tw-bg-indigo-950 tw-p-5 tw-mt-10 tw-rounded-md tw-border-solid tw-border-fuchsia-500 tw-border">
            <div className="titulo">
                <h1>Hola, mi nombre es Eduardo Torres y tengo 22 años.</h1>
            </div>
            <div className="contenido-pasatiempos">
                <div className="tw-flex tw-justify-center tw-gap-4">
                    <h2 className="tw-underline tw-underline-offset-3 tw-decoration-fuchsia-500 tw-text-white">Pasatiempos</h2>
                    <ButtonA />
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

/*
<button className="tw-border-fuchsia-500 tw-rounded-xl tw-bg-white"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 9l6 6l6 -6" />
                            </svg>
                    </button>

<button className="tw-border-fuchsia-500 tw-rounded-xl tw-bg-indigo-950" onClick={() => setShow(!show)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 9l6 6l6 -6" />
                            </svg>
                    </button>

<div class="subheader">
        <h1>Hola, mi nombre es Eduardo Torres y tengo 22 años.</h1>
    </div>
    <main>   
        <h2 class="title">Pasatiempos</h2>
        <div class="space card-grid-2">
            <div class="card-1 card-shadow">
                <div class="card-body">
                    Aprender información completamente inútil como <a href="https://www.gaussianos.com/el-problema-de-los-cuatro-cuatros/">saber calcular cualquier número utilizando cuatro 4s</a>
                    o incluso memorizar 105 dígitos de pi en una hora.
                </div>
            </div>

            <div class="card-1 card-shadow">
                <div class="card-body">
                    Theorycrafting en juegos, especialmente gachas.
                    El theorycrafting consiste en el estudio de las mecánicas de un juego, incluyendo mecánicas ocultas e interacciones específicas entre personajes y el entorno.
                </div>
            </div>
                
            <div class="card-1 card-shadow">
                <div class="card-body">
                    Solía hacer natación y running con un grupo de triatlón
                    pero ahora hago running más que nada.
                </div>
            </div>

            <div class="card-1 card-shadow">
                <div class="card-body">
                    Me gusta coleccionar basura para luego utilizarla para construir productos de uso diario, como recipientes o muebles.
                </div>
            </div>
            
            <div class="card-1 card-shadow">
                <div class="card-body">
                    Y uh supongo que va de más incluir la programación como hobby.
                </div>
            </div>
        </div>
    </main>
    <hr class="space">
    <footer class="contact">
        <div class="space card-1 card-shadow">
            <div class="card-body">
                <h4>Información de contacto:</h4>
                <p>Correo: eduatorres@alumnos.uai.cl</p>
            </div>
        </div>
    </footer>
*/