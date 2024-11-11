import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full flex items-center justify-center relative h-128">
            <Image
                className="absolute top-0 w-full object-cover h-128 z-1"
                src="/hero/hero.jpg"
                alt="Imagen del Banner"
                width={1920}
                height={1080}
            />
            <p className="relative z-10 text-neutral-50 text-7xl text-center">Tus logros nuestro objetivo</p>
        </section>
    );
}