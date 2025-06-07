import { Input } from "@/components/ui/input";
import Header from "./components/ui/header";
import { Button } from "./components/ui/button";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="p-5">
                <h2 className="text-xl font-bold">Olá, paciente!</h2>
                <p>Sábado, 07 de junho</p>

                <div className="flex items-center gap-2 mt-6">
                    <Input placeholder="Faça sua busca..." />
                    <Button>
                        <SearchIcon />{" "}
                    </Button>
                </div>

                <div className="relative w-full aspect-[2/1] mt-6">
                    <Image
                        alt="Agende nos melhores com VidPlus"
                        src="/banner01.png"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
