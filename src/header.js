import css from './header.css'

function Header() {
    return (
        <header className="main-header">
            <nav>
                <div className="header-title">Imagine Upline</div>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
