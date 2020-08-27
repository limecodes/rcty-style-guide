import React from 'react';

import Navbar from './Navbar';

export default {
	title: 'Global/Navbar',
	component: Navbar,
};

const Template = args => <Navbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {};