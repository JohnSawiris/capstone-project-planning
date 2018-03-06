import React from 'react';
import PropTypes from 'prop-types';

//Icons
import TiUser from 'react-icons/lib/ti/user';

function Sidebar(props) {
	const avatar = {
		color: '#eee',
		width: '150px',
		height: '150px',
		magrin: 'auto',
		border: '3px solid #eee',
		borderRadius: '50%'
	};
	return(
		<div>
			<div className="profile-info">
				<TiUser style={avatar}/>
				<h4>{props.userName}</h4>
			</div>
		</div>
	);
}

Sidebar.propTypes = {
	userName: PropTypes.string
};

export default Sidebar;
