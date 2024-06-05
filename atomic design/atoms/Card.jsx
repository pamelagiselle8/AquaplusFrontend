import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function App({ text }) {
    return (
        <Card>
            <CardBody>
                <p>{text}</p>
            </CardBody>
        </Card>
    );
}