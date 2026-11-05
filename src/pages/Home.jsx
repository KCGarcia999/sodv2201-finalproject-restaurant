import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
        <h1>Nondescript Restaurant Name</h1>

        <Link to="/admin">Login as Admin</Link>
        <br/><br/>
        <Link to="/order">Login as Customer</Link>
        </>
    )
}

export default Home