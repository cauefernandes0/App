export const categories = [
    {
        id: 1,
        name: "Domésticos ",
        image: require('../assets/imagens/cleaning.png')
    },
    {
        id:2,
        name: "Diário ",
        image: require('../assets/imagens/encanadora.png') 
    },
    {
        id:3,
        name: "Academia ",
        image: require('../assets/imagens/treinadora.png')
    },
    {
        id:4,
        name: "Lazer",
        image: require('../assets/imagens/musician.png')
    },
    {
        id:5,
        name: "Emocional",
        image: require('../assets/imagens/psychologist.png')
    },
    {
        id:6,
        name: "Viagem",
        image: require('../assets/imagens/motorista.png')
    },
]

export const featured = {
    
    id:1,
    title: 'Para Casa',
    description: "Encanamento, parte elétrica, limpeza",
    options: [
        {
            id:1,
            name: 'Joana Oliveira',
            image: require('../assets/imagens/carro.jpg'),
            description: "Problema com encanamento? É so me chamar!",
            inf: "Resido na Zona Norte de São Paulo, porém vou até qualquer localização! Caso seja necessário qualquer contato mais específico, tenho também meu WhatsApp. Em caso de necessidade de atuação à noite, o valor do trabalho pode variar, porém sempre negocio para o melhor de todos ",
            loc:'São Paulo - SP',
            stars: 4,
            reviews: "2.5 mil",
            category: 'Domésticos',
            trabalhos: [
                {
                id: 1,
                name:'Encanamentos de Pia',
                description: ' Ooioi',
                price: 70,
                image: require('../assets/imagens/macarrao.jpeg')
                },
                {
                    id: 2,
                    name:'Outros tipos',
                    description: ' Ooioi',
                    price: 70,
                    image: require('../assets/imagens/macarrao.jpeg')
                    },
            ]

        },
        {
            id:2,
            name: 'Gabriela Tomieto',
            image: require('../assets/imagens/carro.jpg'),
            description: "Vamos queimar essas gorduras!",
            inf: "Resido na Zona Norte de São Paulo",
            loc:'Taubaté - SP',
            stars: 3,
            reviews: "1.2 mil",
            category: 'Academia',
            trabalhos: [
                {
                id: 1,
                name:'Encanamentos de Pia',
                description: ' Ooioi',
                price: 70,
                image: require('../assets/imagens/macarrao.jpeg')
                },
                {
                    id: 2,
                    name:'Outros tipos',
                    description: ' Ooioi',
                    price: 70,
                    image: require('../assets/imagens/macarrao.jpeg')
                    },
            ]

        },
        {
            id:3,
            name: 'Guilhermina Damacenico',
            image: require('../assets/imagens/carro.jpg'),
            description: "Te levo para qualquer lugar!",
            inf: "Resido na Zona Norte de São Paulo",
            loc:'Rio de Janeiro - RJ',
            stars: 5,
            reviews: "2.5 mil",
            category: 'Domésticos',
            trabalhos: [
                {
                id: 1,
                name:'Encanamentos de Pia',
                description: ' Ooioi',
                price: 70,
                image: require('../assets/imagens/macarrao.jpeg')
                },
                {
                    id: 2,
                    name:'Outros tipos',
                    description: ' Ooioi',
                    price: 70,
                    image: require('../assets/imagens/macarrao.jpeg')
                    },
            ]

        },
    ],
   
}