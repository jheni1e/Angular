export interface IComida {
    id: number;
    name: string;
    category: string;
    price: number;
}

const MockComidas: IComida[] = [
    {
        id: 1,
        name: "Barca de Sushi 40 Peças",
        category: "Sushi",
        price: 120.0
    },
    {
        id: 2,
        name: "Hambúrguer Artesanal com Batata",
        category: "Hambúrguer",
        price: 32.90
    },
    {
        id: 3,
        name: "Pizza Calabresa Média",
        category: "Pizza",
        price: 45.00
    },
    {
        id: 4,
        name: "Lasanha à Bolonhesa",
        category: "Massas",
        price: 38.50
    },
    {
        id: 5,
        name: "Frango Frito Crocante (8 pedaços)",
        category: "Porções",
        price: 29.90
    },
    {
        id: 6,
        name: "Açaí 500ml com Granola e Banana",
        category: "Açaí",
        price: 18.00
    },
    {
        id: 7,
        name: "Combo X-Burguer + Refrigerante",
        category: "Combo",
        price: 27.90
    },
    {
        id: 8,
        name: "Temaki Salmão Cream Cheese",
        category: "Sushi",
        price: 22.50
    },
    {
        id: 9,
        name: "Marmita Executiva (Arroz, Feijão, Bife e Salada)",
        category: "Marmita",
        price: 24.90
    },
    {
        id: 10,
        name: "Esfiha de Carne (Unidade)",
        category: "Árabe",
        price: 4.50
    }
]

export default MockComidas;
