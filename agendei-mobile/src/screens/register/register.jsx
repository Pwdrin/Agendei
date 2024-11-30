import { useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  Alert,
} from "react-native";
import icon from "../../constants/icons/icon";
import { styles } from "./register_styles";
import { colors } from "../../constants/themes/theme";
import Button from "../../components/button/button";
import api from "../../constants/api/api.js";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteRegister() {
    try {
      const response = await api.post("/users/register", {
        name,
        email,
        password,
      });
      if (response.data) {
        Alert.alert("Conta criada com sucesso!");
        props.navigation.goBack();
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("Ocorreu um erro. Tente novamente mais tarde!");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={icon.logo} style={styles.logo} />
      </View>

      <View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            placeholderTextColor={colors.gray3}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            placeholderTextColor={colors.gray3}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            placeholderTextColor={colors.gray3}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Button text="Criar conta" onPress={ExecuteRegister} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footertext}>Já tenho uma conta. </Text>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text style={styles.footerlink}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
