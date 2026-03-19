export interface IComida {
    id: number;
    name: string;
    price: number;
    nota: number;
    tempo_entrega: number;
    image: string;
}

const MockComidas: IComida[] = [
    {
        "id": 1,
        "name": "Uramaki Filadélfia 8 Peças",
        "price": 40.5,
        "nota": 4.8,
        "tempo_entrega": 45,
        "image": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": 2,
        "name": "Hambúrguer Artesanal",
        "price": 32.9,
        "nota": 4.5,
        "tempo_entrega": 30,
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": 3,
        "name": "Pizza Marguerita Grande",
        "price": 45.9,
        "nota": 4.6,
        "tempo_entrega": 40,
        "image": "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg"
    },
    {
        "id": 4,
        "name": "Penne à Bolonhesa",
        "price": 38.5,
        "nota": 4.4,
        "tempo_entrega": 35,
        "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": 5,
        "name": "Frango Frito Filé (8 pedaços)",
        "price": 29.9,
        "nota": 4.3,
        "tempo_entrega": 25,
        "image": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": 6,
        "name": "Smash Burguer + Coca 200ml",
        "price": 27.9,
        "nota": 4.2,
        "tempo_entrega": 20,
        "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": 7,
        "name": "Barca de Sushi",
        "price": 130.9,
        "nota": 4.7,
        "tempo_entrega": 35,
        "image": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": 8,
        "name": "Salada Caesar",
        "price": 42.9,
        "nota": 4.1,
        "tempo_entrega": 15,
        "image": "https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=800&q=80"
    }
]

export default MockComidas;
