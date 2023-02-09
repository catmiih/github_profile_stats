import logo from '../assets/github-w.png'

export function Menu() {
    return (
        <div className="bg-black w-screen h-20 text-white flex justify-between items-center lg:px-40">
            <div className='flex justify-center items-center'>
                <img src={logo} alt="" className='w-7 mx-5' />
                <p className='font-bold text-md uppercase hidden lg:flex'>Pesquisa de perfil do github</p>
            </div>

            <p className='font-bold uppercase text-sm text-center text-zinc-500 hidden lg:flex'>Api utilizada: &nbsp;
                <a href="https://docs.github.com/pt/rest?apiVersion=2022-11-28" className='hover:text-zinc-50 transition-all'>
                    https://docs.github.com/pt/...
                </a>
            </p>

        </div>
    )
}