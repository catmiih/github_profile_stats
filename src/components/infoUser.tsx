import { useState, useEffect } from "react";

interface userProps {
    username: string
  }

export async function InfoUser(props:userProps) {

    const [user, setUser] = useState<userProps | undefined>();

    const data = await fetch(`https://api.github.com/users/${props.username}`);

    useEffect(() => {
        data.json().then( (response) => setUser(response));
      }, []);

    return (
        <div>
            {user?.username}
        </div>
    )
}