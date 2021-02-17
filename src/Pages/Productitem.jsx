import React from 'react'
// import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

export const Productitem = () => {
const {id}=useParams()
console.log(id)
    return (
        <div>
            <h1>This is product item {id}</h1>
            {/* <Link to="/product/:id/nestedRouter" as="li">Nested Router link</Link>   */}

        </div>
    )
}
