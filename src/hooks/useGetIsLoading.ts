import { useSelector } from "react-redux";
import type { RootState } from "../store";

export const useIsLoading = (): boolean => {
  return useSelector((state: RootState) => state.auth.isLoading);
};
