import { ensurePrefix } from "@antfu/utils";

export const getPublicUrl = (path) => {
  const baseUrl = "http://localhost:3000";
  const pathWithBaseUrl = `${baseUrl}${path}`;

  // console.log('pathImage', pathWithBaseUrl)

  return `${ensurePrefix("/", pathWithBaseUrl)}`.replaceAll("//", "/");
};
