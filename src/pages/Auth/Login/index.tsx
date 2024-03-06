import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useState } from "react";
import { View } from "react-native";

import Logo from "../../../../assets/logo.png";
import { Button, Text, Title } from "../../../components";
import InputField from "../../../components/InputField";
import PageView from "../../../components/PageView";
import SimpleButton from "../../../components/SimpleButton";
import { Paths } from "../../../core/routes/paths";
import { Colors, Spacing } from "../../../core/themes";

const Login = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <PageView>
      <View
        style={{
          width: "100%",
          paddingTop: 24,
          paddingBottom: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={Logo} style={{ width: 200, height: 200 }} />
      </View>
      <View style={{ marginBottom: 18 }}>
        <Title size="xl" color={Colors.default}>
          Login
        </Title>
      </View>
      <View>
        <InputField
          placeholder="Login"
          icon={"person-circle-outline"}
          value={login}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputField
          placeholder="password"
          icon={"lock-closed-outline"}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={hiddenPassword}
        >
          <SimpleButton
            customStyle={`margin-right: ${Spacing.StackXXS}`}
            onPress={(event) => {
              event.preventDefault();
              setHiddenPassword((value) => !value);
            }}
          >
            <Ionicons name={hiddenPassword ? "eye" : "eye-off"} color={Colors.neutral.darkest} size={30} />
          </SimpleButton>
        </InputField>
        {hasError && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 8,
            }}
          >
            <Ionicons name="warning" color={Colors.support.warning} size={20} />
            <Text color={Colors.support.warning}>Preencha todos os campos!</Text>
          </View>
        )}
        <Button
          as="default"
          customStyle={`margin-top: ${Spacing.StackXXS}`}
          label="Entrar"
          onPress={(ev) => {
            ev.preventDefault();
            console.log("USER:", { login, password });
            setHasError(!login || !password);
            if (login && password) {
              navigation.navigate(Paths.TODO_LIST as never);
            }
          }}
        />
        <Button
          as="tertiary"
          customStyle={`margin-top: ${Spacing.StackXS}`}
          label="Cadastre-se"
          onPress={(ev) => {
            ev.preventDefault();
          }}
        />
      </View>
    </PageView>
  );
};

export default Login;
