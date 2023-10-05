import React from "react";
import { Container } from 'react-bootstrap';

export function Home() {
    return(
        <>
            <div class="subheader">
                Grupo 10: The bois
            </div>
            <div class="space card card-shadow">
                <div class="card-body">
                    Nuestro grupo fue formando a traves del ramo de Diseño de Software.
                    Nuestro objetivo como grupo es incursar en el área del diseño de páginas, de manera que esto nos ayude en el día a día de nuestro futuro como profesionales.
                </div>
            </div>

            <div class="space card card-grid">

                <div class="card card-shadow">
                    <div class="card-header card-image">
                        <img src="./img/eduardo.jpg"></img>
                    </div>
                    <div class="card-body">
                        Eduardo Torres
                    </div>
                </div>

                <div class="card card-shadow">
                    <div class="card-header card-image">
                        <img src="./img/victor.jpg"></img>
                    </div>
                    <div class="card-body">
                        Victor Fuentes
                    </div>
                </div>

                <div class="card card-shadow">
                    <div class="card-header card-image">
                        <img src="./img/benjamin.jpg"></img>
                    </div>
                    <div class="card-body">
                        Benjamín Gonzáles
                    </div>
                </div>
            </div>
        </>
        )
}