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
        <Link href={url} target="_blank"><Card className="py-4 bg-default-50">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
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
        </Link>
    );
}
