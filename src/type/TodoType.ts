export interface Work {
  id: string;
  work: string;
  content: string;
  isDone: boolean;
}

export interface InputType {
  labelName: string;
  value: string;
  Add(event: React.ChangeEvent): void;
}

export interface CardsType {
  key: string;
  item: Work;
  deletefnc(id: string): void;
  statefnc(id: string): void;
  working: Work[];
  setwork: React.Dispatch<React.SetStateAction<Work[]>>;
  children: string;
}

export interface UpdateTextType {
  item: Work;
}

export interface ButtonType {
  role: string;
  para: Work;
  fnc(id: string, event: React.MouseEvent): void;
  children: string;
}
