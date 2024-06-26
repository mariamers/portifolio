
import React from 'react';
export default function Header() {
    return (
        <header className="bg-white/95 sticky top-0 z-10">
            <nav class="border-gray-200 mb-10 mx-2 p-4  flex flex-wrap items-center content-center justify-around">
                        <a href="#" class="flex">
                            <span class="self-center text-lg font-semibold whitespace-nowrap">index.maria</span>
                        </a>
                        <div class="flex md:hidden md:order-2">
                            <button data-collapse-toggle="mobile-menu-3" type="button"
                                class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-lg inline-flex items-center justify-center"
                                aria-controls="mobile-menu-3" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="hidden md:flex justify-between items-end w-full md:w-auto md:order-1" id="mobile-menu-3">
                            <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <a href="#"
                                        class="bg-purple-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-purple-700 md:p-0 rounded"
                                        aria-current="page">Início</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-purple-700 md:p-0">Projetos</a>
                                </li>
                                <li>
                                    <a href="#"
                                        class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-purple-700 md:p-0">Currículo</a>
                                </li>
                            </ul>
                        </div>
            </nav>
        </header>
    );
}