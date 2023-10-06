import React from "react";
import { useState, useRef } from "react";
import '../css/Eduardo.css'

//no funciona todavia, pero este componente seria para añadir una clase a un elemento

export function ButtonA() {
    const ref = useRef();

    const handleClick = () => {
      const nav = ref.current;
      nav.classList.toggle('pasatiempos-b');
    };

    return(
        <button className="tw-border-fuchsia-500 tw-rounded-xl tw-bg-indigo-950" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 9l6 6l6 -6" />
        </svg></button>
    )
}