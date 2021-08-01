/** @jsxImportSource @emotion/react */
import { useState, FormEvent } from 'react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';
import Image from 'atoms/Image';
import search from 'assets/icons/search.svg';

import Button from 'components/Button';
import InputField from 'components/InputField';

import useMakeStyles from 'hooks/useMakeStyles';

import { StylesFunc } from 'config/styles';
import { FIELDS, PLACEHOLDER } from '../constants';
import useDebouncedEffect from 'hooks/useDebouncedEffect';

export type SearchBoxProps = {
  initialValue: string;
  onFilterChange: (filter: string) => void;
};
type SearchBoxClasses = 'root' | 'header' | 'formContainer';

const searchBoxStyles: StylesFunc<SearchBoxClasses> = (theme) => ({
  root: {
    padding: '1em',
    backgroundColor: theme.color.white,
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
  header: {
    color: theme.color.primary,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
});

const SearchBox = ({ initialValue, onFilterChange }: SearchBoxProps) => {
  const classes = useMakeStyles(searchBoxStyles);

  const [formInputValue, setFormInputValue] = useState<string>(initialValue);

  useDebouncedEffect(() => {
    onFilterChange(formInputValue.trim());
  }, [formInputValue]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilterChange(formInputValue);
  };

  return (
    <>
      <Div css={classes.root}>
        <Div>
          <Text as="heading" bold css={classes.header}>
            DRIVER MANAGEMENT
          </Text>
          <Text>Data driver yang bekerja dengan Anda.</Text>
        </Div>

        <form onSubmit={handleSubmit} css={classes.formContainer}>
          <InputField
            icon={<Image src={search} />}
            name={FIELDS.name}
            placeholder={PLACEHOLDER[FIELDS.name]}
            value={formInputValue}
            onChange={(e) => setFormInputValue(String(e.target.value))}
          />

          <Button type="submit" alignLeft>
            <Text bold>Tambah driver +</Text>
          </Button>
        </form>
      </Div>
    </>
  );
};

export default SearchBox;
