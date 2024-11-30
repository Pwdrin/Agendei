import { colors, font_size } from "../../constants/themes/theme";

export const styles = {
  appointment: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.gray4,
  },
  name: {
    fontSize: font_size.md,
    color: colors.gray,
    marginBottom: 2,
  },

  specialty: {
    fontSize: font_size.sm,
    color: colors.gray3,
    marginBottom: 4,
  },

  icon: {
    width: 28,
    height: 28,
    marginRight: 5,
  },
  container: {
    flexDirection: "row",
  },
  containerBooking: {
    flex: 1,
  },

  containerButton: {
    marginTop: 5,
  },
  booking: {
    flexDirection: "row",
    alignItems: "center",
  },
  bookingDate: {
    fontSize: font_size.sm,
    color: colors.gray3,
  },
  bookingHour: {
    fontSize: font_size.sm,
    color: colors.gray3,
  },
};
