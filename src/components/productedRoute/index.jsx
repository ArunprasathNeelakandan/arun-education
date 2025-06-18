import Cookies from "js-cookie"
import {Navigate} from 'react-router-dom'

const ProductedRoute = ({children}) => {

    const jwtToken = Cookies.get(import.meta.env.VITE_JWT_KEY) 

    if (!jwtToken)(
        <Navigate to={'/login'} replace/>
    )

    return children
}

export default ProductedRoute