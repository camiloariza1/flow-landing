import React from 'react';

interface HeaderProps {
    setCurrentPage: (page: string) => void;
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage, currentPage }: HeaderProps) => {
    const navItems = [
        { name: 'Pagina Principal', key: 'home' },
        { name: 'Encuesta', key: 'survey' },
        // Add more navigation items here
    ];

    return (
        <header className="bg-flow-vibrant-green py-4 px-6 sm:px-8 transition-all duration-300 ease-in-out">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold">Flow Capital</div>
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item.key}>
                            <button
                                onClick={() => setCurrentPage(item.key)}
                                className={`text-white hover:text-gray-200 transition-colors duration-300 ${currentPage === item.key ? 'font-bold' : ''
                                    }`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;