
import { useMemo } from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import  darkTheme from "../../themes/theme.dark";
import lightTheme from "../../themes/theme.light";
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

