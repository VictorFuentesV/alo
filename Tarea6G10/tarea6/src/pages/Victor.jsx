import React from "react";
import '../css/styles.css'

export function Victor() {
    return(
        <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tarea4</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../css/styles.css" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <div className="contenedor">
          <header>
            <h1 className="title">Bienvenidos a mi página</h1>
          </header>
          <main>
            <div className="txt__fotos">
              <h2 className="title">Fotos de mis pasatiempos</h2>
            </div>
            <section>
              <img src="imagenes/fiesta.jpg" alt="fiesta" />
              <img src="imagenes/gimnasio.jpg" alt="gimnasio" />
              <img src="imagenes/juegos.jpg" alt="juegos" />
              <img src="imagenes/perritos.jpg" alt="perritos" />
              <img src="imagenes/programar.jpg" alt="programar" />
              <img src="imagenes/viaje.jpg" alt="viaje" />
            </section>
            <div className="txt__fotos">
              <h2>Cosas sobre Mi</h2>
            </div>
            <div className="card">
              <div className="card__perfil">
                <div className="card__nombre">
                  <img className="card__img" src="imagenes/estudio.jpg" alt="" />
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
                  <img className="card__img" src="imagenes/ejercitando.jpg" alt="" />
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
                  <img className="card__img" src="imagenes/videojuegos.jpg" alt="" />
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
          </main>
          <footer className="content shadow">
            <address>
              Nombre:Víctor Hugo Fuentes Villarreal <br />
              Correo contacto: vicfuentes@alumnos.uai.cl
            </address>
          </footer>
        </div>
      </>
      
    )
}