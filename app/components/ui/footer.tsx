import { Card, CardContent } from "@/components/ui/card";

const Footer = () => {
    return (
        <footer>
            <Card>
                <CardContent className="px-5 py-6">
                    <p className="text-sm text-gray-400">
                        © 2025 <span className="font-bold">VidaPlus</span>.
                        Desenvolvido por Alexandre Vinicius Costa como parte de
                        projeto acadêmico.
                    </p>
                </CardContent>
            </Card>
        </footer>
    );
};

export default Footer;
