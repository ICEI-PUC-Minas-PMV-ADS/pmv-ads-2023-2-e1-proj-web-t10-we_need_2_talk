# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. 

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar a página Meu Desempenho</td>
  <td>
   <ul>
    <li>RF-05:	O site deve permitir que o usuário verifique o progresso no(s) curso(s), detalhando as lições concluídas e estatísticas de desempenho individual.</li>
        <li>RF-03:	Lições Estruturadas: Oferecer lições organizadas por níveis de dificuldade e tópicos, permitindo que os usuários escolham lições relevantes para suas necessidades. Pontuação em quizzes e exercícios, destacando áreas fortes e sugerindo melhorias.</li>
   </ul>
  </td>
  <td>Verificar se os links do menu lateral e botões no núcleo central estão encaminhando para o respectivos itens corretamente e verificar se os exercícios oferecem melhoria e informam se a resposta está correta ou não</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em Exercícios.</li>
    <li>Na lista suspensa clicar em Testes/Estatísticas.</li>
    <li>Na lista suspensa clicar em Meu Desempenho.</li>
    <li>Visualizar as informações referentes desempenho individual do usuário.</li>
    <li>Clicar no menu lateral (Minhas estatísticas, Minhas questões, Meus cadernos, Meus cursos, Meus interesses, Minha assinatura, Minha rede) e nos botões (Ver curso, Go Premium e Continuar). .</li>  
   </ol>
   </td>
  <td>Todos os links da página Meu Desempenho devem encaminhar os usuários para os elementos descritos. Os testes devem mostrar a pontuação ao usuário e se as respostas estão corretas.</td>
  <td>Vitor de Paula Andrade</td>
 </tr>
</table>
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento da página de Feedback</td>
  <td>
   <ul>
    <li>RF-06:	Feedback Personalizado: Oferecer feedback personalizado para que os usuários possam avaliar o website.</li>
   
   </ul>
  </td>
  <td><ul><li>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente.</li>
  <li>Verificar se aparece a confirmação para o usuário de que sua avaliação sobre o website foi entregue.</li>
  
  </ul></td>
  
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no ícone de engrenagem.</li>
    <li>Clicar em Feedback.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Emília Raphael dos Santos</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar o funcionamento da página de Cadastro de Usuário </td>
  <td>
   <ul>
    <li>RF-02 O site deve permitir que os usuários personalizem seus perfis com informações como idiomas de interesse, nível de proficiência e metas de aprendizado, hobbys, assuntos relevantes.</li>
   </ul>
  </td>
  <td>
   <ul>
    <li> Vefificar se todos os campo de formulario são preenchivíes e se os dados foram salvos no localStore.</li>  
   </ul>
  </td>
  
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no ícone de engrenagem.</li>
    <li>Visualizar a página Cadastro de Usuário.</li>
    <li>Preencher o fomulário corretamente.</li>
    <li>Clicar em "Salvar Alterações"</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento que preencher os fonmulários devem estar disponibilizadas na página de Cadastro de Usuário para alguma alteração futura .</td>
  <td>João Victor Diniz Piazza</td>
 </tr>
</table>

[Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
