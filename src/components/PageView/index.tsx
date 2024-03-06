import React, { ComponentProps } from "react";
import { SafeAreaView } from "react-native";
import { PageComponent } from "./styles";

type PageViewProps = {
  isPadding?: boolean;
} & ComponentProps<typeof SafeAreaView>;

const PageView = ({ isPadding = true, children, ...rest }: PageViewProps) => {
  return (
    <PageComponent {...rest} isPadding={isPadding}>
      {children}
    </PageComponent>
  );
};

export default PageView;
