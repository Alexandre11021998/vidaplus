import PhoneItem from "@/app/components/ui/phone-item";
import ServiceItem from "@/app/components/ui/service-item";
import SidebarSheet from "@/app/components/ui/sidebar-sheet";

import { db } from "@/app/lib/prisma";
import { Button } from "@/components/ui/button";
import { SheetTrigger } from "@/components/ui/sheet";
import {
    ChevronLeftIcon,
    MapPinIcon,
    MenuIcon,
    Sheet,
    StarIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface HospitalPageProps {
    params: {
        id: string;
    };
}

const HospitalPage = async ({ params }: HospitalPageProps) => {
    //chamar banco de dados
    const hospital = await db.hospital.findUnique({
        where: {
            id: Number(params.id),
        },
        include: {
            services: true, // Assuming you have an image relation
        },
    });

    if (!hospital) return notFound;

    return (
        <div>
            {/*IMAGEM*/}
            <div className="relative w-full h-[250px]">
                <Image
                    alt={hospital.name}
                    src={hospital?.imageUrl}
                    fill
                    className="object-cover"
                />

                <Button
                    asChild
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                >
                    <Link href="/">
                        <ChevronLeftIcon />{" "}
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            size="icon"
                            variant="outline"
                            className="absolute right-4 top-4"
                        >
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet />
                </Sheet>
            </div>

            <div className="border-b border-solid p-5">
                <h1 className="mb-3 text-xl font-bold">{hospital.name}</h1>
                <div className="mb-2 flex items-center gap-1">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{hospital?.address}</p>
                </div>

                <div className="flex items-center gap-1">
                    <StarIcon className="text-primary fill-primary" />
                    <p className="text-sm">5,0 (1.499 avaliações)</p>
                </div>
            </div>
            {/*DESCRIÇÃO*/}
            <div className="space-y-2 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-grey-400">
                    Sobre nós
                </h2>
                <p className="text-justify text-sm">{hospital?.description}</p>
            </div>
            {/*SERVIÇOS*/}
            <div className="space-y-3 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400">
                    Serviços
                </h2>
                <div className="space-y-3">
                    {hospital.services.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                    ))}
                </div>
            </div>
            {/*CONTATO*/}
            <div className="p-5 space-y-3">
                {hospital.phones.map((phone) => (
                    <PhoneItem key={phone} phone={phone} />
                ))}
            </div>
        </div>
    );
};

export default HospitalPage;
