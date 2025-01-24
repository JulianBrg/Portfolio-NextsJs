import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://julianbrgdev.netlify.app/" />
                <meta property="og:image" content="/web-meta.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content="/web-meta.png" />
                <link rel="canonical" href="https://yourwebsite.com" />
            </Head>
            <body
                className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
                {children}
            </body>
        </html>
    );
}
