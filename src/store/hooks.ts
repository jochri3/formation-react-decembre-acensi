import { AppDispatch } from "./store";
import { RootState } from "./root.reducer";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators({}, dispatch);
};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
