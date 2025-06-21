import { Input } from "@/components/ui/input";
import Header from "./components/ui/header";
import { Button } from "./components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { db } from "./lib/prisma";
import HospitalItem from "./components/ui/hospital-item";

const Home = async () => {
    //chamar banco de dados
    const Hospital = await db.hospital.findMany({});

    return (
        <div>
            {/*Cabeçalho*/}
            <Header />
            <div className="p-5">
                {/*Texto*/}
                <h2 className="text-xl font-bold">Olá, paciente!</h2>
                <p>Sábado, 07 de junho</p>

                {/*Busca*/}

                <div className="flex items-center gap-2 mt-6">
                    <Input placeholder="Faça sua busca..." />
                    <Button>
                        <SearchIcon />
                    </Button>
                </div>

                {/*BUSCA RÁPIDA */}
                <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="consulta.svg"
                            width={16}
                            height={16}
                            alt="Consulta"
                        />
                        Consultas
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="exames.svg"
                            width={16}
                            height={16}
                            alt="Exames"
                        />
                        Exames
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="vacinas.svg"
                            width={16}
                            height={16}
                            alt="Vacinas"
                        />
                        Vacinas
                    </Button>

                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="ultrasom.svg"
                            width={16}
                            height={16}
                            alt="Ultrasom"
                        />
                        Ultrasom
                    </Button>
                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="examesangue.svg"
                            width={16}
                            height={16}
                            alt="ExameDeSangue"
                        />
                        Exame de Sangue
                    </Button>
                    <Button className="gap-2" variant="secondary">
                        <Image
                            src="eletrocardio.svg"
                            width={16}
                            height={16}
                            alt="Eletrocardio"
                        />
                        Eletrocardiograma
                    </Button>
                </div>

                {/*Banner*/}
                <div className="relative w-full aspect-[2/1] mt-6">
                    <Image
                        alt="Agende nos melhores com VidaPlus"
                        src="/banner01.png"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
                {/* Agendamentos*/}
                <h2 className=" mt-6 mb-3text-xs font-bold uppercase text-gray-400">
                    Agendamentos
                </h2>
                <Card>
                    <CardContent className="flex justify-between p-0">
                        {/*Esquerda */}
                        <div className="flex flex-col gap-2 py-5 pl-5">
                            <Badge className="w-fit">Confirmado</Badge>
                            <h3 className="font-semibold">Exame de Sangue</h3>

                            <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src="https://portalhospitaisbrasil.com.br/wp-content/uploads/2023/08/Hospital-Santa-Cruz.jpg" />
                                </Avatar>
                                <p className="text-sm">Hospital Santa Cruz</p>
                            </div>
                        </div>
                        {/*Direita */}
                        <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
                            <p className="text-sm">Junho</p>
                            <p className="text-2xl">19</p>
                            <p className="text-sm">15:00</p>
                        </div>
                    </CardContent>
                </Card>
                <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">
                    Recomendados
                </h2>

                <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
                    {Hospital.map((hospital) => (
                        <HospitalItem key={hospital.id} hospital={hospital} />
                    ))}
                </div>
            </div>
            <footer>
                <Card>
                    <CardContent className="px-5 py-6">
                        <p className="text-sm text-gray-400">
                            © 2025 <span className="font-bold">VidaPlus</span>.
                            Desenvolvido por Alexandre Vinicius Costa como parte
                            de projeto acadêmico.
                        </p>
                    </CardContent>
                </Card>
            </footer>
        </div>
    );
};

export default Home;
