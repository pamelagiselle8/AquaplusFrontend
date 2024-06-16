import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

export default function App({ title, text }) {
    return (
        <Card>
            <CardHeader style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <p>{title}</p>
            </CardHeader>
            <CardBody style={{ textAlign: 'center', justifyContent: 'center' }}>
                <p>{text}</p>
            </CardBody>
        </Card>
    );
}
