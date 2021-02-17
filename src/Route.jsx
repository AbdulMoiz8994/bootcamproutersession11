import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//import all comp in single files
// import {Home,About,Product} from './Pages/index'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Product} from './Pages/Product'
import {Productitem} from './Pages/Productitem'
// import {NestedRouterofProduct} from './Pages/NestedRouterofProduct'
import {NavBar} from './NavBar'
import {Error} from './Pages/Error'

export const Routers = () => {

const Name=()=>{
    return <h1>Hello This is Name page</h1>
}


    return (
        <div>
            {/* <h1>hello</h1> */}

        <Router>                 
           <NavBar/>
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/about/name" element={<Name/>}/>
            <Route   path="/product" element={<Product/>}/>
            <Route  exact path="/product/:id" element={<Productitem/>}/>
            {/* <Route  exact path="/product/:id/nestedRouter" element={<NestedRouterofProduct/>}/> */}
         
            <Route   path="*" element={<Error/>}/>

        </Routes>
        </Router>
        </div>

    )
}
