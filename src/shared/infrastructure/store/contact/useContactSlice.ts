import { useDispatch } from "react-redux";

import { actions, ContactModel } from "./contactSlice";

export const useContactSlice = () => {
  const dispatch = useDispatch();

  const handleContactUpdate = (contactData: Partial<ContactModel>) => {
    dispatch(actions.contactUpdate(contactData));
  };

  return {
    handleContactUpdate,
  };
};
