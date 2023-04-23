import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'

const Landing = () => {
	return (
	<Wrapper>
		<nav>
			<img src={logo} alt="jobify" className='logo'/>
		</nav>
		<div className="container page">
			<div className="info">
				<h1>
					job <span>tracking</span> app
				</h1>
					<p>I'm baby tbh bicycle rights waistcoat lyft pork belly pinterest. Enamel pin hexagon tousled iceland deep v vegan. Roof party sartorial art party tonx mukbang mustache. Austin praxis quinoa street art seitan hashtag ramps la croix.
					</p>
					<button className= 'btn btn-hero'>Login/Register</button>
			</div>
			<img src={main} alt='job hunt' className='img main-img'/>
		</div>		
	</Wrapper>
	)
}

const Wrapper= styled.main`
nav {
	width: var(--fluid-width);
	max-width: var(--max-width);
	margin: 0 auto;
	height: var(--nav-height);
	display: flex;
	align-items: center;
}
.page{
	min-height: calc(100vh - var(--nav-height));display: grid;
	align-items
	margin-top: -3rem;
}

h1 {
	font-weight: 700;
	span {
color: var(--primary-500);
	}
}
p{
	color: var(--primary-500);
}

.main-img{
	display:none;
}
@media(min-width:992px){
	.page{
		grid-template-columns: 1fr 1fr;
		column-gap: 3rem;
	}
	.main-img{
		display: block;
	}
}


`

export default Landing

