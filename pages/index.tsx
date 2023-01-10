import { LandingHeader, LandingQuote, RedBtn, Register } from "components";
import { useRouter } from "next/router";
import { en, ka } from "lang";

import { useState } from "react";

export default function Home() {
  const [LoginModal, setLoginModal] = useState(false);
  const [singUpModal, setSingUpModal] = useState(false);
  const { locale, ...rest } = useRouter();
  const {
    get_started,
    interstellar,
    interstellar_name,
    login,
    movie_quotes,
    singup,
    rings,
    rings_name,
    tenenbaum,
    tenenbaum_name,
    title,
  } = locale === "en" ? en : ka;

  return (
    <div className="bg-neutral-900">
      <LandingHeader labels={{ movie_quotes, singup, login }} />
      <Register />
      <div className="h-screen flex flex-col items-center justify-center md:gap-8">
        <header className="text-orangeWhite font-bold text-2xl md:text-6xl text-center">
          {title}
        </header>
        <RedBtn label={get_started} />
      </div>
      <LandingQuote
        background={"bg-interstellar"}
        quote={interstellar}
        movie={interstellar_name}
      />
      <LandingQuote
        background={"bg-tenenbaum"}
        quote={tenenbaum}
        movie={tenenbaum_name}
      />
      <LandingQuote background={"bg-rings"} quote={rings} movie={rings_name} />
    </div>
  );
}
