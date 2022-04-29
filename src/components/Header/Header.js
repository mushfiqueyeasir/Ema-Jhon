import './Header.css';
import logo from '../../images/Logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import url from '../../images/avatar.jpg'


const Header = ({ handleSearch, search }) => {

    const auth = getAuth(app)
    const [user, loading, error] = useAuthState(auth);

    try {
        search();
    } catch (error) {

    }
    const handleSignOut = () => {

        signOut(auth).then(() => {
            user = '';
        }).catch((error) => {
            // An error happened.
        });
    }

    return (

        <header className='header p-0 pt-2 '>
            <nav className="navbar navbar-expand-lg navbar-dark header container py-3">
                <div className="container-fluid">
                    <img src={logo} alt="" className='img-fluid w-25' />

                    <input type="text" className='form-control ms-0 me-1 me-lg-0 ms-lg-5' onChange={handleSearch} id='search' />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav headerItem ">
                            <NavLink className="link" to='/'>Home</NavLink>
                            <NavLink className="link" to="/products">Products</NavLink>
                            {
                                user?.uid
                                    ?
                                    <NavLink className="link" to="/overview">Order Overview</NavLink>
                                    :
                                    <></>

                            }

                            {
                                user?.uid
                                    ?
                                    <>
                                        <li className="nav-item">
                                            <button onClick={handleSignOut} className="signout nav-link active">Sign Out</button>
                                        </li>
                                        <li className="nav-item">
                                            <img src={user.photoURL ? user.photoURL : url} className='resizeImage' alt="" />
                                        </li>
                                    </>

                                    :
                                    <NavLink className="link" to="/join">Join Us</NavLink>
                            }


                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;