import Link from "next/link";

export default function Footer() {
    return (
        <footer className="primary-background py-8">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 justify-center text-neutral-50">
                    <div>
                        <p className="mb-2"><strong>Contacto</strong></p>
                        <p>Clínica Besada, 984245144 - Campomanes 17, Bajo. Oviedo.</p>
                        <p>Clínica Santa Susana, 985212424 - Santa Susana 6, Bajo. Oviedo.</p>
                        <p>WhatsApp: 633252965</p>
                    </div>
                    <div>
                        <p className="mb-2"><strong>Enlaces de Interés</strong></p>
                        <Link className="block" href={"/"}>Aviso Legal</Link>
                        <Link className="block" href={"/"}>Política de privacidad</Link>
                        <Link className="block" href={"/"}>Aviso Legal</Link>
                    </div>
                    <div>
                        <p className="mb-2"><strong>Redes sociales</strong></p>
                    </div>
                </div>
                <hr className="my-8" />
                <p className="text-neutral-50">Desarrollado por IRICOM S.L. - Nfisio - Fisioterapia Neurológica</p>
            </div>
        </footer>
    );
}