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

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import useHome from "hooks/useHome";
import { fetchCSRFToken, googleLogin } from "services/axios";

const Home: NextPage = () => {
  const {
    LoginModal,
    setLoginModal,
    singUpModal,
    setSingUpModal,
    checkEmailModal,
    setCheckEmailModal,
    toMail,
    setToMail,
    query,
    push,
    t,
  } = useHome();

  return (
    <div className="bg-neutral-900">
      <LandingHeader
        login={() => setLoginModal(true)}
        singup={() => setSingUpModal(true)}
        labels={{
          movie_quotes: t("movie_quotes"),
          singup: t("singup"),
          login: t("login"),
        }}
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
            {t("thank_you")}
          </h1>
          <h3 className="text-white">{t("activated")}</h3>
          <RedBtn
            click={() => {
              push("/");
              setLoginModal(true);
            }}
            className="w-48 md:w-360"
            label={t("login")}
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
            {t("thank_you")}
          </h1>
          <h3 className="text-white w-2/3 text-center">{t("check_email")}</h3>
          <RedBtn
            link={toMail}
            className="w-48 md:w-360"
            label={t("go_to_mail")}
          />
        </ModalWrapper>
      )}

      <div className="h-screen flex flex-col items-center justify-center md:gap-8">
        <header className="text-orangeWhite font-bold text-2xl md:text-6xl text-center">
          {t("title")}
        </header>
        <RedBtn click={() => setSingUpModal(true)} label={t("get_started")} />
      </div>
      <LandingQuote
        background={"bg-interstellar"}
        quote={t("interstellar")}
        movie={t("interstellar_name")}
      />
      <LandingQuote
        background={"bg-tenenbaum"}
        quote={t("tenenbaum")}
        movie={t("tenenbaum_name")}
      />
      <LandingQuote
        background={"bg-rings"}
        quote={t("rings")}
        movie={t("rings_name")}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "form"])),
    },
  };
};

export default Home;
