import type { ChangeEvent } from 'react';
import { useState } from 'react';

interface UseInputArgs {
  id: string;
  defaultValue?: string;
}

export const useInput = ({ id, defaultValue = '' }: UseInputArgs) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const reset = () => setValue('');

  return { id, value, onChange, reset };
};

export type UseInputReturn = ReturnType<typeof useInput>;
