import { useConfigStore } from "@core/stores/config";
import { useTheme } from "vuetify";

// composable function to return the image variant as per the current theme and skin
export const useGenerateBgVariant = (
  bgLight,
  bgDark,
  bgLightBordered,
  bgDarkBordered,
  bordered = false
) => {
  const configStore = useConfigStore();
  const { global } = useTheme();

  return computed(() => {
    if (global.name.value === "light") {
      if (configStore.skin === "bordered" && bordered) return bgLightBordered;
      else return bgLight;
    }
    if (global.name.value === "dark") {
      if (configStore.skin === "bordered" && bordered) return bgDarkBordered;
      else return bgDark;
    }
  });
};
