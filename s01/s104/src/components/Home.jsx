import React from "react"
import { Counter } from "./Counter"

// MONTAR LA ETIQUETA / MONTAR EL COMPONENTE
// Componente (A) -> <A {...props}>{children}</A> | <A {...props} /> | <A />

// LAS PROPIEDADES SOLO RETIENEN:
// Un string (directo)
// Un booleano verdadero (sin valor)
// Cualquier datos (inyectado)

// Directo: propiedad="texto" (string)
// Sin valor: propiedad (boolean true)
// Inyectado: propiedad={123} (number 123)
// Inyectado: propiedad={() => {}} (function () => {})

export class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <>
                <Counter />
                <Counter 
                    initialCount={100}
                />
                <Counter 
                    initialCount="100"
                />
                <Counter 
                    initialCount
                />
                <Counter 
                    initialCount="hola"
                />
            </>
        )

    }

}