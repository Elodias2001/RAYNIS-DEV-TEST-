import { defineThemeConfig } from "@core"
import { Skins } from "@core/enums"

// ❗ Logo SVG must be imported with ?raw suffix
// import logo from '@images/logo.svg?raw'
// import logo from "@images/logo.png";
import logo from "@images/appLogo/2.png"
import logo1 from "@images/logo1.png"
import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from "@layouts/enums"
import { breakpointsVuetify } from "@vueuse/core"
import { VIcon } from "vuetify/components/VIcon"

export const { themeConfig, layoutConfig } = defineThemeConfig({
  app: {
    title: "RAYNIS",
    logo: h("img", {
      src: logo ? logo : logo1,
      style: "line-height:0; width: 30px; height: 30px;",
      alt: "app-logo",
    }),
    contentWidth: ContentWidth.Boxed,
    contentLayoutNav: AppContentLayoutNav.Vertical,
    overlayNavFromBreakpoint: breakpointsVuetify.md + 16, // 16 for scrollbar. Docs: https://next.vuetifyjs.com/en/features/display-and-platform/
    i18n: {
      enable: false,
      defaultLocale: "en",
      langConfig: [
        {
          label: "English",
          i18nLang: "en",
          isRTL: false,
        },
        {
          label: "French",
          i18nLang: "fr",
          isRTL: false,
        },
        {
          label: "Arabic",
          i18nLang: "ar",
          isRTL: true,
        },
      ],
    },
    theme: "system",
    skin: Skins.Default,
    iconRenderer: VIcon,
  },
  navbar: {
    type: NavbarType.Sticky,
    navbarBlur: true,
  },
  footer: { type: FooterType.Static },
  verticalNav: {
    isVerticalNavCollapsed: false,
    defaultNavItemIconProps: { icon: "tabler-circle" },
    isVerticalNavSemiDark: false,
  },
  horizontalNav: {
    type: "sticky",
    transition: "slide-y-reverse-transition",
    popoverOffset: 6,
  },

  /*
    // ℹ️  In below Icons section, you can specify icon for each component. Also you can use other props of v-icon component like `color` and `size` for each icon.
    // Such as: chevronDown: { icon: 'tabler-chevron-down', color:'primary', size: '24' },
    */
  icons: {
    chevronDown: { icon: "tabler-chevron-down" },
    chevronRight: { icon: "tabler-chevron-right", size: 20 },
    close: { icon: "tabler-x" },
    verticalNavPinned: { icon: "tabler-circle-dot" },
    verticalNavUnPinned: { icon: "tabler-circle" },
    sectionTitlePlaceholder: { icon: "tabler-minus" },
  },
})
