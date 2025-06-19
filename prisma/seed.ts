import { PrismaClient } from "../app/generated/prisma/index.js";

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
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
        ];

        const creativeNames = [
            "Hospital Nossa Senhora de Fátima",
            "Hospital Santa Cruz",
            "Hospital Santa Casa",
            "Hospital Pequeno Príncipe",
            "Hospital Erasto Gaertner",
            "Hospital São Vicente",
            "Hospital das Nações",
            "Hospital Nossa Senhora das Graças",
            "Hospital Pilar",
            "Hospital das Clínicas",
        ];

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

        const hospitals = [];

        for (let i = 0; i < 10; i++) {
            const name = creativeNames[i];
            const address = addresses[i];
            const imageUrl = images[i];
            const hospitalPhones = phones[i];

            const createdHospital = await prisma.hospital.create({
                data: {
                    name,
                    address,
                    imageUrl,
                    description: "Descrição padrão para a hospital.",
                    phones: hospitalPhones,
                },
            });

            for (const service of services) {
                await prisma.hospitalService.create({
                    data: {
                        name: service.name,
                        description: service.description,
                        price: service.price,
                        hospital: {
                            // corrigido de "barbershop"
                            connect: { id: createdHospital.id },
                        },
                        imageUrl: service.imageUrl,
                    },
                });
            }

            hospitals.push(createdHospital);
        }

        console.log("🌱 Seed finalizado com sucesso.");
    } catch (error) {
        console.error("Erro ao executar o seed:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
