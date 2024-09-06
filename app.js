function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;

    // Condição para que o campo de pequisa vazio não retorne resultados existentes
    if (!campoPesquisa) {
    section.innerHTML = "Nenhum termo foi inserido para busca.";
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase ();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let caracteristicas = "";

    // Itera sobre cada resultado de pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase();
      descricao = dado.descricao.toLocaleLowerCase();
      caracteristicas = dado.caracteristicas.toLocaleString();
      // condição para que seja feita a comparaçã0o do que foi digitado
      if (titulo.includes (campoPesquisa) || descricao.includes(campoPesquisa) || caracteristicas.includes(campoPesquisa)) {
        // Cria o HTML de um item de resultado, formatando com as informações do dados
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p class="descricao-meta">${dado.desenvolvedor}</p>
          <p class="descricao-meta">${dado.dataLancamento}</p>
          <a href=${dado.link} target="_blank">Acesse o ${dado.titulo}</a>
        </div>
        `;
      }    
    }
    if (!resultados) {
      resultados = "<p>O termo que você buscou não foi encontrado</p>"
    }
    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
}