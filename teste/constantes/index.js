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
    title: 'Cuidar de Casa',
    description: "Encanamento, parte elétrica, limpeza",
    options: [
        {
            id:1,
            name: 'Joana Oliveira',
            image: require('../assets/imagens/pia.png'),
            description: "Problema com encanamento? É so me chamar!",
            inf: "Resido na Zona Norte de São Paulo, porém vou até qualquer localização! Caso seja necessário qualquer contato mais específico, tenho também meu WhatsApp. Em caso de necessidade de atuação à noite, o valor do trabalho pode variar, porém sempre negocio para o melhor de todos ",
            loc:'São Paulo - SP',
            lng: -46.63425454894012, 
            lat:  -23.550182020788736,
            stars: 4,
            reviews: "2.5 mil",
            category: 'Diário',
            trabalhos: [
                {
                id: 1,
                name:'Encanamentos de Pia',
                description: 'Especialmente de Pia',
                price: 70,
                image: require('../assets/imagens/svspia.jpeg')
                },
                {
                    id: 2,
                    name:'Outros tipos',
                    description: 'Outros tipos de encanamentos',
                    price: 70,
                    image: require('../assets/imagens/svspia2.jpeg')
                    },
            ]

        },
        {
            id:2,
            name: 'Gabriela Tomieto',
            image: require('../assets/imagens/personal.jpg'),
            description: "Vamos queimar essas gorduras!",
            inf: "Resido na Zona Norte de São Paulo",
            lng: -45.56547026725932,
            lat:  -23.043776996797313,
            loc:'Taubaté - SP',
            stars: 3,
            reviews: "1.2 mil",
            category: 'Academia',
            trabalhos: [
                {
                id: 1,
                name:'Personal Trainer',
                description: 'Ajuda nos exercícios e execuções',
                price: 70,
                image: require('../assets/imagens/acads.jpg')
                },
            ]

        },
        {
            id:3,
            name: 'Guilhermina Damacenico',
            image: require('../assets/imagens/carro.jpg'),
            description: "Te levo para qualquer lugar!",
            inf: "Resido na Zona Norte de São Paulo",
            lng: 46.38119,
            lat:  -23.33059,
            loc:'Rio de Janeiro - RJ',
            stars: 5,
            reviews: "2.5 mil",
            category: 'Domésticos',
            trabalhos: [
                {
                id: 1,
                name:'Viagem na cidade',
                description: 'Te levo pela cidade',
                price: 15,
                image: require('../assets/imagens/uber.jpg')
                },
                {
                    id: 2,
                    name:'Viagem para outro estado',
                    description: 'Te levo pela outro estado',
                    price: 60,
                    image: require('../assets/imagens/uber.jpg')
                    },
            ]

        },
    ],
   
}