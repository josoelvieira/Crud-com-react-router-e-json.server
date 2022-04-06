import './Logo.css'
import logo from '../../assets/imgs/cvl_0-removebg-preview.png'

export default props =>
    <aside className='logo'>
        <a href='/' className='logo'>
            <img src={logo} alt='Logo' />
            </a>
    </aside>