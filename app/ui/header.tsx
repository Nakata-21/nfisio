'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Navbar,
    NavbarContent,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Inicio",
        "Más información",
        "Contacto",
    ];

    return (
        <Navbar className="bg-white py-4" onMenuOpenChange={setIsMenuOpen} isBlurred={false} isBordered={true} maxWidth="2xl">
            <NavbarContent>
                <NavbarBrand>
                    <Image
                        src="/logos/logo.svg"
                        alt="Imagen de asoramiento"
                        width={140}
                        height={50}
                    />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-12" justify="end">
                <NavbarItem>
                    <Link className="primary-color hover:text-slate-600 active:text-slate-600 active:font-bold" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="primary-color hover:text-slate-600" href="#">
                        Más información
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="primary-color hover:text-slate-600" href="#">
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarMenu className="pt-14">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="/"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}