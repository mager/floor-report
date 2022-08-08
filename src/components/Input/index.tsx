import * as React from 'react';
import {Input as Component} from 'baseui/input';

type Props = {
  onDoneTyping: (value: string) => void;
  placeholder: string;
};

const Input = ({onDoneTyping, placeholder}: Props) => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onDoneTyping(value);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <Component
      value={value}
      onChange={(e) => setValue((e.target as HTMLInputElement).value)}
      placeholder={placeholder}
      clearOnEscape
    />
  );
};

export default Input;
