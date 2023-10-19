


const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo"
    src="https://1000logos.net/wp-content/uploads/2018/08/The-World%E2%80%99s-Top-20-Restaurant-Logos-768x432.jpg" />
</a>)

const Header = () => {
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};

export default Header
