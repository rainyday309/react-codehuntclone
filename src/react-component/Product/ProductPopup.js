import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component {
	constructor (){
		super();
		this.state = {
			product: {
					id: 1,
					name: 'CodeAcademy',
					link: 'https://codeacademy.com',
					media: "/img/codecademy.jpeg",
					upvote: 169,
					description: "code for anyone",
					maker: {
						name: 'hieu',
						avatar: '/img/hieu.jpeg'
					}				
			}
		}
	}

	renderUpvoteButton() {
		return (
				<a className="upvote-button" href="#">
					<span>
						<i className="fa fa-sort-asc"></i>
					</span>

					{this.state.product.upvote}
				</a>			
			);
	}

	renderHeader (){
		return (
				<header style={{backgroundImage: 'url(' + this.state.product.media + ')'}}>
					<section className="header-shadow">
						<h1>{this.state.product.name}</h1>
						<p>{this.state.product.description}</p>
						<section>
							{this.renderUpvoteButton()}
							<a className="getit-btn" href={this.state.product.link} target="_blank">GET IT</a>
						</section>
					</section>
				</header>
			);
	}


	render(){
		return (
				<Popup {...this.props} style="product-popup">
				  {this.renderHeader()}
				</Popup>
			);
	}
}

export default ProductPopup;