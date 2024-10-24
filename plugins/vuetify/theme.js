// export const staticPrimaryColor = '#0D9394'
// export const staticPrimaryDarkenColor = '#0C8485'

export const staticPrimaryColor = '#FFB400'
export const staticPrimaryDarkenColor = '#E6A200'

// export const staticPrimaryColor = '#003a7b'
// export const staticPrimaryDarkenColor = '#003a7b'

// export const staticPrimaryColor = '#004d94'
// export const staticPrimaryDarkenColor = '#018fc6'


// export const staticPrimaryColor = '#28c76f'
// export const staticPrimaryDarkenColor = '#28c76f'

// export const staticPrimaryColor = '#7367F0'
// export const staticPrimaryDarkenColor = '#675DD8'

// export const staticPrimaryColor = "#FF4C51"; 7B8E54
// export const staticPrimaryDarkenColor = "#E64449";

// export const staticPrimaryColor = "#7B8E54"; 
// export const staticPrimaryDarkenColor = "#7B8E54";

// export const staticPrimaryColor = "#990708"; 
// export const staticPrimaryDarkenColor = "#990708";

export const themes = {
  light: {
    dark: false,
    colors: {
      // '#7367F0'
      primary: staticPrimaryColor,
      "on-primary": "#fff",
      "primary-darken-1": "#675DD8",
      secondary: "#808390",
      "on-secondary": "#fff",
      "secondary-darken-1": "#737682",
      success: "#28C76F",
      "on-success": "#fff",
      "success-darken-1": "#24B364",
      info: "#00BAD1",
      "on-info": "#fff",
      "info-darken-1": "#00A7BC",
      warning: "#FF9F43",
      "on-warning": "#fff",
      "warning-darken-1": "#E68F3C",
      error: "#FF4C51",
      "on-error": "#fff",
      "error-darken-1": "#E64449",
      background: "#F8F7FA",
      "on-background": "#2F2B3D",
      surface: "#fff",
      "on-surface": "#2F2B3D",
      "grey-50": "#FAFAFA",
      "grey-100": "#F5F5F5",
      "grey-200": "#EEEEEE",
      "grey-300": "#E0E0E0",
      "grey-400": "#BDBDBD",
      "grey-500": "#9E9E9E",
      "grey-600": "#757575",
      "grey-700": "#616161",
      "grey-800": "#424242",
      "grey-900": "#212121",
      "grey-light": "#FAFAFA",
      "perfect-scrollbar-thumb": "#DBDADE",
      "skin-bordered-background": "#fff",
      "skin-bordered-surface": "#fff",
      "expansion-panel-text-custom-bg": "#fafafa",
    },
    variables: {
      "code-color": "#d400ff",
      "overlay-scrim-background": "#2F2B3D",
      "tooltip-background": "#2F2B3D",
      "overlay-scrim-opacity": 0.5,
      "hover-opacity": 0.06,
      "focus-opacity": 0.1,
      "selected-opacity": 0.08,
      "activated-opacity": 0.16,
      "pressed-opacity": 0.14,
      "dragged-opacity": 0.1,
      "disabled-opacity": 0.4,
      "border-color": "#2F2B3D",
      "border-opacity": 0.12,
      "table-header-color": "#EAEAEC",
      "high-emphasis-opacity": 0.9,
      "medium-emphasis-opacity": 0.7,
      "switch-opacity": 0.2,
      "switch-disabled-track-opacity": 0.3,
      "switch-disabled-thumb-opacity": 0.4,
      "switch-checked-disabled-opacity": 0.3,
      "track-bg": "#F1F0F2",

      // Shadows
      "shadow-key-umbra-color": "#2F2B3D",
      "shadow-xs-opacity": 0.1,
      "shadow-sm-opacity": 0.12,
      "shadow-md-opacity": 0.14,
      "shadow-lg-opacity": 0.16,
      "shadow-xl-opacity": 0.18,
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: staticPrimaryColor,
      "on-primary": "#fff",
      "primary-darken-1": "#675DD8",
      secondary: "#808390",
      "on-secondary": "#fff",
      "secondary-darken-1": "#737682",
      success: "#28C76F",
      "on-success": "#fff",
      "success-darken-1": "#24B364",
      info: "#00BAD1",
      "on-info": "#fff",
      "info-darken-1": "#00A7BC",
      warning: "#FF9F43",
      "on-warning": "#fff",
      "warning-darken-1": "#E68F3C",
      error: "#FF4C51",
      "on-error": "#fff",
      "error-darken-1": "#E64449",
      background: "#25293C",
      "on-background": "#E1DEF5",
      surface: "#2F3349",
      "on-surface": "#E1DEF5",
      "grey-50": "#26293A",
      "grey-100": "#2F3349",
      "grey-200": "#26293A",
      "grey-300": "#4A5072",
      "grey-400": "#5E6692",
      "grey-500": "#7983BB",
      "grey-600": "#AAB3DE",
      "grey-700": "#B6BEE3",
      "grey-800": "#CFD3EC",
      "grey-900": "#E7E9F6",
      "grey-light": "#353A52",
      "perfect-scrollbar-thumb": "#4A5072",
      "skin-bordered-background": "#2F3349",
      "skin-bordered-surface": "#2F3349",
    },
    variables: {
      "code-color": "#d400ff",
      "overlay-scrim-background": "#171925",
      "tooltip-background": "#F7F4FF",
      "overlay-scrim-opacity": 0.6,
      "hover-opacity": 0.06,
      "focus-opacity": 0.1,
      "selected-opacity": 0.08,
      "activated-opacity": 0.16,
      "pressed-opacity": 0.14,
      "dragged-opacity": 0.1,
      "disabled-opacity": 0.4,
      "border-color": "#E1DEF5",
      "border-opacity": 0.12,
      "table-header-color": "#535876",
      "high-emphasis-opacity": 0.9,
      "medium-emphasis-opacity": 0.7,
      "switch-opacity": 0.4,
      "switch-disabled-track-opacity": 0.4,
      "switch-disabled-thumb-opacity": 0.8,
      "switch-checked-disabled-opacity": 0.3,
      "track-bg": "#3A3F57",

      // Shadows
      "shadow-key-umbra-color": "#131120",
      "shadow-xs-opacity": 0.16,
      "shadow-sm-opacity": 0.18,
      "shadow-md-opacity": 0.2,
      "shadow-lg-opacity": 0.22,
      "shadow-xl-opacity": 0.24,
    },
  },
}
export default themes

// {
//   main: '#FFB400',
//   darken: '#E6A200',
// },
// {
//   main: '#FF4C51',
//   darken: '#E64449',
// },