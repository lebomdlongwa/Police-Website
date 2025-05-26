import { httpGet, httpPost } from "../requests";

export const getUsers = () => httpGet("/users");

export const fetchUserThreads = (userId: string) => {
  return httpGet("/threads", { user_id: userId });
};

export const setSeenTrue = (threadId: string) =>
  httpPost("/set_seen_true", threadId);

export const initializeThread = (userId: string) =>
  httpPost("/initialize_thread", { user_id: userId });
