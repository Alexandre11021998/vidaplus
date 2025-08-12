import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import Image from "next/image";
import SidebarSheet from "./sidebar-sheet";

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
                    <SidebarSheet />
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;
