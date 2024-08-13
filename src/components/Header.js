import React from 'react';

// Componente NavItem
const NavItem = ({ href, children, additionalClasses = "" }) => {
    return (
        <li>
            <a href={href} className={`text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 ${additionalClasses}`}>
                {children}
            </a>
        </li>
    );
};

// Componente NavBar
const NavBar = () => {
    return (
        <nav className="mb-10  p-4 flex flex-wrap items-center content-center gap-6">
            <a href="#" className="flex">
                <span className="self-center text-lg font-semibold whitespace-nowrap text-white">index.maria</span>
            </a>
            <div className="flex md:hidden md:order-2 ">
                <button data-collapse-toggle="mobile-menu-3" type="button"
                    className="md:hidden text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-lg inline-flex items-center justify-center"
                    aria-controls="mobile-menu-3" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className="hidden md:flex justify-between items-end w-full md:w-auto md:order-1" id="mobile-menu-3">
                <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <NavItem href="#">Início</NavItem>
                    <NavItem href="#">Projetos</NavItem>
                    <NavItem href="#">Sobre</NavItem>
                    <NavItem href="#">Contato</NavItem>
                </ul>
            </div>
        </nav>
    );
};

// Componente Header
export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-Green">
            <NavBar />
        </header>
    );
}
