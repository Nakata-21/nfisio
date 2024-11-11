import type { Metadata } from "next";
import "./globals.css";
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import { nunito } from '@/app/ui/fonts'; 

export const metadata: Metadata = {
    title: "Nfisio - Fisioterapia Neurológica",
    description: "Prueba de metadescripción",
    icons: {
        icon: "/favicons/favicon.ico"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${nunito.className} antialiased`}
            >
                <Header></Header>

                {children}

                <Footer></Footer>
            </body>
        </html>
    );
}
