import React, { PropsWithChildren, Suspense, useEffect } from "react";
import { ActivityIndicator, LogBox, SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Colors, Spacing } from "../../core/themes";

const Page = styled(SafeAreaView)`
  width: 100%;
  min-height: 80vh;
  padding-left: ${Spacing.StackXS};
  padding-right: ${Spacing.StackXS};
  background-color: ${Colors.neutral.lightest};
`;

const SinglePage = ({ children, footer = true }: PropsWithChildren<{ footer?: boolean }>) => {
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  return (
    <Suspense fallback={<ActivityIndicator size="large" color={Colors.default} />}>
      <SafeAreaView>
        <ScrollView>
          <Page>{children}</Page>
          {footer && <Footer />}
        </ScrollView>
      </SafeAreaView>
    </Suspense>
  );
};

export default SinglePage;
