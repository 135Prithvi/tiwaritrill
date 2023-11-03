import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";

type CardCProps = {
    title: string;
    imageSrc: string;
    url: string;
};

export default function CardC({ title, imageSrc, url }: CardCProps) {
    return (
        // <Link href={url} target="_blank" className="group">
            <Card className="py-4 dark:bg-slate-900 light:bg-slate-100
             shadow-xl">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {/* sm:group-hover:blur-sm sm:hover:!blur-none sm:hover:!scale-150 sm:hover:z-10 ease-in-out transition-all duration-500 */}
                    <h4 className="font-bold text-large">{title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt={title}
                        className="object-cover rounded-xl"
                        src={imageSrc}
                        width={1600}
                        height={900}
                    />
                </CardBody>
            </Card>
        // </Link>
    );
}
