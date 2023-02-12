import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { InfoUser } from "./infoUser";

export function Search() {
  const [username, setUsername] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      getUserData(username);
    }
  }

  function getUserData(username: string) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.error(error));
  }

  const [userData, setUserData] = useState<object | null>(null);

  return (
    <div>
      <div className="flex justify-center my-5">
        <div className="flex justify-center flex-wrap lg:w-2/4 sm:w-screen">
          <h1 className="font-bold uppercase text-3xl p-5 text-center">
            Inicie sua pesquisa agora
          </h1>
          <form onSubmit={handleSubmit} className="lg:w-full sm:w-screen">
            <div className="border-2 rounded-xl bg-zinc-900 text-white mx-5 px-5 py-5 lg:w-full flex justify-center items-center">
              <FaSearch className="w-10" />
              <input
                type="text"
                placeholder="MeuUsuario"
                className="placeholder:italic w-full mx-3 bg-transparent focus:outline-0"
                value={username}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center flex-wrap lg:w-screen sm:w-screen">
        <InfoUser username={username} userData={userData} />
      </div>
    </div>
  );
}
