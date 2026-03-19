export interface IMercado {
    id: number;
    name: string;
    category: string;
    price: number;
}

const MockMercados: IMercado[] = [
    {
        id: 1,
        name: "Macarrão Instantâneo Turma da Mônica Tomate Suave",
        category: "Massas",
        price: 2.55
    },
    {
        id: 2,
        name: "Refrigerante Coca-Cola Sem Açúcar 2L",
        category: "Bebidas",
        price: 10.20
    },
    {
        id: 3,
        name: "Arroz Branco Tipo 1 5kg",
        category: "Grãos",
        price: 22.90
    },
    {
        id: 4,
        name: "Feijão Carioca 1kg",
        category: "Grãos",
        price: 7.49
    },
    {
        id: 5,
        name: "Leite Integral 1L",
        category: "Laticínios",
        price: 4.39
    },
    {
        id: 6,
        name: "Pão de Forma Tradicional",
        category: "Padaria",
        price: 6.99
    },
    {
        id: 7,
        name: "Óleo de Soja 900ml",
        category: "Mercearia",
        price: 5.89
    },
    {
        id: 8,
        name: "Açúcar Refinado 1kg",
        category: "Mercearia",
        price: 3.79
    },
    {
        id: 9,
        name: "Café Torrado e Moído 500g",
        category: "Bebidas",
        price: 12.50
    },
    {
        id: 10,
        name: "Sabão em Pó 1kg",
        category: "Limpeza",
        price: 8.99
    },
    {
        id: 11,
        name: "Detergente Líquido 500ml",
        category: "Limpeza",
        price: 2.29
    },
    {
        id: 12,
        name: "Biscoito Recheado Chocolate 140g",
        category: "Biscoitos",
        price: 2.99
    }
]

export default MockMercados;
