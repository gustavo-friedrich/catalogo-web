import Link from "next/link";
import { getLivros } from "@/lib/livros";

export const metadata = { title: "Livros | Catálogo" };

export default async function LivrosPage(){
    const livros = await getLivros();
    console.log("renderizando a lista no servidor: ", livros.length);

    return(
        <section>
            <h1 className="text-2xl font-bold mb-4">Livros</h1>
            <ul className="space-y-2">
                {livros.map((livro) => (
                    <li key={livro.id} className="bg-white rounded p-4 shadow">
                        <Link
                            href={`/livros/${livro.id}`}
                            className="font-semibold text-blue-700"
                            >
                                {livro.titulo}
                            </Link>
                        <p className="text-sm">{livro.autor} - {livro.ano}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}