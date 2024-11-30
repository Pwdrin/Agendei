import { View, Text } from "react-native";
import { styles } from "./servicelist_styles";
import Button from "../button/button";

function ServiceList(props) {
  return (
    <View style={styles.service}>
      <View style={styles.containerText}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.price}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.price)}
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          text="Agendar"
          onPress={() => props.onPress(props.id_service)}
        />
      </View>
    </View>
  );
}
export default ServiceList;
