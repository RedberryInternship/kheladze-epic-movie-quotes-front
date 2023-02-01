import {
  BlackBtn,
  EditNameMail,
  LeftArrow,
  Plus,
  Verified,
  Sure,
  Success,
  NotVerified,
} from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteEmail, fetchCSRFToken, makePrimary } from "services/axios";

const Emails: React.FC<{ profile: any; user: any }> = ({ profile, user }) => {
  const { asPath, query, locale, back } = useRouter();

  const [showSuccess, setShowSuccess] = useState(false);

  const primaryEmail =
    user.emails &&
    user.emails.filter((email: any) => email.primary === 1 && email);

  const removeEmail = async (id: any) => {
    try {
      await fetchCSRFToken();
      await deleteEmail(id);
      back();
      setShowSuccess(true);
    } catch (error) {}
  };
  const makeEmailPrimary = async (id: any) => {
    try {
      await fetchCSRFToken();
      await makePrimary(id);
      back();
      setShowSuccess(true);
    } catch (error) {}
  };

  return (
    <>
      {query.add === "mail" ? (
        <EditNameMail
          back={"/profile?edit=mail"}
          label={profile.add_new_mail}
          profile={profile}
          user={user}
        />
      ) : (
        <div>
          {showSuccess && (
            <Success
              close={() => setShowSuccess(false)}
              className="h-14"
              text={profile.changes_updated}
            />
          )}

          <div className="w-full h-16 flex items-center">
            <Link className="ml-10" href={"/profile"}>
              <LeftArrow />
            </Link>
          </div>
          <div className="w-full bg-zinc-800 pl-8 pr-8 pt-6 pb-11 rounded-xl flex flex-col gap-8 items-start justify-center">
            <div className="w-full flex flex-col gap-6 border-b border-gray-300 pb-6">
              <h3>{profile.primary_email}</h3>
              <div className="flex justify-between items-center h-12 p-4 rounded-md border border-green-700 bg-green-700 bg-opacity-20">
                <p>{primaryEmail && primaryEmail[0].email}</p>
                <Verified />
              </div>
            </div>

            {user.emails &&
              user.emails.map((email: any) => {
                if (!email.primary) {
                  return (
                    <div
                      key={email.email}
                      className="border-b border-gray-300 pb-8 w-full mt-7"
                    >
                      <p className="text-xl mb-8">{email.email}</p>
                      <div className="flex justify-between items-center">
                        {email.email_verified_at ? (
                          <Link href={`${asPath}&sure=makeprimary`}>
                            <BlackBtn
                              className={locale === "en" ? "w-36" : " w-52"}
                              label={profile.make_primary}
                            />
                          </Link>
                        ) : (
                          <p className="flex gap-1 items-center italic text-amber-500">
                            <NotVerified />
                            <span>{profile.not_verified}</span>
                          </p>
                        )}

                        {query.sure === "makeprimary" && (
                          <Sure
                            labels={profile}
                            confirm={() => makeEmailPrimary(query.id)}
                          />
                        )}
                        <Link href={`${asPath}&sure=remove&id=${email.id}`}>
                          {profile.remove}
                        </Link>
                        {query.sure === "remove" && (
                          <Sure
                            labels={profile}
                            confirm={() => removeEmail(query.id)}
                          />
                        )}
                      </div>
                    </div>
                  );
                }
              })}

            <p className="mt-7">{profile.add_new_mail}</p>
            <Link
              href={`${asPath}&add=mail`}
              className="border rounded-md w-full flex gap-2 items-center justify-center h-8"
            >
              <Plus /> {profile.add}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Emails;
