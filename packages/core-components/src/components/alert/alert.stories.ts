import './alert';

import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';

type Story = StoryObj;

const meta: Meta = {
  title: 'Components/Alert',
  component: 'pp-alert',
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'success', 'neutral', 'warning', 'danger', 'blank'],
    },
    closable: {
      control: { type: 'boolean' },
    },
  },
  args: {
    open: true,
    variant: 'primary',
    closable: false,
  },

  render: ({ open, variant, closable }) =>
    html`<pp-alert ?open=${open} variant=${variant} ?closable=${closable}>
      Alert
    </pp-alert>`,
};

export default meta;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Closable: Story = {
  args: {
    variant: 'primary',
    closable: true,
  },
};
