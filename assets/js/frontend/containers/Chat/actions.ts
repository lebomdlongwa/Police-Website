import { httpGet, httpPost } from "../requests";

export const getUsers = () => httpGet("/users");

export const fetchUserThreads = () => httpGet("/threads");

export const setSeenTrue = (threadId: string) =>
  httpPost("/setSeenTrue", threadId);
