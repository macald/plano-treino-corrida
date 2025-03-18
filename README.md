# Plano de Treino de Corrida

Aplicação web para visualização e consulta de um plano de treino de corrida para meia maratona.

## Funcionalidades

- Visualização do plano de treino completo
- Seleção de treinos por data específica
- Exibição detalhada de cada treino incluindo:
  - Aquecimento
  - Treino principal
  - Desaquecimento
  - Objetivo do treino
  - Status de conclusão

## Tecnologias Utilizadas

- React.js
- Vite
- Tailwind CSS
- shadcn/ui (componentes baseados em Radix UI)
- Lucide React (ícones)

## Como Executar Localmente

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/plano-treino-corrida.git
cd plano-treino-corrida
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse `http://localhost:5173` no seu navegador.

## Estrutura de Componentes

O projeto utiliza componentes do shadcn/ui para criar uma interface moderna e responsiva:

- **Select**: Para escolha da data do treino
- **Card**: Para exibição dos detalhes do treino
- **Badge**: Para indicar o status de conclusão
- **Separator**: Para separação visual entre seções

## Build para Produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos de build serão gerados na pasta `dist`.

## Deploy

Esta aplicação está hospedada no Vercel e pode ser acessada em:
[https://plano-treino-corrida.vercel.app](https://plano-treino-corrida.vercel.app)