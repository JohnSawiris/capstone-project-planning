import React from 'react';

// icons
import FaSearch from 'react-icons/lib/fa/search';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false
		};
		this.handleExpanding =  this.handleExpanding.bind(this);
	}

	handleExpanding() {
		let currExpand = this.state.expand;
		this.setState({
			expand: !currExpand
		});
	}

	render() {
		return(
			<div className="search-wrapper">
				<form>
					<FaSearch onClick={this.handleExpanding} style={searchIcon}/>
					<input className={(this.state.expand) ? 'search-bar expand' : 'search-bar'} placeholder="Look Up Your Exercises" type="text" />
				</form>
			</div>
		);
	}
}

const searchIcon = {
	width: '20px',
	height: '20px',
	color: 'rgba(255,255,255,0.6)',
	cursor: 'pointer'
};

export default SearchBar;
