import {Link} from 'react-router-dom'

function Nav(){
	return(
		<div className="navbar">
		   <Link to="/">Home</Link>
		   <Link to="/"about>About</Link>
		   <Link to="/Contact">Contact</Link>
		 </div>  
		)
}
export default Nav