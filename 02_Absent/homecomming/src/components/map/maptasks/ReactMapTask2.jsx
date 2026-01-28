import React from 'react'

const ReactMapTask2 = () => {
    let names = ["Raj", "Sham", "Ghansham", "Radhesham", "Rajaram", "Jayram"];

    return (
        <div>
            <h1>ReactMapTask2</h1>
            <h2>List of Names</h2>
            
            <ol>{names.map((names, index) => {
                return (
                    <li key={index}>{names}</li>
                )
            })}</ol>
        </div>
    )
}

export default ReactMapTask2