import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCSRFToken, getGenres, getMovies } from "services/axios";
import { storeGenres, storeMovies } from "store";

const useMovies = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return { router };
};

export default useMovies;
