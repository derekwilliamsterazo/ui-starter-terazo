
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';


export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;


export const LoggedIn = Template.bind({});
LoggedIn.args = {
  loggedIn: true,
 
};

export const Loggedoff = Template.bind({});
Loggedoff.args = {
  loggedIn: false,
};

