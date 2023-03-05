import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isShowPass, setIsShowPass] = useState(true);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);
  const showPassToggle = () => setIsShowPass(!isShowPass);

  const onLogin = () => {
    Alert.alert(`User Password: ${password}, Email: ${email}`);
    keyBoardHide();
  };

  const keyBoardHide = () => {
    setIsKeyboardShow(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <ImageBackground
        source={require("../img/photo-bg.jpg")}
        style={styles.image}
      >
        <View
          style={{
            ...styles.container,
            paddingBottom: isKeyboardShow ? 0 : 132,
          }}
        >
          <Text style={styles.registerTitle}>Увійти</Text>

          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адресa електронної пошти"
            style={styles.input}
            onFocus={() => setIsKeyboardShow(true)}
          />
          <View style={styles.showPasscontainer}>
            <TextInput
              value={password}
              onChangeText={passwordHandler}
              placeholder="Пароль"
              secureTextEntry={isShowPass}
              style={[styles.inputPassword, styles.input]}
              onFocus={() => setIsKeyboardShow(true)}
            />
            <TouchableOpacity
              title={"Показати"}
              onPress={showPassToggle}
              accessibilityLabel="Показати пароль"
              style={styles.showPass}
            >
              <Text style={[styles.showPassLabel]}>Показати</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            title={"Увійти"}
            onPress={onLogin}
            accessibilityLabel="Увійти"
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonLoginLabel}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.linkRegister}>
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  container: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 132,
  },

  registerTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 32,
    marginBottom: 32,
    fontWeight: "500",
    textAlign: "center",
  },

  input: {
    width: "100%",
    fontFamily: "Roboto",
    height: 48,
    padding: 16,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    borderRadius: 8,
    border: "1px solid #E8E8E8",
  },

  buttonLogin: {
    width: "100%",
    marginTop: 43,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },

  buttonLoginLabel: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto",
  },

  linkRegister: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
    fontFamily: "Roboto",
    textAlign: "center",
  },

  showPasscontainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    backgroundColor: "#F6F6F6",
    marginBottom: 62,
    borderRadius: 8,
    border: "1px solid #E8E8E8",
    position: "relative",
  },

  showPassLabel: {
    position: "absolute",
    fontFamily: "Roboto",
    top: 12,
    right: 16,
    height: 25,
    fontSize: 16,
    color: "#1B4371",
  },
});
