export type SvgComponentProps = {
  className?: string;
};

export type SocialIcon = "twitter" | "facebook" | "instagram" | "pinterest";

export type IconType = "logo" | SocialIcon;

export type Icons = {
  [k in IconType]: React.FC<SvgComponentProps>;
};
