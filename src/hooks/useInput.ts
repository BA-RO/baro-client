import { ChangeEvent, useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return { value, onChange };
};

export type UseInputReturn = ReturnType<typeof useInput>;
