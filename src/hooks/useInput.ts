import { ChangeEvent, useState } from 'react';

interface UseInputArgs {
  id: string;
  defaultValue?: string;
}

export const useInput = ({ id, defaultValue = '' }: UseInputArgs) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return { id, value, onChange };
};

export type UseInputReturn = ReturnType<typeof useInput>;
