import React from 'react';
import MediaCard from '../atoms/MediaCard'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo MediaCard

export default function RedesSociales() {
    return (
        <div>
            <div style={{ paddingBottom: "5%" }}>
                <MediaCard
                    ImageSource="assets/instagramlogo.png"
                    Title="Nuestro Instagram"
                    User="@AquaplusHN"
                    Text="Slogan para Instagram"
                    HyperlinkText="Ir a Instagram"
                    MediaLink="https://github.com/nextui-org/nextui"
                />
            </div>
            <MediaCard
                ImageSource="assets/facebooklogo.png"
                Title="Nuestro Facebook"
                User="Aquaplus"
                Text="Slogan para Facebook"
                HyperlinkText="Ir a Facebook"
                MediaLink="https://github.com/nextui-org/nextui"
            />
        </div>
    );
};
