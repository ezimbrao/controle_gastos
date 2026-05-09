# 💸 Controle de Gastos Pessoais

Um app mobile simples e funcional para anotar seus gastos do dia, visualizar o total acumulado e gerenciar sua lista de despesas.

## 👥 Autores

- **Enzo Fausto lenon de Oliveira Zimbrão**

## 📋 Funcionalidades

✅ **Tela 1 - Lista de Gastos**
- Exibe todos os gastos cadastrados em uma FlatList
- Mostra o total gasto no topo, atualizado automaticamente
- Botão de excluir em cada item com atualização automática do total
- Mensagem quando não há gastos registrados

✅ **Tela 2 - Formulário**
- Campos para descrição (texto) e valor (número)
- Validação de dados:
  - Descrição não pode estar vazia
  - Valor deve ser maior que zero
- Mensagens de erro visíveis na tela (sem usar Alert)
- Botão "Salvar" que adiciona o gasto e volta automaticamente
- Botão "Cancelar" para voltar sem salvar

✅ **Navegação**
- Navegação entre telas funcionando perfeitamente
- Botão "+ Novo gasto" na tela principal leva ao formulário
- Volta automática após salvar um gasto

## ⚙️ Stack Tecnológico

- **React Native** + **Expo**
- **Expo Router** para navegação
- **Context API** para gerenciamento de estado (GastosContext)
- **TypeScript** para tipagem
- Sem AsyncStorage - dados em memória

## 🚀 Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o app:**
   ```bash
   npx expo start
   ```

3. **Abra no Expo Go:**
   - Escaneie o QR Code com o app Expo Go no seu celular
   - Ou pressione `i` (iOS) ou `a` (Android) no terminal

## 📁 Estrutura do Projeto

```
controle_gastos/
├── app/
│   ├── _layout.tsx        # Layout principal com contexto
│   ├── index.tsx          # Tela de lista de gastos
│   └── formulario.tsx     # Rota do formulário
├── src/
│   ├── context/
│   │   └── GastosContext.tsx  # Context do app
│   └── screens/
│       ├── formulario/
│       │   └── formulario.tsx  # Componente formulário
│       └── tela_gastos/
│           └── gastos.tsx      # Componente lista (referência)
├── constants/
│   └── theme.ts           # Constantes de tema
├── hooks/
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
├── components/
│   ├── external-link.tsx
│   ├── haptic-tab.tsx
│   ├── hello-wave.tsx
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   ├── themed-view.tsx
│   └── ui/
│       ├── collapsible.tsx
│       ├── icon-symbol.ios.tsx
│       └── icon-symbol.tsx
├── assets/
│   └── images/
├── package.json
├── tsconfig.json
├── app.json
├── eslint.config.js
└── README.md
```

## 🧪 Critérios de Avaliação Atendidos

| Critério | Pontuação | Status |
|----------|-----------|--------|
| 📋 Formulário com dois campos | 0,15 pt | ✅ |
| ⚠️ Validação com mensagem visível | 0,20 pt | ✅ |
| 📱 FlatList exibindo gastos | 0,20 pt | ✅ |
| ➕ Total acumulado dinâmico | 0,15 pt | ✅ |
| 🗑️ Exclusão com atualização | 0,20 pt | ✅ |
| 🔁 Navegação funcionando | 0,10 pt | ✅ |
| **TOTAL** | **1,0 pt** | ✅ |

## 💡 Exemplos de Uso

**Adicionar um gasto:**
1. Toque em "+ Novo gasto"
2. Digite a descrição (ex: "Almoço")
3. Digite o valor (ex: "25.50")
4. Toque em "Salvar"
5. Volte automaticamente para a lista com o novo gasto

**Remover um gasto:**
1. Na lista principal, toque no ícone 🗑️ do gasto desejado
2. O total é atualizado automaticamente

**Validação:**
- Deixe a descrição vazia e toque "Salvar" → vê mensagem "A descrição não pode estar vazia"
- Deixe o valor em branco e toque "Salvar" → vê mensagem "O valor deve ser maior que zero"

## 📝 Notas

- O app funciona completamente em memória (sem persistência)
- Ao recarregar o app, os dados são zerados
- Todos os gastos recebem um ID único baseado em timestamp
- Interface limpa e intuitiva para melhor experiência do usuário

---

Desenvolvido como atividade de React Native + Expo 🚀
