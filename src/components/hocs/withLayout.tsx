import { PageLayout, PageLayoutProps } from "../organisms";

export const withLayout = <ComponentProps,>(
  Component: React.ComponentType<ComponentProps>
) => {
  type Props = Exclude<
    ComponentProps & PageLayoutProps,
    "navBar" | "footer" | "children"
  >;

  return ({
    navBar,
    footer,
    ...componentProps
  }: ComponentProps & PageLayoutProps) => (
    <PageLayout navBar={navBar} footer={footer}>
      <Component {...(componentProps as Props)} />
    </PageLayout>
  );
};
