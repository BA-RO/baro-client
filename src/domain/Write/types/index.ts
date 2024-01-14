export interface Write {
  id: string;
  createAt: string;
  value: string;
}

export interface WriteHisotry {
  date: string;
  histroy: Write[];
}
