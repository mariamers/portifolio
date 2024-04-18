
const habilidadeItems = [
    {
        id: 0,
        Titulo: 'HTML5',
        imgUrl: require('../assets/html5.png'),
        Experiencia: '2 anos de experiência',

    },
    {
        id: 1,
        Titulo: 'CSS3',
        imgUrl: require('../assets/CSS3.png'),
        Experiencia: '2 anos de experiência',

    },
    {
        id: 2,
        Titulo: 'JavaScript',
        imgUrl: require('../assets/JS.png'),
        Experiencia: '1 ano de experiência',

    },

    {
        id: 3,
        Titulo: 'React',
        imgUrl: require('../assets/react.png'),
        Experiencia: '5 meses de experiência',

    },
];

export default function habilidades() {
    return (
            <div className='flex flex-row gap-4 justify-between'>
                {habilidadeItems.map(habilidade =>
                    <div className='text-white p-2 center bg-gray-50/40 shadow-md flex flex-col rounded-md justify-center items-center' key={habilidade.id}>
                        <img src={habilidade.imgUrl} alt={'Foto de ' + habilidade.Titulo} className='h-24 w-auto p-2 object-contain'/>
                        <h6>{habilidade.Titulo}</h6>
                        <p>{habilidade.Experiencia}</p>
                    </div>
                )}
            </div>
    )

}


