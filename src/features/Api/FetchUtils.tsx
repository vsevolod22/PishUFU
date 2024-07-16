/* eslint-disable no-unused-vars */
import axios from "axios";
import { IGetEvents, IGetNews, IGetPrograms } from "./types";

export class HttpApiMethods {
  // Конструктор класса, где вы устанавливаете значение токена

  // URL`s
  APIURL = "http://127.0.0.1:1337/api";
  API_KEY = localStorage.getItem("token");

  GetEvents = async (): Promise<IGetEvents | null> => {
    let innerUrl = this.APIURL + `/events`;

    try {
      const response = await axios.get(innerUrl);
      // console.log(response.data);
      return response.data; // Возвращаем данные из ответа
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  GetNews = async (): Promise<IGetNews | null> => {
    let innerUrl = this.APIURL + `/news`;

    try {
      const response = await axios.get(innerUrl);
      console.log(response.data);
      return response.data; // Возвращаем данные из ответа
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  GetPrograms = async (): Promise<IGetPrograms | null> => {
    let innerUrl = this.APIURL + `/programs?populate[specialties]=*`;

    try {
      const response = await axios.get(innerUrl);
      console.log(response.data);
      return response.data; // Возвращаем данные из ответа
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
