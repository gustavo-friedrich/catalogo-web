const livros = [
    {id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true},
    {id: 2, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890, disponivel: false},
    {id: 3, titulo: "Vidas Secas", autor: "Graciliano Ramos", ano: 1938, disponivel: true},
    {id: 4, titulo: "Capitães de Areia", autor: "Jorge Amado", ano: 1937, disponivel: true},
]

export async function getLivros(){
    return livros;
}

export async function getLivro(id){
    return livros.find((livro) => livro.id === Number(id) ?? null);
}