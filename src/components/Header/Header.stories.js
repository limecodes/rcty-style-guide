import React from 'react';

import Header from './Header';

export default {
	title: 'Global/Header',
	component: Header,
};

const Template = args => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};