import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  doctor: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.gray4,
    borderRadius: 6,
    marginTop: 3,
    marginBottom: 6,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },

  name: {
    fontSize: font_size.md,
    color: colors.gray,
    marginTop: 5,
  },
  specialty: {
    fontSize: font_size.sm,
    color: colors.gray3,
  },
};
