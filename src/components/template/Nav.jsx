import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"> Início</i>
            </a>
            <a href="#/users">
                <i className="fa fa-users"> Usuários</i>
            </a>
        </nav>
    </aside>