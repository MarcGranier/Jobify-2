import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
	return (
	<Wrapper>
		<nav>
			<Logo />
		</nav>
		<div className="container page">
			<div className="info">
				<h1>
					job <span>tracking</span> app
				</h1>
					<p>I'm baby tbh bicycle rights waistcoat lyft pork belly pinterest. Enamel pin hexagon tousled iceland deep v vegan. Roof party sartorial art party tonx mukbang mustache. Austin praxis quinoa street art seitan hashtag ramps la croix.
					</p>
					<Link to='/register' className= 'btn btn-hero'>Login/Register
					</Link>
			</div>
			<img src={main} alt='job hunt' className='img main-img'/>
		</div>		
	</Wrapper>
	)
}



export default Landing

