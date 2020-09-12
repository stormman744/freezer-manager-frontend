import { format } from "date-fns";
import { da, ru, enGB, de, eo } from "date-fns/locale";

const getFnsLocale = (locale) => {
  const fnsLocales = {
    "da-DK": da,
    "ru-RU": ru,
    en: enGB,
    de: de,
    "de-DE": de,
    eo: eo,
  };

  return fnsLocales[locale];
};

export const formatDate = (datetime, locale) => {
  return format(new Date(datetime), "dd. MMM uuuu", {
    locale: getFnsLocale(locale),
  });
};
