// export const metadata = {
//   title: "Mi app",
//   description: "Hola esta es mi app",
// }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Mi App</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
                />
            </head>
            <body>
                :D
                {children}
            </body>
        </html>
    )
}
