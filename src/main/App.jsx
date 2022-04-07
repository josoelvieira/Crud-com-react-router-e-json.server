import Footer from '../components/template/Footer'
import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'


export default props =>
    <HashRouter>   
        <div className='app'>
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
        </HashRouter>