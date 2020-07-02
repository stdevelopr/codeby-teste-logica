# Teste CodeBy
- [Teste CodeBy](#teste-codeby)
  - [Descrição](#descrição)
  - [Estrutura de pastas](#estrutura-de-pastas)
  - [Problema](#problema)

## Descrição
Esse repositório possui o teste da CodeBy para avaliar as habilidades de lógica do candidato em questão.

## Estrutura de pastas
No repositório em questão, existem alguns testes criados com Jest que devem ser rodados para verificar se a estrutura condiz com o que buscamos.

## Problema
A seguinte estrutura de dados não funciona bem para o desenvolvimento de um seletor de variantes de uma loja e-commerce.

```javascript
var products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]
```

Precisamos que essa estrutura seja convertida para o seguinte formato.

```javascript
var productsResult = { 
  "preto": { 
    "PP": 1, 
    "M": 1, 
    "G": 1, 
    "GG": 2 
  }, 
  "branco": { 
    "PP": 1, 
    "G": 1 
  }, 
  "vermelho": { 
    "M": 1 
  }, 
  "azul": { 
    "XG": 3, 
    "P": 1 
  }
}
```
