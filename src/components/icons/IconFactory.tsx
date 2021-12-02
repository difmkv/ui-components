import { IconType, Icons } from "./typings";
import { LogoSvgComponent } from "./LogoSvgComponent";
import { TwitterSvgComponent } from "./TwitterSvgComponent";
import { FacebookSvgComponent } from "./FacebookSvgComponent";
import { InstagramSvgComponent } from "./InstagramSvgComponent";
import { PinterestSvgComponent } from "./PinterestSvgComponent";

const icons: Icons = {
  logo: LogoSvgComponent,
  twitter: TwitterSvgComponent,
  facebook: FacebookSvgComponent,
  instagram: InstagramSvgComponent,
  pinterest: PinterestSvgComponent,
};

type IconFactoryProps = {
  icon: IconType;
  className?: string;
};

export const IconFactory: React.FC<IconFactoryProps> = ({
  icon,
  className,
}) => {
  const Component = icons[icon];
  return <Component className={className} />;
};
