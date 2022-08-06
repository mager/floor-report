import React, {useEffect} from 'react';
import useSWR from 'swr';

import {Combobox as Component} from 'baseui/combobox';
import {StyledLink} from 'baseui/link';

import {fetcher, swrOptions} from '../../utils';
import {useDebounce} from '../../utils/hooks';

type Props = {
  placeholder: string;
};

const SearchInput = ({placeholder}: Props) => {
  const [value, setValue] = React.useState('');
  const debouncedValue = useDebounce(value, 500);

  let options = [];

  const {data, error} = useSWR(
    () => (debouncedValue ? `/api/search?query=${debouncedValue}` : null),
    fetcher,
    swrOptions,
  );

  if (error) {
    console.error(error);
  }

  if (data && data.collections) {
    data.collections.forEach((item) => {
      options.push({
        label: item.name,
        value: item.slug,
      });
    });
  }

  return (
    <Component
      value={value}
      onChange={(e) => setValue(e)}
      options={options}
      mapOptionToString={(option) => option.label}
      mapOptionToNode={({option}) => {
        return (
          <StyledLink href={`/collection/${option.value}`}>
            {option.label}
          </StyledLink>
        );
      }}
      overrides={{
        Root: {
          style: {
            width: '100%',
            maxWidth: '300px',
            border: 'none',
          },
        },
        Input: {
          props: {
            placeholder,
            overrides: {
              Input: {
                style: ({$theme}) => ({
                  padding: `${$theme.sizing.scale400}`,
                }),
              },
            },
          },
        },
      }}
    />
  );
};

export default SearchInput;
