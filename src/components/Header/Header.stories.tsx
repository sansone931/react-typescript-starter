import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Header, HeaderProps } from './Header';

type Args = React.PropsWithChildren<HeaderProps>;

const meta: Meta<Args> = {
  title: 'Components/Header',
  component: Header,
  args: {
    children: 'React TypeScript Starter',
  },
};
export default meta;

const Template: Story<Args> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
