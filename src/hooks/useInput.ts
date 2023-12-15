import { ChangeEvent, useState } from 'react';

export const useInput = (inputId: string) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return { id: inputId, value, onChange };
};

export type UseInputReturn = ReturnType<typeof useInput>;
