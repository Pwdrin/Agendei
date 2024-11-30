import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 12,
  },
  item: {
    borderWidth: 1,
    borderColor: colors.gray4,
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
  },

  title: {
    fontSize: font_size.sm,
    color: colors.gray3,
    marginBottom: 4,
  },
  description: {
    fontSize: font_size.md,
    color: colors.gray,
  },
};
