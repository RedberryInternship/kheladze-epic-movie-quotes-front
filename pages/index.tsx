import {
  LandingHeader,
  LandingQuote,
  RedBtn,
  ModalWrapper,
  RegisterForm,
  Close,
  LoginForm,
  CheckedActivated,
  Sent,
} from "components";
import { useTranslate } from "hooks";

import { landingEn, landingKa } from "lang";

import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [LoginModal, setLoginModal] = useState(false);
  const [singUpModal, setSingUpModal] = useState(false);
  const [checkEmailModal, setCheckEmailModal] = useState(false);
  const [toMail, setToMail] = useState("");
  const { locale, query, push, ...rest } = useRouter();
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
    activated,
    go_to_feed,
    thank_you,
    check_email,
    go_to_mail,
  } = useTranslate(landingEn, landingKa);

  return (
    <div className="bg-neutral-900">
      <LandingHeader
        login={() => setLoginModal(true)}
        singup={() => setSingUpModal(true)}
        labels={{ movie_quotes, singup, login }}
      />
      {singUpModal && (
        <ModalWrapper
          className="md:h-704 h-screen w-screen"
          closeModal={() => setSingUpModal(false)}
        >
          <Close click={() => setSingUpModal(false)} />
          <RegisterForm
            succesSubmit={(linkTo: string) => {
              setCheckEmailModal(true);
              setToMail(linkTo);
              setSingUpModal(false);
            }}
            loginClick={() => {
              setSingUpModal(false);
              setLoginModal(true);
            }}
          />
        </ModalWrapper>
      )}
      {LoginModal && (
        <ModalWrapper
          className="md:h-704 h-screen w-screen"
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

      {query.account_activated && (
        <ModalWrapper
          className="h-96 w-360 flex flex-col items-center justify-center pt-14 pb-14 gap-8"
          closeModal={() => push("/")}
        >
          <CheckedActivated />
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            {thank_you}
          </h1>
          <h3 className="text-white">{activated}</h3>
          <RedBtn
            click={() => {
              push("/");
              setLoginModal(true);
            }}
            className="w-48 md:w-360"
            label={login}
          />
        </ModalWrapper>
      )}
      {checkEmailModal && (
        <ModalWrapper
          className="h-414 w-360 flex flex-col items-center justify-center pt-14 pb-14 gap-8"
          closeModal={() => setCheckEmailModal(false)}
        >
          <Sent />
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            {thank_you}
          </h1>
          <h3 className="text-white w-2/3 text-center">{check_email}</h3>
          <RedBtn link={toMail} className="w-48 md:w-360" label={go_to_mail} />
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
