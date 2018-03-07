import React from 'react';
import { connect } from 'react-redux';
// icons
import FaSearch from 'react-icons/lib/fa/search';
//actions
import { fetchExercises } from './../actions';
//Components
import ExercisesDetails from './ExercisesDetails';

function SearchBar(props) {
	let _searchTerm;

	function handleSubmit(event) {
		const { dispatch } = props;
		event.preventDefault();
		let searchTermValue = _searchTerm.value.charAt(0).toUpperCase() + _searchTerm.value.slice(1).toLowerCase();
		dispatch(fetchExercises(searchTermValue));
		console.log(searchTermValue);
		searchTermValue = '';
	}
	return(
		<div>
			<div className="search-wrapper">
				<h2 className="search-header">Look Up the Muscle group that you wish to work on</h2>
				<form className="search-from" onSubmit={handleSubmit}>
					<input
						className='search-bar'
						placeholder="Look Up Abs, Arms, Chest etc..."
						ref={(input) => { _searchTerm = input }}
						type="text" />
					 <button className="submit-btn" type="submit">Search</button>
				</form>
			</div>
			<ExercisesDetails />
		</div>
	);
}

export default connect()(SearchBar);
