import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import loupe from '../../images/loupe.svg';
import {
  SearchbarWrapper,
  SearchForm,
  SearchButton,
  SearchFormInput,
} from './SearchMovie.styled';

export function SearchMovie({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChangeInput = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    if (query.trim() === '' || query.length < 2) {
      toast.warn('Searching must be no empty and more than 1 letter');
      resetForm();
      return;
    }
    onSubmit(query);
    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmitForm}>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
          value={query}
          onChange={handleChangeInput}
        />
        <SearchButton
          type="submit"
          style={{ backgroundImage: `url(${loupe})` }}
        ></SearchButton>
      </SearchForm>
    </SearchbarWrapper>
  );
}

SearchMovie.propTypes = {
  onSubmit: PropTypes.func,
};
