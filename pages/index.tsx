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
  LeftArrow,
  Input,
} from "components";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, NextPage } from "next";
import useHome from "hooks/useHome";
import Link from "next/link";

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
    sendInstructionsForm,
    resetForm,
    emailBackErrors,
    sendInstructions,
    resetPasswordSubmit,
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
      {query.forgot && (
        <ModalWrapper
          className="gap-6 lg:w-601 lg:h-400 w-screen h-screen text-white flex flex-col items-center justify-center"
          closeModal={() => push("/")}
        >
          <h1 className=" text-3xl font-medium">{t("forgot_password")}</h1>
          <p className="text-gray-500 w-360 text-center">{t("instructions")}</p>
          <form
            className="w-360"
            onSubmit={sendInstructionsForm.handleSubmit(sendInstructions)}
          >
            <Input
              name="email"
              className="h-10"
              label={t("email")}
              register={sendInstructionsForm.register("email")}
              type="email"
              error={sendInstructionsForm.formState.errors.email}
              backErr={emailBackErrors}
            />
            <RedBtn className="w-full mt-6" label={t("send_instructions")} />
          </form>
          <Link className="flex items-center gap-2" href={"/"}>
            <LeftArrow />
            <span className="text-gray-400">{t("back_to_log")}</span>
          </Link>
        </ModalWrapper>
      )}
      {query.instruction === "sent" && (
        <ModalWrapper
          className="gap-6 lg:w-601 lg:h-400 w-screen h-screen text-white flex flex-col items-center justify-center"
          closeModal={() => push("/")}
        >
          <Sent />
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            {t("check")}
          </h1>
          <h3 className="text-white w-2/3 text-center">
            {t("instructions_sent")}
          </h3>
          <RedBtn
            link={"gmail.com"}
            className="w-full"
            label={t("go_to_mail")}
          />
        </ModalWrapper>
      )}
      {query.reset && (
        <ModalWrapper
          className="gap-6 lg:w-601 lg:h-471 w-screen h-screen text-white flex flex-col items-center justify-center"
          closeModal={() => push("/")}
        >
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            {t("create_new_password")}
          </h1>
          <p className="text-gray-500 w-360 text-center">
            {t("prev_must_be_different")}
          </p>
          <form
            className="w-360 flex flex-col gap-6"
            onSubmit={resetForm.handleSubmit(resetPasswordSubmit)}
          >
            <Input
              name="password"
              className="h-10"
              label={t("password")}
              register={resetForm.register("password")}
              type="password"
              error={resetForm.formState.errors.password}
            />
            <Input
              name="password_confirmation"
              className="h-10"
              label={t("password_confirmation")}
              register={resetForm.register("password_confirmation")}
              type="password"
              error={resetForm.formState.errors.password_confirmation}
            />
            <RedBtn className="w-full" label={t("reset_pass")} />
          </form>
        </ModalWrapper>
      )}
      {query.password_updated && (
        <ModalWrapper
          className="h-96 w-360 flex flex-col items-center justify-center pt-14 pb-14 gap-8"
          closeModal={() => push("/")}
        >
          <CheckedActivated />
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            {t("success")}
          </h1>
          <h3 className="text-white">{t("success_message")}</h3>
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

      {singUpModal && !query.forgot && (
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
      {LoginModal && !query.forgot && (
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
      {query.email === "email_already_exists" && (
        <ModalWrapper
          className="h-96 w-360 flex flex-col items-center justify-center pt-14 pb-14 gap-8"
          closeModal={() => push("/")}
        >
          <h1 className="text-white text-2xl md:text-3xl font-medium">
            {t("exists")}
          </h1>
          <RedBtn
            click={() => {
              push("/");
            }}
            className="w-48 md:w-360"
            label={t("cancel")}
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
