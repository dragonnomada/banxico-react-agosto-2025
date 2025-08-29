"use client"

import "tailwindcss/index.css"

import { mainStore } from "@/store/mainStore"
import { Provider } from "react-redux"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>User Admin v1</title>
            </head>
            <body>
                <Provider store={mainStore}>
                    {children}    
                </Provider>
            </body>
        </html>
    )
}
