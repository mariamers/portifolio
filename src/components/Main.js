import React from 'react'
import Card from './Card'
import Skills from './Skills'
import Projects from './Projects'

const Main = () => {
    return (
        <main className=' text-white'>
            <div class="mx-auto grid max-w-4xl grid-cols-12 gap-4 bg-zinc-50 p-1">
                <div class="col-span-12 rounded-lg  bg-gray-200 sm:col-span-4">
                    <Card>
                        <div className="relative aspect-square rounded-full size-32 flex flex-grow flex border mx-auto bg-white/5 border-white/10 before:absolute before:-inset-2 before:border-white/5 before:bg-white/5 before:rounded-full"></div>
                        <div className="mt-6 text-center relative z-10 space-y-2">
                            <h2 className="text-lg font-medium  transition group-hover:text-purple-950 text-white">Maria Ramos</h2>
                            <p className="text-gray-300">FRONT-END DEVELOPER E WEB DESIGNER.</p>
                        </div>
                    </Card>
                </div>
                <div class="col-span-12 rounded-lg flex bg-gray-200 sm:col-span-8">
                    <Card Title="Sobre mim">
                <p className="col-span-full sm:col-span-full lg:col-span-4 overflow-hidden relative rounded-xl text-white ">
                    Olá! Sou Maria Eduarda, estudante de Comunicação em Mídias Digitais na Universidade Federal da Paraíba, onde também desenvolvo pesquisas científicas na área de Análise de Sentimentos com Python e ChatGPT. Sou apaixonada por tecnologias da comunicação, arte moderna e amo aprender sobre novas culturas.Tenho conhecimento nas áreas de desenvolvimento web e webdesign, design gráfico, gestão de projetos, escrita para redes sociais e análise e gestão de mídias digitais.
                </p>
                    </Card>
                </div>

                <div class="col-span-12 rounded-lg flex justify-center items-center border border-gray-300 bg-gray-600">
                    <Card Title="Habilidades"><Skills/></Card>
                </div>

                <div class="col-span-12 rounded-lg flex">
                    <Card Title="Projetos">
                        <Projects />
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Main