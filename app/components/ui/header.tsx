import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";
import SidebarSheet from "./sidebar-sheet";
import Link from "next/link";

const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 flex flex-row items-center justify-between">
                <Link href="/">
                    <Image
                        alt="VidaPlus"
                        src="/logo.png"
                        height={40}
                        width={120}
                    />
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
