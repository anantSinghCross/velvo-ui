import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    children: "Click Me!",
    variant: "solid",
    size: "md",
    colorScheme: "primary",
  },
};
export const Outline: Story = {
  args: {
    children: "Click Me!",
    variant: "outline",
    size: "md",
    colorScheme: "primary",
  },
};
export const Ghost: Story = {
  args: {
    children: "Click Me!",
    variant: "ghost",
    size: "md",
    colorScheme: "primary",
  },
};
