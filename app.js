function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa =document.getElementById("campo-pesquisa").value

if(campoPesquisa== "") {
   section.innerHTML="<p>nada foi encontrado</p>" 
 return
}

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar a marcação HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item de dado (resultado da pesquisa)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase( )
        descricao = dado.descricao.toLowerCase( )
        tags = dado.tags.toLowerCase( )

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa))
             {

             // Constrói a marcação HTML para cada resultado, incluindo título, descrição e link
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descriçao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">conheça mais</a>
        </div>
    `;
        }
       
    }

    if(!resultados){
        resultados="<p>Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
}
