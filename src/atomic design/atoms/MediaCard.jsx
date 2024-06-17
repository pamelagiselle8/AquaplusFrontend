import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function MediaCard({
  ImageSource,
  Title,
  User,
  Text,
  HyperlinkText,
  MediaLink,
  modoEditar = false,
}) {
  return (
    <Card fullWidth>
      <CardHeader className="flex gap-3">
        <Image
          alt="media logo"
          height={40}
          radius="sm"
          src={ImageSource}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-medium">{Title}</p>
          {modoEditar && <p className="text-small text-default-500">{User}</p>}
        </div>
      </CardHeader>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={User}>
          {HyperlinkText}
        </Link>
      </CardFooter>
    </Card>
  );
}
