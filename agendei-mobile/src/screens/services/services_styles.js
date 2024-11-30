import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  banner: {
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 25,
  },

  name: {
    fontSize: font_size.md,
    color: colors.white,
    fontWeight: "bold",
    marginTop: 5,
  },
  specialty: {
    fontSize: font_size.md,
    color: colors.white,
    marginTop: 5,
  },
};
