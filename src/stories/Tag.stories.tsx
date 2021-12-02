import { ComponentMeta } from "@storybook/react";
import { Tag as TagComponent, TagProps } from "../components/atoms";

export default {
  title: "Design System/Atoms/Tag",
  component: TagComponent,
} as ComponentMeta<typeof TagComponent>;

export const Tag = (args: TagProps) => <TagComponent {...args} />;

Tag.args = {
  children: "Course",
  active: true,
};
