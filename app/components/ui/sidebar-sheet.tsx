"use client";

import { QuickSearchOptions } from "@/app/_constants/search";
import {
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";

import {
    Link,
    HomeIcon,
    CalendarIcon,
    LogOutIcon,
    LogInIcon,
} from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const SidebarSheet = () => {
    const { data } = useSession();
    const handleLoginWithGoogleClick = async () => signIn("google");
    const handleLogoutClick = async () => signOut();

    return (
        <SheetContent className="overflow-y-auto">
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="justify-between py-5 flex items-center border-b border-solid gap-3">
                <h2 className="font-bold">Ola, faça seu login!</h2>

                {data?.user ? (
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src={data?.user?.image ?? ""} />
                        </Avatar>
                        <div>
                            <p className="font-bold">{data.user.name}</p>
                            <p className=" text-xs">{data.user.email}</p>
                        </div>
                    </div>
                ) : (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="icon">
                                <LogInIcon />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[90%]">
                            <DialogHeader>
                                <DialogTitle>
                                    Faça login na plataforma
                                </DialogTitle>
                                <DialogDescription>
                                    Conecte-se usando sua conta Google.
                                </DialogDescription>
                            </DialogHeader>
                            <Button
                                variant="outline"
                                className="font-bold gap-1"
                                onClick={handleLoginWithGoogleClick}
                            >
                                <Image
                                    alt="Fazer login com o google"
                                    width={18}
                                    height={18}
                                    src="/google.svg"
                                />
                                Google
                            </Button>
                        </DialogContent>
                    </Dialog>
                )}
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
                <Button className="justufy-start gap-2" variant="ghost">
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
                    onClick={handleLogoutClick}
                >
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>
        </SheetContent>
    );
};

export default SidebarSheet;
