import React from 'react'
// import {Link} from 'react-router-dom'
import {useParams,useLocation} from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
export const Productitem = () => {
const {id}=useParams()

const location=useLocation()
console.log(location)
console.log(id)
// const history=useHistory()
// console.log(history);


    return (
        <div>
            <h1>This is {id} product item </h1>
            <h2>My Current Location is {location.pathname}</h2>
            {location.pathname === `/product/moiz` ? <button onClick={() => alert(`This is our Real ${location.pathname}`)}>On Click</button> : null}
            {/* <Link to="/product/:id/nestedRouter" as="li">Nested Router link</Link>   */}

        </div>
    )
}
