import { PrismaClient } from "../app/generated/prisma";

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        // Números de telefones de hospitais
        const phones = [
            ["(41) 1234-5678", "(41) 9876-5432"],
            ["(41) 2345-6789", "(41) 9012-3456"],
            ["(41) 3456-7890", "(41) 6543-2109"],
            ["(41) 4567-0123", "(41) 3210-9876"],
            ["(41) 5678-1234", "(41) 9087-6543"],
            ["(41) 6789-2345", "(41) 6543-0987"],
            ["(41) 7890-3456", "(41) 0987-6543"],
            ["(41) 8901-4567", "(41) 6543-2109"],
            ["(41) 9012-5678", "(41) 3210-9876"],
            ["(41) 9876-1234", "(41) 6543-0987"],
        ];
        const images = [
            "https://i0.wp.com/revistaampla.com.br/wp-content/uploads/2024/03/unimed-fatima-divulgacao-960x540-1.jpg?resize=696%2C464&ssl=1",
            "https://portalhospitaisbrasil.com.br/wp-content/uploads/2023/08/Hospital-Santa-Cruz.jpg",
            "https://santacasacuritiba.com.br/wp-content/uploads/2021/09/IMG_8642-1536x1024.jpg",
            "https://cbgolfe.com.br/wp-content/uploads/2017/12/logo-hpp-materia-site.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoR8j4ea1xBm5gqxQJF5JhYdEwcXKTczl-A&s",
            "https://www.anahp.com.br/wp-content/uploads/2023/01/Hospital-Sao-Vicente_fachada.png",
            "https://planoscuritiba.com.br/wp-content/uploads/2018/11/hospital-das-nacoes-em-curitiba.png",
            "https://hnsg.org.br/wp-content/uploads/2019/12/img_9129.jpg",
            "https://pbs.twimg.com/profile_images/461144789270798337/RHvgj_9-_400x400.png",
            "https://servicos.nc.ufpr.br/PortalNC/painel/assets/img/logos/logo_hc.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqB-S5dVlDkoYOCUyj-JigB08ugDL3ilIag&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoz_iHIKjb-zbGtBENhl8MXpQfATABkfnrvw&s",
            "https://immef.com.br/wp-content/uploads/2017/06/ultrassonografia-obstetrica-tridimensional-em-tempo-real-4d-555x367.jpg",
            "https://drapaulaazevedodermato.com.br/novo-2023/wp-content/uploads/2024/07/dermatologista-em-goiania-dra-paula-azevedo-blog-dra-paula-azevedo.jpg",
            "https://fiesc.com.br/sites/default/files/styles/800x533/public/galeria/2024-03/covid-still-life-with-vaccine.jpg?itok=QnSKwasL",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMNdSrlC4WIRylfGlN8n6YsdABdpU_xcM5Q&s",
            "https://cetic.br/media/imgs/tic/TICsaude-big.jpg",
            "https://blog-prd.portalpos.com.br/wp-content/uploads/2022/04/saude-publica-familia-pos-graduacao.jpg",
            "https://wordpress-cms-mv-prod-assets.quero.space/uploads/2019/02/team-doctors-ready-take-care-people-who-are-sick-with-covid-19-hospital.jpg",
            "https://ih1.redbubble.net/image.587031291.6209/flat,750x,075,f-pad,750x1000,f8f8f8.u4.jpg",
        ];
        // Nomes de hospitais
        const creativeNames = [
            "Hospital Nossa Senhora de Fátima",
            "Hospital Santa Cruz",
            "Hospital Santa Casa",
            "Hospital Pequeno Principe",
            "Hospital Erasto Gaertner",
            "Hospital São Vicente",
            "Hospital das Nações",
            "Hospital Nossa Senhora das Graças",
            "Hospital Pilar",
            "Hospital das Clínicas",
        ];

        // Endereços de hospitais
        const addresses = [
            "Avenida Visconde de Guarapuava, 3077 – Centro, Curitiba – PR",
            "Rua Batel, 1889 – Batel, Curitiba – PR",
            "Praça Rui Barbosa, 694 – Centro, Curitiba – PR",
            "Avenida Silva Jardim, 1671 – Água Verde, Curitiba – PR",
            "Rua Dr. Ovande do Amaral, 201 – Jardim das Américas, Curitiba – PR",
            "Rua Schirlei Solange Mantovani, 1160 – CIC, Curitiba – PR",
            "Rua Raphael Papa, 50 – Jardim Social, Curitiba – PR",
            "Rua Alcides Munhoz, 433 – Mercês, Curitiba – PR",
            "Rua Desembargador Hugo Simas, 322 – Bom Retiro, Curitiba – PR",
            "Rua General Carneiro, 181 – Alto da Glória, Curitiba – PR",
        ];

        const services = [
            {
                name: "Consulta Clínica Geral",
                description:
                    "Avaliação médica abrangente para diagnóstico e tratamento de condições gerais de saúde.",
                price: 360.0,
                imageUrl:
                    "https://utfs.httpscom.br/wp-content/uploads/2020/08/Cl%C3%ADnico-geral-730x410.jpg/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
            },
            {
                name: "Exame de Sangue",
                description:
                    "Coleta e análise de sangue para avaliar diversos parâmetros de saúde.",
                price: 150.0,
                imageUrl:
                    "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
            },
            {
                name: "Ultrassonografia Abdominal",
                description:
                    "Exame de imagem para avaliar órgãos abdominais como fígado, rins e vesícula biliar.",
                price: 350.0,
                imageUrl:
                    "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
            },
            {
                name: "Consulta Dermatológica",
                description:
                    "Avaliação e tratamento de condições da pele, cabelos e unhas.",
                price: 20.0,
                imageUrl:
                    "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
            },
            {
                name: "Vacinação",
                description:
                    "Administração de vacinas para prevenção de doenças.",
                price: 50.0,
                imageUrl:
                    "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
            },
            {
                name: "Eletrocardiograma (ECG)",
                description:
                    "Exame que registra a atividade elétrica do coração para detectar arritmias e outras condições cardíacas.",
                price: 25.0,
                imageUrl:
                    "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
            },
        ];

        // Criar 10 hospitais com nomes e endereços
        const barbershops = [];
        for (let i = 0; i < 10; i++) {
            const name = creativeNames[i];
            const address = addresses[i];
            const imageUrl = images[i];
            const barbershopPhones = phones[i];

            const barbershop = await prisma.barbershop.create({
                data: {
                    name,
                    address,
                    imageUrl: imageUrl,
                    description: "Descrição padrão para a hospital.",
                    phones: barbershopPhones,
                },
            });

            for (const service of services) {
                await prisma.barbershopService.create({
                    data: {
                        name: service.name,
                        description: service.description,
                        price: service.price,
                        barbershop: {
                            connect: {
                                id: barbershop.id,
                            },
                        },
                        imageUrl: service.imageUrl,
                    },
                });
            }

            barbershops.push(barbershop);
        }

        // Fechar a conexão com o banco de dados
        await prisma.$disconnect();
    } catch (error) {
        console.error("Erro ao criar as hospitais:", error);
    }
}

seedDatabase();
