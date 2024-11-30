import { useContext, useState } from "react";
import {
  TouchableOpacity,
  Text,
  TextInput,
  View,
  Image,
  Alert,
} from "react-native";
import icon from "../../constants/icons/icon";
import { styles } from "./login_styles";
import { colors } from "../../constants/themes/theme";
import Button from "../../components/button/button";
import api from "../../constants/api/api.js";
import { AuthContext } from "../../contexts/auth.js";

function Login(props) {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function ExecuteLogin() {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      if (response.data) {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        setUser(response.data);
      }
    } catch (error) {
      if (error.response?.data.error) Alert.alert(error.response.data.error);
      else Alert.alert("Ocorreu um erro. Tente novamente mais tarde!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        {/* <Image source={icon.logo} style={styles.logo} /> */}
      </View>

      <View>
        <View style={styles.containerInput}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor={colors.gray3}
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.containerInput}>
          <TextInput
            placeholderTextColor={colors.gray3}
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Button text="Acessar" onPress={ExecuteLogin} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footertext}>Não tenho conta. </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("register")}>
          <Text style={styles.footerlink}>Criar conta agora.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
