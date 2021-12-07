import API from "./api";
import { CONTACTS_API } from "../constants/urls";
import { IContact } from "../@types/i-contact";

const urlBuilder = (id?: string) => {
  return id ? CONTACTS_API + "/" + id : CONTACTS_API;
};

export const fetchAll = () => {
  return API({
    url: urlBuilder(),
    method: "GET",
  });
};

export const fetchOne = (id: string) => {
  return API({
    url: urlBuilder(id),
    method: "GET",
  });
};

export const deleteOne = (id: string) => {
  return API({
    url: urlBuilder(id),
    method: "DELETE",
  });
};

export const updateOne = (data: IContact) => {
  return API({
    url: urlBuilder(data.id),
    method: "PUT",
    data,
  });
};

export const createOne = (data: IContact) => {
  return API({
    url: urlBuilder(),
    method: "POST",
    data,
  });
};
