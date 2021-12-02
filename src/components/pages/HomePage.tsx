import { withLayout } from "../hocs";
import { ColorDrop, Spacer } from "../atoms";
import { CardProps, Greeting, GreetingProps } from "../molecules";
import {
  CardListing,
  TagListing,
  TagListingProps,
  FooterProps,
  NavBarProps,
} from "../organisms";

export type HomePageProps = {
  navBar: NavBarProps;
  greeting: GreetingProps;
  tags: TagListingProps;
  cards: CardProps[];
  footer: FooterProps;
};

export const HomePage: React.FC<HomePageProps> = ({
  greeting,
  tags,
  cards,
}) => (
  <>
    <ColorDrop />
    <Spacer my={7}>
      <Greeting {...greeting} />
    </Spacer>
    <Spacer rowGap={1}>
      <TagListing {...tags} />
    </Spacer>
    <Spacer my={3}>
      <CardListing cards={cards} />
    </Spacer>
    <Spacer my={5}></Spacer>
  </>
);

export const HomePageWithLayout = withLayout<HomePageProps>(HomePage);
