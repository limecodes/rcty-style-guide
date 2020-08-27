import React from 'react';
import styled, { css } from 'styled-components';

const StyledNav = styled.nav`
	background: #fff;
	border-bottom: 1px solid #dee2e6;

	a {
		display: block;
		padding: 1rem;
		height: 2.5rem;
	}
`;

const StyledList = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
	list-style-type: none;
`;

const StyledListItem = styled.li`
	
`;

export default props => (
	<StyledNav>
		<StyledList>
			<StyledListItem>	
				<a href="#">HM</a>
			</StyledListItem>
			<StyledListItem>	
				<a href="#">Home</a>
			</StyledListItem>
			<StyledListItem>	
				<a href="#">Patients</a>
			</StyledListItem>
		</StyledList>
	</StyledNav>
);