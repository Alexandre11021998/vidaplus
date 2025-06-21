import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BookingItem = () => {
    return (
        <>
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
        </>
    );
};

export default BookingItem;
