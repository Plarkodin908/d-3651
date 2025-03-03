
export interface ChatUser {
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Chat {
  id: number;
  user: ChatUser;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export interface Message {
  id: number;
  senderId: number | string;
  text: string;
  timestamp: string;
  chatId?: number;
}

// Sample chats data
export const getSampleChats = (): Chat[] => [];

// Sample messages for the selected chat
export const getSampleMessages = (): Message[] => [];
