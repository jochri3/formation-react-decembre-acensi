import { AppDispatch } from "./store";
import { RootState } from "./root.reducer";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchContacts } from "./contacts/action.creators";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators({ fetchContacts }, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
