import { Input } from "@/components/ui/input";
import Header from "./components/ui/header";
import { Button } from "./components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
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
                <Card className="mt-6">
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
            </div>
        </div>
    );
};

export default Home;
