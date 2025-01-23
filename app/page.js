"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {
    // Define el estado isDarkMode y su función de actualización setIsDarkMode, inicializado en false
    const [isDarkMode, setIsDarkMode] = useState(false);

    // useEffect que se ejecuta una vez cuando el componente se monta
    useEffect(() => {
        // Verifica si el tema en localStorage es "dark" o si el usuario prefiere el esquema de color oscuro
        if (
            localStorage.theme === "dark" || // Si el tema en localStorage es "dark"
            (!("theme" in localStorage) && // O si no hay tema en localStorage y
                window.matchMedia("(prefers-color-scheme: dark)").matches) // el usuario prefiere el esquema de color oscuro
        ) {
            setIsDarkMode(true); // Establece isDarkMode a true
        } else {
            setIsDarkMode(false); // Establece isDarkMode a false
        }
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez

    // useEffect que se ejecuta cada vez que isDarkMode cambia
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark"); // Añade la clase "dark" al elemento <html>
            localStorage.theme = "dark"; // Guarda "dark" en localStorage
        } else {
            document.documentElement.classList.remove("dark"); // Elimina la clase "dark" del elemento <html>
            localStorage.theme = ""; // Limpia el valor de localStorage.theme
        }
    }, [isDarkMode]); // El array con isDarkMode asegura que este efecto se ejecute cuando isDarkMode cambia

    return (
        <div>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </div>
    );
}
