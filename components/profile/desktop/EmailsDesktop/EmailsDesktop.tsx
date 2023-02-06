import { Plus, ReadOnly, Success } from "components";
import Link from "next/link";
import { EmailsProps } from "types";
import { useEmailsDesktop } from "./useEmailsDesktop";

const EmailsDesktop: React.FC<EmailsProps> = ({ user }) => {
  const { t, query, locale, push, makeEmailPrimary, removeEmail } =
    useEmailsDesktop();

  const primaryEmail =
    user.emails && user.emails.filter((email) => email.primary === 1 && email);

  return (
    <div className="flex flex-col gap-8">
      {query.success && (
        <Success
          className="desktop top-28 right-20"
          close={() => push("/profile")}
        />
      )}
      {primaryEmail && (
        <div className="flex gap-8 mt-6 items-end">
          <ReadOnly
            label={t("email")}
            className="bg-green-700 bg-opacity-20 text-white"
            placeholder={primaryEmail[0]?.email}
          />
          <button className="text-gray-300 h-12 flex items-center">
            {t("primary_email")}
          </button>
        </div>
      )}

      {user.emails &&
        user.emails.map((email) => {
          if (!email.primary) {
            return (
              <div key={email.email} className="flex gap-8 items-end">
                <ReadOnly
                  className={
                    !email.email_verified_at
                      ? "bg-amber-500 bg-opacity-30"
                      : "bg-gray-300 text-neutral-800"
                  }
                  label={t("email")}
                  placeholder={email.email}
                />
                {!email.email_verified_at ? (
                  <div className=" h-12 gap-5 flex items-center">
                    <p className="text-amber-500 italic">{t("not_verified")}</p>
                    |
                    <button onClick={() => removeEmail(email.id)}>
                      {t("remove")}
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-300 h-12 gap-5 flex items-center">
                    <button onClick={() => makeEmailPrimary(email.id)}>
                      {t("make_primary")}
                    </button>
                    |
                    <button onClick={() => removeEmail(email.id)}>
                      {t("remove")}
                    </button>
                  </div>
                )}
              </div>
            );
          }
        })}
      <div className="w-528 pb-8 border-b border-gray-300">
        <Link
          href={`/profile?modify=email`}
          className={`border rounded-md ${
            locale === "en" ? "w-48" : "w-96"
          }  text-xl h-12 p-4 flex gap-2 items-center justify-start`}
        >
          <Plus /> {t("add_new_mail")}
        </Link>
      </div>
    </div>
  );
};

export default EmailsDesktop;
