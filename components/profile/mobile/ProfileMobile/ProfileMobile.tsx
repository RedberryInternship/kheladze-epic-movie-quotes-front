import {
  LeftArrow,
  RightArrow,
  EditNameMail,
  EditPassword,
  Emails,
  RedBtn,
  Success,
} from "components";
import Link from "next/link";
import { useProfile } from "hooks";

const ProfileMobile = () => {
  const { route, query, t, user, setImage, push, uploadImage } = useProfile();
  const googleUser = user.google_id;

  return (
    <>
      {user && !query.edit && (
        <div className="overflow-scroll">
          <div className="w-full h-16 mt-20 flex items-center">
            <Link className="ml-10" href={"/news-feed"}>
              <LeftArrow />
            </Link>
          </div>
          <div className="w-full pl-8 pr-8 bg-zinc-800 rounded-xl flex flex-col items-center">
            <img
              className="w-40 h-40 rounded-full mb-2 mt-10"
              src={user.image && user.image}
            />
            <form className="mb-14">
              <label
                onClick={() => push("/profile?upload=image")}
                htmlFor="userImage"
                className="text-xl"
              >
                {t("upload_new")}
              </label>
              <input
                id="userImage"
                className="hidden"
                onChange={(e: any) => {
                  setImage(e.target.files[0]);
                }}
                type="file"
              />
            </form>
            <div className="border-b border-gray-300 w-full pb-4 mb-8">
              <p>{t("username")}</p>
              <div className="flex justify-between">
                <p className="text-lg">{user.name}</p>
                <Link href={`${route}?edit=name`} className="text-lg">
                  {t("edit")}
                </Link>
              </div>
            </div>
            {googleUser && (
              <div className="border-b border-gray-300 w-full pb-4 mb-8">
                <p>{t("email")}</p>
                <div className="flex justify-between">
                  <p className="text-lg">{user.emails[0].email}</p>
                </div>
              </div>
            )}

            {!googleUser && (
              <>
                <div className="border-b border-gray-300 w-full pb-4">
                  <p>{t("password")}</p>
                  <div className="flex justify-between">
                    <p>••••••••••••</p>
                    <Link href={`${route}?edit=password`} className="text-lg">
                      {t("edit")}
                    </Link>
                  </div>
                </div>
                <p className="w-full mt-8 pb-20 flex justify-between">
                  <span>{t("email")}</span>
                  <Link href={`${route}?edit=mail`}>
                    <RightArrow />
                  </Link>
                </p>
                {query.upload === "image" && (
                  <div className="flex justify-end gap-8 pb-6 mt-10 mr-3 items-center">
                    <Link href={"/profile"}>{t("cancel")}</Link>
                    <RedBtn
                      click={uploadImage}
                      className="pl-3 pr-3"
                      label={t("save_changes")}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {query.success === "1" && (
        <Success className="top-1/3" close={() => push("/profile")} />
      )}
      {query.edit === "name" && (
        <EditNameMail back={"/profile"} label={t("new_username")} user={user} />
      )}
      {query.edit === "password" && <EditPassword user={user} />}
      {query.edit === "mail" && <Emails user={user} />}
    </>
  );
};

export default ProfileMobile;
