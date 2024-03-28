import React, { ComponentProps, Suspense } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { Colors } from "../../core/themes";
import { PageComponent } from "./styles";

type PageViewProps = {
  isPadding?: boolean;
} & ComponentProps<typeof SafeAreaView>;

const PageView = ({ isPadding = true, children, ...rest }: PageViewProps) => {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color={Colors.default} />}>
      <PageComponent {...rest} isPadding={isPadding}>
        {children}
      </PageComponent>
    </Suspense>
  );
};

export default PageView;
