import React, { useState } from 'react'

const ReactMapTask3 = () => {

    let [data, setData] = useState([]);
    let fetching = async () => {
        let res = await fetch("https://api.github.com/users");
        setData(await res.json());
    };

    return (
        <div>
            <button onClick={fetching}> Fetch API</button>
            {data.map((user) => {
                return (
                    <div>
                        <h1>{user.login}</h1>
                        <img width="200px" src={user.avatar_url} alt="" />
                        <br />
                        <a href={user.html_url}>GitHub Profile</a>
                    </div>
                )
            })}
        </div >
    )
}

export default ReactMapTask3