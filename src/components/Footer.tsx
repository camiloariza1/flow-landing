import React from 'react';

function Footer() {
    const handleSocialClick = (platform: string) => {
        // Here you can add logic to handle the click, e.g., opening a new window
        console.log(`Clicked on ${platform}`);
    };

    return (
        <footer className="bg-flow-black py-8 transition-all duration-300 ease-in-out">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-4 mb-4">
                    <button onClick={() => handleSocialClick('Twitter')} className="text-white hover:text-flow-vibrant-green">X</button>
                    <button onClick={() => handleSocialClick('Instagram')} className="text-white hover:text-flow-vibrant-green">Instagram</button>
                    <button onClick={() => handleSocialClick('Facebook')} className="text-white hover:text-flow-vibrant-green">Facebook</button>
                </div>
                <p className="text-center text-sm text-white">
                    Todos los derechos reservados, Flow Capital 2024
                </p>
            </div>
        </footer>
    );
}

export default Footer;