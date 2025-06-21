import { Hospital } from "@/app/generated/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface HospitalItemProps {
    hospital: Hospital;
}

const HospitalItem = ({ hospital }: HospitalItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                {/*IMAGEM*/}
                <div className="relative h-[159px] w-full">
                    <Image
                        alt="hospital.name"
                        fill
                        className="rounded-2xl object-cover"
                        src={hospital.imageUrl}
                    />
                </div>

                {/*TEXTO*/}
                <div className="px-1 py-3">
                    <h3 className="truncate font-semibold">{hospital.name}</h3>
                    <p className="text-sm text-gray-400 truncate">
                        {hospital.address}
                    </p>
                    <Button variant="secondary" className="w-full mt-3">
                        Agendar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default HospitalItem;
