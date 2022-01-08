import React from 'react';

const NavigationBar = () => {
	return (
		<nav>
			<div class='nav-wrapper white '>
				<div class='initials-box'>
					<img
						src={require('../Navigation/Initials.png')}
						alt='Girl in a jacket'
						width='75'
						height='75'
						class='initials left'
					/>
				</div>

				<ul id='' class='right Box-Theme-Container'>
					<li class='Box-Theme '>
						<a href='#' class='black-text '>
							<img
								src={require('../Navigation/Experience.png')}
								alt='experience'
								width='125'
								height='25'
								class=' '
							/>
						</a>
					</li>
					<li class=' Box-Theme  '>
						<a href='#' class='black-text '>
							<img
								src={require('../Navigation/AboutMe.png')}
								alt='experience'
								width='125'
								height='25'
								class=' '
							/>
						</a>
					</li>
					<li class=' Box-Theme '>
						<a href='#' class='black-text '>
							<img
								src={require('../Navigation/Education.png')}
								alt='experience'
								width='125'
								height='25'
								class=' '
							/>
						</a>
					</li>
					<li class=' Box-Theme  '>
						<a href='#' class='black-text  '>
							<img
								src={require('../Navigation/Skills.png')}
								alt='experience'
								width='75'
								height='25'
								class=' '
							/>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavigationBar;
