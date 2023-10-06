import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css';
import homeItems from "../data/members.json"
import { HomeItem } from "../components/HomeItem";

export function Home() {
    return(
        <div className="tw-justify-center tw-shadow-lg tw-shadow-violet-500 tw-p-5 tw-pb-10 tw-mt-20 tw-bg-gradient-to-tr tw-from-violet-950 tw-to-blue-800 tw-rounded-md">
            <div className="tw-text-center tw-text-white tw-text-2xl tw-antialiased tw-font-semibold tw-underline tw-underline-offset-3">
                Grupo 10: The bois
            </div>
            <br/>
            <div className="tw-text-center tw-text-slate-200 tw-text-lg tw-font-medium">
                    Nuestro grupo fue formando a traves del ramo de Diseño de Software.
                    Nuestro objetivo como grupo es incursar en el área del diseño de páginas, de manera que esto nos ayude en el día a día de nuestro futuro como profesionales.
            </div>
            <br/>
            <>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {homeItems.map(item => (
                        <Col key={item.id}><HomeItem {...item} /></Col>
                    ))}
                </Row>
            </>
        </div>
        )
}