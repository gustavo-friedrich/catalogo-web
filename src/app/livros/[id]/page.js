import { getLivro } from "@/lib/livros";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }){
    const { id } = await params;
    const livro = await getLivro(id);
    return { title: livro ? `${livro.titulo} | Catálogo` : "Livro não encontrado" };
}


export const instant = false;

export default async function DetalheLivroPage({ params }){
    const { id } = await params;
    const livro = await getLivro(id);

    if(!livro){
        notFound();
    }

    return(
        <article className="bg-white rounded p-6 shadow space-y-1">
            <h1 className="text-2xl font-bold">{livro.titulo}</h1>
            <p>Autor: {livro.autor}</p>
            <p>Ano: {livro.ano}</p>
            <p>Situação: {livro.disponivel ? "Disponível" : "Emprestado"}</p>
        </article>
    )

}