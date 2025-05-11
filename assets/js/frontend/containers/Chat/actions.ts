import { httpGet, httpPost } from "../requests";

export const getUsers = () => httpGet("/users");

export const fetchUserThreads = () => httpGet("/threads");

export const setSeenTrue = (threadId: string) =>
  httpPost("/set_seen_true", threadId);

export const initializeThread = (userId: string) =>
  httpPost("/initialize_thread", { user_id: userId });
