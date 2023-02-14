import {
  Backdrop,
  CommentsIcon,
  Input,
  LikesIcon,
  Pensil,
  Trash,
  YouSure,
} from "components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import Link from "next/link";
import { deleteQuote, fetchCSRFToken } from "services/axios";
import { useViewQuote } from "./useViewQuote";

const ViewQuote = () => {
  const {
    t,
    back,
    query,
    pathname,
    sure,
    setSure,
    user,
    movies,
    quote,
    quoteDelete,
  } = useViewQuote();

  return (
    <>
      {sure && <YouSure confirm={quoteDelete} close={() => setSure(false)} />}
      {movies && user && quote && (
        <div className="pl-8 pr-8 rounded-xl text-white lg:w-961 w-screen md:top-36 top-0 z-40 flex flex-col lg:gap-8 gap-5 absolute bg-zinc-800 left-1/2 right-1/2 -translate-x-1/2">
          <div className="w-full flex items-center justify-center h-24 relative border-b border-gray-300 border-opacity-20">
            <div className="absolute -left-2 top-8 flex rounded-lg w-36 h-10 justify-around items-center bg-zinc-800">
              <Link
                href={`${pathname}?movie=${quote.movie_id}&quote=edit&id=${quote.id}`}
                className="flex justify-center border-r border-gray-500 w-1/2"
              >
                <Pensil />
              </Link>
              <button
                onClick={() => setSure(true)}
                className="w-1/2 flex justify-center"
              >
                <Trash />
              </button>
            </div>
            <p className="hidden lg:block text-2xl font-medium justify-center">
              {t("view_quote")}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full md:w-14 md:h-14 w-10 h-10"
              src={user.image}
            />
            <h1 className="text-xl">{user.name}</h1>
          </div>
          <div className="flex items-center justify-between p-3 w-full border border-gray-500 border-opacity-70 rounded-md">
            <p className="italic text-2xl">{`"${quote.quote.en}"`}</p>
            <span className="text-gray-500">ENG</span>
          </div>
          <div className="flex items-center justify-between p-3 w-full border border-gray-500 border-opacity-70 rounded-md">
            <p className="italic text-2xl">{`"${quote.quote.ka}"`}</p>
            <span className="text-gray-500">GEO</span>
          </div>
          <img src={quote.image} className="w-full" />
          <div className="text-xl flex items-center lg:h-20 h-16 border-b lg:border-0 border-gray-300 border-opacity-20 gap-6 lg:gap-8">
            <button className="flex lg:gap-4 gap-3">
              10
              <CommentsIcon className="lg:w-8 w-6" />
            </button>
            <button className="flex lg:gap-4 gap-3">
              10
              <LikesIcon className="lg:w-8 w-6" />
            </button>
          </div>
          <div className="pb-6 border-b border-gray-300 border-opacity-20">
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full md:w-14 md:h-14 w-10 h-10"
                src={user.image}
              />
              <h1 className="text-xl">{user.name}</h1>
            </div>
            <p className="lg:pl-7222">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nunc vel massa facilisis consequat elit morbi
              convallis convallis. Volutpat vitae et nisl et. Adipiscing enim
              integer mi leo nisl. Arcu vitae mauris odio eget.
            </p>
          </div>
          <div className="pb-6 border-b border-gray-300 border-opacity-20">
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full md:w-14 md:h-14 w-10 h-10"
                src={user.image}
              />
              <h1 className="text-xl">{user.name}</h1>
            </div>
            <p className="lg:pl-7222">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nunc vel massa facilisis consequat elit morbi
              convallis convallis. Volutpat vitae et nisl et. Adipiscing enim
              integer mi leo nisl. Arcu vitae mauris odio eget.
            </p>
          </div>
          <div className="pb-6 border-b border-gray-300 border-opacity-20">
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full md:w-14 md:h-14 w-10 h-10"
                src={user.image}
              />
              <h1 className="text-xl">{user.name}</h1>
            </div>
            <p className="lg:pl-7222">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nunc vel massa facilisis consequat elit morbi
              convallis convallis. Volutpat vitae et nisl et. Adipiscing enim
              integer mi leo nisl. Arcu vitae mauris odio eget.
            </p>
          </div>
          <div className="w-full items-center flex gap-4">
            <img
              className="rounded-full md:w-14 md:h-14 w-10 h-10"
              src={user.image}
            />
          </div>
        </div>
      )}

      <Backdrop click={back} />
    </>
  );
};

export default ViewQuote;
