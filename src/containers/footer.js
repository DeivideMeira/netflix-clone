import React from "react";
import { Footer } from '../components'

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Title>Dúvidas? Ligue 0800-761-4631</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Perguntas frequentes</Footer.Link>
                    <Footer.Link href="#">Relações com investidores</Footer.Link>
                    <Footer.Link href="#">Formas de assistir</Footer.Link>
                    <Footer.Link href="#">Informações corporativas</Footer.Link>
                    <Footer.Link href="#">Só na Netflix</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Perguntas frequentes</Footer.Link>
                    <Footer.Link href="#">Relações com investidores</Footer.Link>
                    <Footer.Link href="#">Formas de assistir</Footer.Link>
                    <Footer.Link href="#">Informações corporativas</Footer.Link>
                    <Footer.Link href="#">Só na Netflix</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}