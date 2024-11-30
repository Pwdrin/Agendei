import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 50,
    justifyContent: "center",
    gap: 160,
  },

  containerLogo: {
    alignItems: "center",
    marginTop: 50,
  },

  containerInput: {
    marginBottom: 15,
  },

  input: {
    backgroundColor: colors.gray5,
    padding: 10,
    borderRadius: 6,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  footertext: {
    color: colors.gray3,
  },
  footerlink: {
    color: colors.blue,
  },
};
