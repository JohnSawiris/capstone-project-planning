import React from 'react';

import TiUser from 'react-icons/lib/ti/user';

function Sidebar() {
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
				<h4>User Name</h4>
			</div>
		</div>
	);
}

export default Sidebar;
