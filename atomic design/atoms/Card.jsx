// import React from "react";
// import { Card, CardBody } from "@nextui-org/react";

// export default function App({ text }) {
//     return (
//         <Card>
//             <CardBody>
//                 <p>{text}</p>
//             </CardBody>
//         </Card>
//     );
// }

import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function App({ title, text }) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <p className="text-md">{title}</p>
            </CardHeader>
            <CardBody>
                <p>{text}</p>
            </CardBody>
        </Card>
    );
}