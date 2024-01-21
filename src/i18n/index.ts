import spanish from './es.json'
import catalan from './ca.json'
import english from './en.json'



const LANGUAGES = {
  SPANISH: 'es',
  CATALAN: 'ca',
  ENGLISH: 'en'
}

export const getI18N = ({
  currentLocale = 'es'
}: {
  currentLocale: string | undefined
}) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  if (currentLocale === LANGUAGES.CATALAN) return catalan
  if (currentLocale === LANGUAGES.ENGLISH) return english

  return spanish
}