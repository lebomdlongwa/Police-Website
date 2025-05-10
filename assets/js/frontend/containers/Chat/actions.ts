import { httpGet, httpPost } from "../requests";

export const getUsers = async () => await httpGet("/users");

export const fetchUserThreads = async () => await httpGet("/threads");

export const setSeenTrue = async (threadId: string) =>
  await httpPost("/setSeenTrue", threadId);
