import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
        <h1>Nondescript Restaurant Name</h1>

        <Link to="/order">Login as Customer</Link>
        <br/><br/>
        <Link to="/admin">Login as Admin</Link>
        </>
    )
}

export default Home