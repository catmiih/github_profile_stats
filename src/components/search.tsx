import { FaSearch } from 'react-icons/fa';

export function Search() {
    return (
        <div className='flex justify-center my-5'>
            <div className='flex justify-center flex-wrap lg:w-2/4 sm:w-screen'>
                <h1 className="font-bold uppercase text-3xl p-5 text-center">Inicie sua pesquisa agora</h1>

                <div className="border-2 rounded-xl bg-zinc-900 text-white mx-5 px-5 py-5 w-full flex justify-center items-center">
                    <FaSearch className='w-10' />
                    <input type="text" placeholder="MeuUsuario" className="placeholder:italic w-full mx-3 bg-transparent focus:outline-0" />
                </div>
            </div>
        </div>
    )
}