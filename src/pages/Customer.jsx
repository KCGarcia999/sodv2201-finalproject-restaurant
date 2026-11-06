import { Link } from 'react-router-dom'
import OrderMenu from '../components/OrderMenu'
import Reservations from '../components/Reservations'

function Customer(){
    return(
        <>
            <h1>Order Page</h1>
            <Link to="/">Log Out</Link>
            <OrderMenu />
            <Reservations />
            
        </>
    )
}

export default Customer