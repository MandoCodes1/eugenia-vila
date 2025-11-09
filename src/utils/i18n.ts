import esTranslations from "../i18n/es.json";
import enTranslations from "../i18n/en.json";

export type Language = "es" | "en";

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export function getLanguageFromURL(pathname: string): Language {
  // Remove base path if present
  const pathWithoutBase = pathname.replace(/^\/eugenia-vila/, '');
  const langMatch = pathWithoutBase.match(/^\/(en)/);
  return langMatch ? "en" : "es";
}

export function useTranslations(lang: Language = "es") {
  return function t(key: string): string {
    const keys = key.split(".");
    let value: unknown = translations[lang];

    for (const k of keys) {
      if (value && typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  const basePath = '/eugenia-vila';
  if (lang === "en") {
    return path === '/' ? `${basePath}/en` : `${basePath}/en${path}`;
  }
  return path === '/' ? basePath : `${basePath}${path}`;
}

// Route mappings between languages
const routeMappings: Record<string, Record<string, string>> = {
  // Spanish to English
  es: {
    "/": "/en",
    "/sobre-mi": "/en/about",
    "/servicios": "/en/services",
    "/resenas": "/en/reviews",
    "/galeria": "/en/gallery",
    "/contacto": "/en/contact",
    "/terms": "/en/terms",
    "/privacy": "/en/privacy",
  },
  // English to Spanish
  en: {
    "/en": "/",
    "/en/about": "/sobre-mi",
    "/en/services": "/servicios",
    "/en/reviews": "/resenas",
    "/en/gallery": "/galeria",
    "/en/contact": "/contacto",
    "/en/terms": "/terms",
    "/en/privacy": "/privacy",
  }
};

export function switchLanguagePath(currentPath: string): string {
  const basePath = '/eugenia-vila';
  
  // Remove base path if present
  const pathWithoutBase = currentPath.replace(/^\/eugenia-vila/, '');
  
  // Remove trailing slash for comparison
  const cleanPath = pathWithoutBase.replace(/\/$/, '') || '/';
  
  // Determine current language
  const currentLang = cleanPath.startsWith("/en") ? "en" : "es";
  
  // Get the mapping for the current language
  const mapping = routeMappings[currentLang];
  
  // Check if we have a direct mapping
  if (mapping[cleanPath]) {
    const mappedPath = mapping[cleanPath];
    // If mapped path is just "/", return only basePath (no trailing slash)
    return mappedPath === '/' ? basePath : basePath + mappedPath;
  }
  
  // Handle routes with anchors (like /servicios#implantes)
  if (cleanPath.includes('#')) {
    const [path, anchor] = cleanPath.split('#');
    const mappedPath = mapping[path];
    if (mappedPath) {
      const fullPath = mappedPath === '/' ? basePath : basePath + mappedPath;
      return `${fullPath}#${anchor}`;
    }
  }
  
  // Fallback: if no mapping found, return home page of the other language
  return currentLang === "en" ? basePath : basePath + "/en";
}

export const languages = {
  es: {
    code: "es",
    name: "Español",
    flag: "🇪🇸",
  },
  en: {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
};
