import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const Test = () => {
    let [api, setApi] = useState([]);

    let [state, setState] = useState({
        quote: "",
        author: "",
        id: uuidv4(),
    });

    useEffect(() => {
        axios.get('http://localhost:3000/quotes').then((res) => {
            setApi(res.data);
        })


    }, [])
    // console.log(api);


    let handle = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }


    let submit = (e) => {
        e.eventDefault();
        axios.post("http://localhost:3000/quotes", state).then(() => {
            setState({
                quote: "",
                author: "",
                id: uuidv4(),
            })
        })
        axios.get("http://localhost:3000/quotes").then((res) => {
            setApi(res.date)
        })
    }


    // console.log(state);


    return (
        <div>
            <div>
                <form onSubmit={submit} action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <input type="text" onChange={handle} name='quote' value={state.quote} /><br /><br />
                    <input type="text" onChange={handle} name='author' value={state.author} /><br /><br />
                    <button>Submit</button>
                </form>
            </div>


            <div>
                {
                    api.map((value) => {
                        return (
                            <div key={value.id}>
                                <h1>{value.author}</h1>
                                <h3>{value.quote}</h3>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Test