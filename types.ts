
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
