import { useRouter } from "next/router";

const useTranslate = (eng: any, ka: any) => {
  const { locale } = useRouter();
  if (locale === "en") {
    return eng;
  } else if (locale === "ka") {
    return ka;
  }
};

export default useTranslate;
