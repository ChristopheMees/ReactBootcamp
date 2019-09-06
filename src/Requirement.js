import React from 'react'

export default function Requirements()
{
    return  <>
                <h1>Best TODO app Requirements</h1>
                <ul style={{fontSize: "16"}}>
                    <li>Show a list of TODOS</li>
                    <li>Create new TODOS and add them to the list</li>
                    <li>Ability to finish TODOS</li>
                    <li>Filter TODO list on all/unfinished</li>
                    <li>Update existing TODO</li>
                    <li>Delete TODO</li>
                    <li>NO REACT COMPONENT STATE</li>
                    <li>no unnecessary rerenders</li>
                    <li>(optional) Integrate TODO boot app</li>
                </ul>
            </>
}
