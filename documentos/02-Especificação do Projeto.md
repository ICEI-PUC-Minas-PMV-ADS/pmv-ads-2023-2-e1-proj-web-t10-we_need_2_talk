# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Consumidor eclético </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa que deseja contratar os serviços de um professor ou um nativo. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Contratar serviços de professores ou nativos para aulas ou "talks", contratando o serviço por um determinado tempo, ex: 3x na semana, etc. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Prestador de serviço </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Nativo/professor que disponibilizará seu conhecimento para possíveis alunos que queiram contratar seus serviços.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Encontrar um possível aluno que esteja aprendendo sua língua materna para atender suas necessidades. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Consumidor estudante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário com foco em intercâmbios/carreira fora do país. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Aprimorar seu nível na língua selecionada, tanto verbalmente quanto gramaticalmente para futuros certificados e provas que vão ser requeridos.  </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Consumidor carente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Usuário procurando uma interação com alguém da plataforma para praticar o idioma.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Encontrar outro usuário para iniciar uma conversa no idioma selecionado.  </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Consumidor com restrição financeira </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas sem quaisquer recursos financeiros para um investimento em um curso de idiomas sem saber quando irá finalizá-lo. </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Nossa plataforma oferece cursos com versões gratuitas e aulas com nativos do idioma de sua escolha.  </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Consumidor ensino engessado </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoas que estão à procura de curso que fogem a forma engessada que temos, onde se aprende muitas das vezes sem aprender idiomas em seu contexto.   </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>A plataforma proporcionando uma jornada de ensino com muito aprendizado envolvente e prática, levando em consideração todo o contexto que desejar.  </td>
</tr>
</tbody>
</table>


## Histórias de Usuários




|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Estudante                | saber quem são as pessoas disponíveis para conversar em um determinado idioma                       | escolher alguém com interesses similares para iniciar uma conversa e aprimorar o idioma                              |
| Nativo Professor                | saber como identificar estudantes que necessitam de apoio acadêmico formal em um determinado assunto                       | auxiliar no aprendizado, fornecendo exercícios específicos                              |
| Nativo pessoa comum                | saber quais são os dados que devo cadastrar                       | utilizar a plataforma                              |
| Estudante nível básico                | saber como encontrar um professor que tenha disponibilidade para aulas regulares                       | acompanhar meu aprendizado e me dar feedback                              |
| Estudante nível intermediário/ avançado                | ver as pessoas cadastradas em um determinado idioma, os assuntos que gostariam de conversar sobre, e os horários de disponibilidade                       | para escolher com quem quero iniciar uma conversa                              |


## Requisitos do Projeto

### Requisitos Funcionais


|ID   | DESCRIÇÃO | PRIORIDADE                |
|--------------------|---------------------------|----------------------------------|
| RF-01               | Cadastro de Usuários: Permitir que os usuários criem contas utilizando o endereço de e-mail, CPF, endereço residencial, considerando métodos definidos RBAC e utilizando funções CRUD                     | Alta                              |
| RF-02               | Personalização do Perfil de usuário: Permitir que os usuários personalizem seus perfis com informações como idiomas de interesse, nível de proficiência e metas de aprendizado, hobbys, assuntos relevantes.                        | Baixa                              |
| RF-03               | Lições Estruturadas: Oferecer lições organizadas por níveis de dificuldade e tópicos, permitindo que os usuários escolham lições relevantes para suas necessidades. Pontuação em quizzes e exercícios, destacando áreas fortes e sugerindo melhorias                       | Baixa                              |
| RF-04               | Prática de Conversação: Incluir atividades interativas de prática de conversação sessões de áudio, para melhorar as habilidades de comunicação oral dos usuários, conversas de assuntos em comum e personalizadas                       | Alta                              |
| RF-05               | Acompanhamento de Progresso: Fornecer um painel que exiba o progresso do usuário, detalhando as lições concluídas, considerando insights de áreas que precisam de mais atenção.                        | Média                              |
| RF-06               | Feedback Personalizado: Oferecer feedback personalizado para que os usuários possam avaliar o website.                        |Média                               |
| RF-07               |Comunidade de Aprendizagem: Implementar fóruns de discussão, grupos de estudo e chat em tempo real para permitir que os usuários interajam, compartilhem dicas e pratiquem com outros aprendizes.                        | Alta                              |
| RF-08               |  Permite que o usuário faça login no sistema, caso já possua uma conta. Caso contrário, basta criar uma nova conta e acessar  | Alta                               |
**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF- 01 |  Tempo de resposta: O software deve fornecer respostas (em até 3s), especialmente em interações em tempo real como tradução ou correção gramatical.                     | Média    | 
| RNF- 02  | Proteção de dados: O software deve garantir a confidencialidade e integridade dos dados pessoais dos usuários, como informações de login                    | Alta   |
|  RNF- 03  |  Navegadores suportados: O software deve ser compatível com uma gama de navegadores populares.                    | Baixa   |

**Prioridade: Alta / Média / Baixa. 

