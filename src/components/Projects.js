import { useState } from "react";
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowForward } from "react-icons/io";


export default function Projects() {
    const ProjetosItems = [

        {
            id: 1,
            Titulo: 'Site do Twice',
            ProjetoUrl: 'https://mariamers.github.io/html5/twice/',
            Info: 'Projeto da disciplina de Internet II, site baseado nos anos 2000',

        }
    ];
    
    const [isActive, setIsActive] = useState(false);
    const handleClick = event => {
        setIsActive(current => !current);
    }
    
    return (
        <div>
            {ProjetosItems.map(projeto =>
                <li key={projeto.id} class=" cursor-pointer list-none transition ease-in-out" onClick={handleClick}>
                        <div className="flex flex-row items-center">
                        {isActive ? (
                            <IoIosArrowDown />
                        ) : (<IoIosArrowForward/>)}
                        
                        Projeto 0{projeto.id}: {projeto.Titulo}
                        </div>
                    {isActive && (
                        <div className="py-2 pl-6">
                            <li>{projeto.Info}</li>
                            <a href={projeto.ProjetoUrl} target="_blank" className=" flex flex-row items-center gap-2 hover:bg-gray-200/30 p-2 rounded-md w-fit">link aqui <IoIosArrowDropright /></a>
                        </div>
                    )}
                </li>

            )}

        </div>

    )
}