import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  theme: {
    todayTextColor: colors.red,
    selectedDayBackgroundColor: colors.blue,
    selectedDayTextColor: colors.white,
    arrowColor: colors.blue,
  },
  textHour: {
    fontSize: font_size.lg,
    fontWeight: "bold",
    color: colors.gray2,
    marginTop: 20,
  },
  pickerContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    backgroundColor: colors.gray5,
    color: colors.gray2,
  },
};
