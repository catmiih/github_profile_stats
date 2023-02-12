import { useState, useEffect } from "react";
import GitHubButton from 'react-github-btn';
import { BsGithub } from "react-icons/bs";

interface UserProps {
  username: string;
  userData: any;
}

interface FollowerProps {
  login: string;
  avatar_url: string;
  html_url: string
}

export function InfoUser(props: UserProps) {
  const [user, setUser] = useState(props.userData);
  const [followers, setFollowers] = useState<FollowerProps[]>([]);

  useEffect(() => {
    setUser(props.userData);

    fetch(`https://api.github.com/users/${props.username}/followers`)
      .then(response => response.json())
      .then(data => setFollowers(data.slice(0, 5)))
      .catch(error => console.error(error));
  }, [props.username, props.userData]);

  return (
    <div>
      { props.username != "" ?
      
        user ? (
          <div className="px-10">
            <div className="flex w-100 flex-wrap justify-center items-center">
              <div className="lg:w-1/4 w-2/3 lg:mx-5 my-10">
                <img src={user.avatar_url} alt={user.name} className="rounded-xl" />
              </div>

              <div>
                <p className="font-bold text-3xl">{user.name} • {user.login}</p>
                <p className="mt-1 font-semibold">{user.bio}</p>
                <p className="mt-3 text-1xl font-light">{user.company}</p>
                <br />
                <GitHubButton href={user.html_url}>Follow @{user.login}</GitHubButton>

              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              {followers.length > 0 ? (
                <div className="flex flex-wrap justify-center w-1/2">
                  <h2 className="font-bold text-3xl my-5 w-full text-center">Seguidores recentes</h2>

                  <div className="flex justify-center mb-10 min-w-fit">
                    {followers.map(follower => (
                      <div key={follower.login} className="flex flex-wrap mx-2 bg-stone-700/70 text-white justify-center px-3 py-5 rounded-xl opacity-70 hover:opacity-100">
                        <div className="w-28 mb-5">
                          <img src={follower.avatar_url} alt={follower.login} className="rounded-lg" />
                        </div>

                        <p
                          className="w-full text-center font-bold"
                          style={{
                            maxWidth: '15ch',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                          {follower.login}
                        </p>

                        <a href={follower.html_url} target="_blank" className="flex justify-center items-center bg-black p-2 rounded-lg mt-5">
                          <BsGithub />
                          <p className="ml-2" style={{
                            maxWidth: '10ch',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            @{follower.login}
                          </p>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) :
                <p>Nenhum seguidor encontrado</p>
              }
            </div>

          </div>
        ) : (
          <p>Usuário não encontrado</p>
        )
        : <p>Usuário não encontrado</p>}
    </div >
  );
}