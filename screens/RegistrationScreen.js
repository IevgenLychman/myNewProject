import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from "react-native";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isShowPass, setIsShowPass] = useState(true);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const showPassToggle = () => {
    setIsShowPass(!isShowPass);
  };

  const onRegister = () => {
    Alert.alert(`User Password: ${password}, Email: ${email}`);
    setEmail("");
    setPassword("");
    setLogin("");
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
            paddingBottom: isKeyboardShow ? 0 : 66,
          }}
        >
          <View
            style={[
              styles.photoPlace,
              {
                transform: [{ translateY: -50 }, { translateX: 50 }],
              },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.addButton,
                {
                  transform: [{ translateY: 75 }, { translateX: 10 }],
                },
              ]}
            >
              <Image
                source={require("../img/icon-plus.png")}
                style={{ width: 13, height: 13 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputList}>
            <TextInput
              style={styles.input}
              placeholderTextColor={"#BDBDBD"}
              placeholder="Логін"
              value={login}
              onChangeText={loginHandler}
              onFocus={() => setIsKeyboardShow(true)}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={"#BDBDBD"}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              value={email}
              onChangeText={emailHandler}
              onFocus={() => setIsKeyboardShow(true)}
            />

            <View>
              <TextInput
                style={styles.inputPassword}
                secureTextEntry={isShowPass}
                placeholderTextColor={"#BDBDBD"}
                placeholder="Пароль"
                value={password}
                onChangeText={passwordHandler}
                onFocus={() => setIsKeyboardShow(true)}
              />
              <TouchableOpacity
                style={styles.showPassLabel}
                activeOpacity={0.8}
                accessibilityLabel="Показати пароль"
                onPress={showPassToggle}
              >
                <Text style={styles.label}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={onRegister}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.linkLogin}>Вже маєте акаунт? Увійти</Text>
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
    position: "relative",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  photoPlace: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    top: 0,
    right: "50%",
  },

  addButton: {
    position: "absolute",
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderColor: "1px solid #FF6C00",
    top: 0,
    right: 0,
    borderRadius: 50,
    borderColor: "#FF6C00",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginTop: 92,
    color: "#212121",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },

  inputList: {
    marginTop: 33,
  },

  input: {
    fontFamily: "Roboto",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
  },

  inputPassword: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },

  showPassLabel: {
    position: "absolute",
    top: 12,
    right: 16,
    fontFamily: "Roboto",
    color: "#1B4371",
  },

  label: {
    fontSize: 16,
    color: "#1B4371",
  },

  button: {
    fontFamily: "Roboto",
    marginTop: 43,
    height: 51,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },

  buttonTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },

  linkLogin: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 16,
  },
});
