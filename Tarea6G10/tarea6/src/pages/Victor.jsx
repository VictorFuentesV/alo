import React from "react";
import fiesta from '../imagenes/fiesta.jpg';
import gimnasio from '../imagenes/gimnasio.jpg';
import juegos from '../imagenes/juegos.jpg';
import perritos from '../imagenes/perritos.jpg';
import programar from '../imagenes/programar.jpg';
import viaje from '../imagenes/viaje.jpg';
import ejercitando from '../imagenes/ejercitando.jpg';
import estudio from '../imagenes/estudio.jpg';
import videojuegos from '../imagenes/videojuegos.jpg';
import '../css/styles.css'
import { useRef } from "react";

export function Victor() {
    const ref = useRef();

    const handleClick = () => {
        const nav = ref.current;
        nav.classList.toggle('ocultar');
    };

    return(
        <>
        <div className="contenedor">
          <div className="header">
            <h1 className="titulo-v">Bienvenidos a mi página</h1>
          </div>
          <div className="tw-flex tw-flex-col tw-align-center tw-justify-center">
            <div className="txt__fotos">
              <h2 className="titulo-v">Fotos de mis pasatiempos</h2>
              <button className="tw-text-black tw-border-none tw-bg-blue-500 tw-bg-opacity-50 tw-rounded-xl" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
              <path d="M9 9l6 6m0 -6l-6 6" />
              </svg></button>
            </div>
            <div ref={ref}>
              <div className="ruleta">
                  <img src={fiesta}></img>
                  <img src={gimnasio}></img>
                  <img src={juegos}></img>
                  <img src={perritos}></img>
                  <img src={programar}></img>
                  <img src={viaje}></img>
              </div>
            </div>
            <div className="txt__fotos">
              <h2>Cosas sobre Mi</h2>
            </div>
            <div className="carta">
              <div className="card__perfil">
                <div className="card__nombre">
                  <img className="card__img" src={estudio}></img>
                  <h2>Aprender nuevas cosas</h2>
                </div>
                <hr />
                <div className="card__descripcion">
                  <p>
                    Algo que siempre me ha gustado desde chico es aprender nuevas
                    cosas, ya sean distintas formas para programar como cosas
                    interesantes de nuestro planeta.
                  </p>
                </div>
              </div>
              <div className="card__perfil">
                <div className="card__nombre">
                  <img className="card__img" src={ejercitando}></img>
                  <h2>Ir al gimnasio</h2>
                </div>
                <hr />
                <div className="card__descripcion">
                  <p>
                    Algo a lo que ultimamente le agarre mucho gusto fue el ir al
                    gimnasio, me gusta mucho la sensación después de ejercitarse y
                    busco seguir mejorando en esta área.
                  </p>
                </div>
              </div>
              <div className="card__perfil">
                <div className="card__nombre">
                  <img className="card__img" src={videojuegos}></img>
                  <h2>Jugar videojuegos</h2>
                </div>
                <hr />
                <div className="card__descripcion">
                  <p>
                    Tengo una gran apación por los videojuegos, además de eso soy muy
                    competitivo por lo que intento siempre dar lo mejor de mi en
                    muchas áreas, en esta área llegue casi a competir en algunos de
                    estos juegos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
} 