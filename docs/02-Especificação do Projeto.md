# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Lucas Sequeira tem 28 anos faz graduação em administração, já trabalhou como
assistente administrativo em uma empresa que não valorizava a diversidade.

Camila Novaes tem 25 anos é Estudante de Engenharia de Software, faz estágio
em uma startup que priorizava a diversidade e inclusão.

André Brante tem 32 anos faz Pós-graduação em Psicologia, trabalhou como
psicólogo em uma clínica onde enfrentou discriminação.

Empresa A, Comprometida com a diversidade e inclusão, possui políticas
afirmativas para a comunidade LGBTQIA+.

Empresa B, Reconhece a importância da diversidade e inclusão, mas busca
melhorar suas políticas e práticas.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Graduado em Administração e Homem trans|Desejo encontrar um emprego em uma empresa que valorize a diversidade e promova ainclusão.| Já enfrentou discriminaçãoe exclusão no mercado detrabalho devido à sua identidade de gênero. Ele quer encontrar um ambiente onde possa ser autêntico, sentir-se seguro e ter igualdade de oportunidades de crescimento profissional.|
|Travesti em busca de emprego formal.| Meu desejo é encontrar uma empresa que me permita lidar com o público sem precisar me preocupar com a minha aparência. Eu quero ter a oportunidade de realizar eventos e oferecer empoderamento para outras travestis e trans.| Eu enfrento muita discriminação ao tentar trabalhar com o público. Infelizmente, minha aparência como mulher travesti muitas vezes é motivo de preconceito e exclusão. No entanto, isso não deve ser uma barreira para que eu possa exercer minha profissão e contribuir para a sociedade. Eu quero quebrar estereótipos, promover a inclusão e proporcionar um ambiente seguro para outras pessoas transgênero.|
|Estudante de Engenharia de Software e mulher lésbica.|Quer fazer parte de uma rede profissional que promova o apoio e o empoderamento de profissionais LGBTQIA+.|Já enfrentou desafios emocionais e psicológicos devido à falta de apoio e reconhecimento no ambiente de trabalho. Ela deseja um espaço onde possa se conectar com outros membros da comunidade, compartilhar experiências e receber suporte para alcançar seu potencial máximo.|
|Pós-graduado em psicologia, exercendo atividades profissionais que envolva Recursos Humanos e pansexual não binario.| Quer encontrar um emprego onde suas habilidades e qualificações sejam valorizadas, independentemente de sua identidade de gênero ou orientação sexual.| Porque Pedro já enfrentou desigualdades salariais e limitações nas oportunidades de progressão na carreira devido à discriminação. Ele almeja um ambiente onde possa ter acesso equitativo a oportunidades de emprego e crescimento profissional, com base em
suas competências, talentos e méritos.|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Ao entrar no site aparecerá informações sobre o projeto e acima o “LOGIN” e “CADASTRE-SE”, onde, caso a empresa ou o usuário consiga acessar.| ALTA | 
|RF-002| Permite ao usuário entrar em sua conta através do email e senha.| ALTA |
|RF-003| Permite a empresa entrar em sua conta através do CNPJ e senha.|ALTA|
|RF-004|Permite que os usuáries se cadastrem na plataforma fornecendo informações pessoais básicas, como nome, e-mail, senha, informações de perfil adicionais, experiência profissional, habilidades, formação acadêmica, certificações, etc. Se o usuário não estiver cadastrado no sistema, os dados devem ser aceitos. Caso contrário, o sistema deve solicitar um e-mail válido.|ALTA|
|RF-005|Permite que empresas se cadastrem no sistema de forma separada dos usuáries individuais. Na tela de cadastro de empresa, os campos devem incluir nome, razão social, descrição da empresa e CNPJ. Se a empresa ainda não estiver cadastrada no sistema, os dados devem ser aceitos. Caso contrário, o sistema deve solicitar um CNPJ válido.|ALTA|
|RF-006| Atualização de informações do perfil do usuário como descrição, nome, cursos, interesses, fotos, gênero. Garantindo que seus perfis estejam sempre atualizados, precisos e tendo a capacidade de configurar a privacidade que permitam aos usuáries controlar quem pode ver quais partes de seus perfis, protegendo informações sensíveis.|ALTA|
|RF-007|Atualização de informações do perfil da empresa como publicações de candidaturas, descrição, selos, fotos, etc. Capacidade de configurar privacidades que permitam a controlar e proteger informações sensíveis, garantindo que esteja sempre atualizado.|ALTA| 
|RF-008|Permite ao usuário pesquisar e visualizar informações de pessoas e empresas cadastradas no sistema. Inserindo critérios de pesquisa e visualizando os resultados correspondentes. Capacidade de enviar e aceitar solicitações de conexão. Fornecendo um sistema de mensagens para a comunicação entre conexões |ALTA|
|RF-009|Ferramenta para usuáries se candidatar a vagas e empresas, onde, colocam suas informações pessoais e currículo para serem enviados.|ALTA|
|RF-010|Funcionalidade para empresa publicar vagas de emprego, além de conseguirem ver candidaturas, dados dos usuáries e currículo. Gerenciando processos seletivos.|ALTA|
|RF-011|Permite que os usuáries e empresas pesquisem por posts específicos e salvem dentro do site com opções de filtragem para refinar os resultados da pesquisa, como por data, categoria ou autor do post. Ficando armazenado na conta para fácil acesso.|ALTA|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
