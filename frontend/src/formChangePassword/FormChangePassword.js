import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

const FormChangePassword = ({ route, navigation }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [againNewPassword, setAgainNewPassword] = useState("");
  const [eyePassword, setEyePassword] = useState(true);
  const [eyeNewPassword, setEyeNewPassword] = useState(true);
  const [eyeAgainNewPassword, setEyeAgainNewPassword] = useState(true);


  return (
    <ImageBackground
      source={require("../../assets/imgBackground/sky-star.jpg")}
      style={styles.container}
    >
      <View style={styles.formLogin}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 10,
            left: 20,
          }}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={40}
            style={{ color: "white" }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20,
          }}
        >
          Change Password
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.viewContentInput}>
            <TextInput
              style={styles.formInput}
              placeholder="Nhập Password Hiện Tại..."
              secureTextEntry={eyePassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setEyePassword(!eyePassword)} 
            style={{
            position: "absolute",
            top: 15,
            right: 10,
          }}>
              <Ionicons name={eyePassword ? "eye-off-outline" : "eye-outline"} size={25}/>
            </TouchableOpacity>
          </View>
          <View style={styles.viewContentInput}>
            <TextInput
              style={styles.formInput}
              placeholder="Nhập Password Mới..."
              secureTextEntry={eyeNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity onPress={() => setEyeNewPassword(!eyeNewPassword)} 
            style={{
            position: "absolute",
            top: 15,
            right: 10,
          }}>
              <Ionicons name={eyeNewPassword ? "eye-off-outline" : "eye-outline"} size={25}/>
            </TouchableOpacity>
          </View>
          <View style={styles.viewContentInput}>
            <TextInput
              style={styles.formInput}
              placeholder="Nhập Lại Password Mới..."
              secureTextEntry={eyeAgainNewPassword}
              value={againNewPassword}
              onChangeText={setAgainNewPassword}
            />
            <TouchableOpacity onPress={() => setEyeAgainNewPassword(!eyeAgainNewPassword)} 
            style={{
            position: "absolute",
            top: 15,
            right: 10,
          }}>
              <Ionicons name={eyeAgainNewPassword ? "eye-off-outline" : "eye-outline"} size={25}/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FormChangePassword;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  formLogin: {
    width: "80%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(85,85,85, 1)",
    borderRadius: 15,
  },
  formContainer: {
    width: "90%",
    height: "45%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewContentInput: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  formInput: {
    width: "100%",
    height: "100%",
  },
  viewRegisterForgot: {
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  btnLogin: {
    width: "90%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 15,
    marginTop: 30,
  },
});
