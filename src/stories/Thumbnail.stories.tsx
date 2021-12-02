import { ComponentMeta } from "@storybook/react";
import {
  Thumbnail as ThumbnailComponent,
  ThumbnailProps,
} from "../components/atoms";

export default {
  title: "Design System/Atoms/Thumbnail",
  component: ThumbnailComponent,
} as ComponentMeta<typeof ThumbnailComponent>;

export const Thumbnail = (args: ThumbnailProps) => (
  <ThumbnailComponent {...args} />
);

Thumbnail.args = {
  src: "/card-1.jpeg",
  alt: "alt",
};

Thumbnail.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};
