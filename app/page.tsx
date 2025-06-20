import { Input } from "@/components/ui/input";
import Header from "./components/ui/header";
import { Button } from "./components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "./lib/prisma";
import HospitalItem from "./components/ui/hospital-item";
import { QuickSearchOptions } from "./_constants/search";
import BookingItem from "./components/ui/booking-item";

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
                    {QuickSearchOptions.map((options) => (
                        <Button
                            key={options.title}
                            className="gap-2"
                            variant="secondary"
                        >
                            <Image
                                src={options.imageUrl}
                                width={16}
                                height={16}
                                alt={options.title}
                            />
                            {options.title}
                        </Button>
                    ))}
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
                <BookingItem />

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
