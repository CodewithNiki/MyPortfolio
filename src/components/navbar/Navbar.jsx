import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <span>Nike</span>
            <div className="nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar