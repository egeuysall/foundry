import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp';

const meta = {
  component: InputOTP,
  title: 'Components/InputOTP',
  tags: ['autodocs'],
} satisfies Meta<typeof InputOTP>;

export default meta;

// Use any here to relax args typing
type Story = StoryObj<any>;

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};
