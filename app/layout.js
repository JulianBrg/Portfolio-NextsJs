import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Cambiado de "weights" a "weight"
});

const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"], // Cambiado de "weights" a "weight"
});

export const metadata = {
    title: "Portfolio Julian Dev",
    description: "Portfolio Julian Dev - Full Stack Developer & Designer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="scroll-smooth">
            <body
                className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
                {children}
            </body>
        </html>
    );
}
