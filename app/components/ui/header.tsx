import { QuickSearchOptions } from "@/app/_constants/search";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar } from "@radix-ui/react-avatar";
import {
    CalendarIcon,
    HomeIcon,
    Link,
    LogOutIcon,
    MenuIcon,
} from "lucide-react";
import Image from "next/image";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Image alt="VidaPlus" src="/logo.png" height={40} width={120} />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="overflow-y-auto">
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>

                        <div className="py-5 flex items-center border-b border-solid gap-3">
                            <Avatar>
                                <AvatarImage src="https://www.shutterstock.com/pt/image-vector/female-doctor-glasses-pensive-pose-thinking-2557338391" />
                            </Avatar>
                            <div>
                                <p className="font-bold">Alexandre Costa</p>
                                <p className=" text-xs">alexandre@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 py-5 border-b border-solid">
                            <SheetClose asChild>
                                <Button
                                    className="justufy-start gap-2"
                                    variant="ghost"
                                    asChild
                                >
                                    <Link href="/">
                                        Inicio
                                        <HomeIcon size={18} />
                                    </Link>
                                </Button>
                            </SheetClose>
                            <Button
                                className="justufy-start gap-2"
                                variant="ghost"
                            >
                                <CalendarIcon size={18} />
                                Agendamentos
                            </Button>
                        </div>

                        <div className="flex flex-col gap-1 py-5 border-b border-solid">
                            {QuickSearchOptions.map((option) => (
                                <Button
                                    key={option.title}
                                    className="justufy-start gap-2"
                                    variant="ghost"
                                >
                                    <Image
                                        alt={option.title}
                                        src={option.imageUrl}
                                        height={18}
                                        width={18}
                                    />
                                    {option.title}
                                </Button>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 py-5">
                            <Button
                                variant="ghost"
                                className="justify-start gap-2"
                            >
                                <LogOutIcon size={18} />
                                Sair da conta
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
