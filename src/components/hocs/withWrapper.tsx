import React from "react";
import { IconType } from "../icons";

export declare type WrapperProps = {
  icon: IconType;
  testId: string;
};

export const withWrapper = <ComponentProps,>(
  Wrapper: React.ComponentType<WrapperProps>,
  Component: React.ComponentType<ComponentProps>
) => {
  type Props = Exclude<ComponentProps & WrapperProps, "icon" | "testId">;

  return ({ icon, testId, ...componentProps }: WrapperProps & Props) => (
    <Wrapper icon={icon} testId={testId}>
      <Component {...(componentProps as Props)} />
    </Wrapper>
  );
};
