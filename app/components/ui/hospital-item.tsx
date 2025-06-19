import { Hospital } from "@/app/generated/prisma";

interface HospitalItemProps {
    hospital: Hospital;
}

const HospitalItem = ({ hospital }: HospitalItemProps) => {
    return <h1>{hospital.name}</h1>;
};

export default HospitalItem;
