type Message = {
  id: string;
  content: string;
  author_id: string;
  recipient_id: string;
  seen: boolean;
  inserted_at: string;
  updated_at: string;
};

type Thread = {
  id: string;
  messages: Message[];
  thread_users: { id: string }[];
};

type ThreadsObject = {
  threads: Thread[];
  recipients: UserObject[];
};
