import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function MediaCard({ ImageSource, Title, User, Text, HyperlinkText, MediaLink }) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="media logo"
                    height={40}
                    radius="sm"
                    src={ImageSource}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{Title}</p>
                    <p className="text-small text-default-500">{User}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{Text}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href={MediaLink}
                >
                    {HyperlinkText}
                </Link>
            </CardFooter>
        </Card>
    );
}
