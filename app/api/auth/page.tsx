import Search from "@/app/components/search";
import Header from "@/app/components/ui/header";
import HospitalItem from "@/app/components/ui/hospital-item";
import { db } from "@/app/lib/prisma";

interface HospitalPageProps {
    searchParams: {
        search?: string;
    };
}

const HospitalPage = async ({ searchParams }: HospitalPageProps) => {
    const hospital = await db.hospital.findMany({
        where: {
            name: {
                contains: searchParams?.search,
                mode: "insensitive",
            },
        },
    });

    return (
        <div>
            <Header />
            <div className="my-6 px-5">
                <Search />
            </div>

            <div className="px-5">
                <h2>{`Resultados para "${searchParams?.search}"`}</h2>
                <div className="grid grid-cols-2 gap-4">
                    {hospital.map((hospital) => (
                        <HospitalItem key={hospital.id} hospital={hospital} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HospitalPage;
