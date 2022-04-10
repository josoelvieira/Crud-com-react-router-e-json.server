import './Logo.css'
import logo from '../../assets/imgs/cvl_0-removebg-preview.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className='logo'>
        <Link to='/' className='logo'>
            <img src={logo} alt='Logo' />
            </Link>
    </aside>