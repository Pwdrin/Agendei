import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  service: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 12,
    borderWidth: 1,
    borderColor: colors.gray4,
  },
  containerText: {
    flex: 1,
  },
  containerButton: {
    marginTop: 5,
  },
  description: {
    fontSize: font_size.md,
    color: colors.gray3,
    marginTop: 5,
  },
  price: {
    fontSize: font_size.md,
    color: colors.blue,
    marginTop: 5,
  },
};
