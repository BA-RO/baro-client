export interface TemporalMemo {
  id: number;
  content: string;
  correctionContent?: string;
  isCorrected: boolean;
  isArchived: boolean;
  createdAt: string;
}

export interface TemporalMemoHistory {
  createdAt: string;
  temporalMemos: TemporalMemo[];
}
