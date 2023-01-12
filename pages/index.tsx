import {
  LandingHeader,
  LandingQuote,
  RedBtn,
  ModalWrapper,
  RegisterForm,
  Close,
  LoginForm,
} from "components";

import { landingEn, landingKa } from "lang";

import { useRouter } from "next/router";
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
  } = locale === "en" ? landingEn : landingKa;

  return (
    <div className="bg-neutral-900">
      <LandingHeader
        login={() => setLoginModal(true)}
        singup={() => setSingUpModal(true)}
        labels={{ movie_quotes, singup, login }}
      />
      {singUpModal && (
        <ModalWrapper
          className="md:h-704"
          closeModal={() => setSingUpModal(false)}
        >
          <Close click={() => setSingUpModal(false)} />
          <RegisterForm
            loginClick={() => {
              setSingUpModal(false);
              setLoginModal(true);
            }}
          />
        </ModalWrapper>
      )}
      {LoginModal && (
        <ModalWrapper
          className="md:h-704"
          closeModal={() => setLoginModal(false)}
        >
          <Close click={() => setLoginModal(false)} />
          <LoginForm
            singupClick={() => {
              setLoginModal(false);
              setSingUpModal(true);
            }}
          />
        </ModalWrapper>
      )}

      <div className="h-screen flex flex-col items-center justify-center md:gap-8">
        <header className="text-orangeWhite font-bold text-2xl md:text-6xl text-center">
          {title}
        </header>
        <RedBtn click={() => setSingUpModal(true)} label={get_started} />
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
