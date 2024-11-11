import Image from "next/image";
import Hero from "@/app/ui/hero";
import Card from "@/app/ui/card";

export default function Home() {
    return (
        <main>
            <Hero></Hero>
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
                <section className="grid gap-6 grid-cols-1 lg:grid-cols-3 justify-center mt-24">
                    <Card>
                        <Image
                            className="mb-5"
                            src="/inicio/iconos/manos.svg"
                            alt="Imagen de asoramiento"
                            width={80}
                            height={80}
                        />
                        <p className="primary-color text-xl mb-3"><strong>Asesoramiento para familias y acompañantes</strong></p>
                        <p>Asesoramiento especializado para familias y acompañantes, ofreciendo el apoyo necesario para mejorar la calidad de vida de cada paciente.</p>
                    </Card>
                    <Card>
                        <Image
                            className="mb-5"
                            src="/inicio/iconos/muletas.svg"
                            alt="Imagen de Terapias"
                            width={80}
                            height={80}
                        />
                        <p className="primary-color text-xl mb-3"><strong>Terapias manuales e innovadoras</strong></p>
                        <p>Terapias diseñadas para abordar de manera integral los trastornos neurológicos. Enfoque personalizado que permite alcanzar resultados efectivos y duraderos.</p>
                    </Card>
                    <Card>
                        <Image
                            className="mb-5"
                            src="/inicio/iconos/silla.svg"
                            alt="Imagen de Salas"
                            width={80}
                            height={80}
                        />
                        <p className="primary-color text-xl mb-3"><strong>Salas individualizadas</strong></p>
                        <p>Ambiente privado para proporcionar tratamientos personalizados que se adaptan a las necesidades únicas de cada uno de los pacientes.</p>
                    </Card>
                </section>
                <section className="my-24">
                    <div className="frase text-center p-4">
                        <p><strong>&quot;Generalmente nuestros pacientes son exigentes, quieren calidad profesional y recuperar su vida lo antes posible&quot;</strong></p>
                    </div>
                </section>
                <hr className="mt-24 mb-14"/>
                <section>
                    <Image
                        className="mb-5"
                        src="/kit/logoDig.svg"
                        alt="Imagen de Terapias"
                        width={1536}
                        height={150}
                    />
                </section>
            </div>
        </main>
    );
}
