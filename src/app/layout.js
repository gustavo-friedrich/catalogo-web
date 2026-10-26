import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Catálogo de Livros",
  description: "Projeto didático de Next.JS - DS1 IFRS Campus Restinga",
};

export default function RootLayout({children}){
  return(
    <html lang="pr-BR">
      <body className="min-h-screen bg-slate-50 text-slate-800">
        <header className="max-w-4xl mx-auto flex gap-6 p-4">
          <nav className="max-w-4xl mx-auto flex gap-6 p-4>">
            <Link href="/">Início</Link>
            <Link href="/livros">Livros</Link>
            <Link href="/sobre">Sobre</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

