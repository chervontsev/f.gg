import { useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '@/store';
import { charactersList, charactersStatus, charactersError } from '@/store/characters/slice';
import { fetchCharacters } from '@/store/characters/thunk';

export const Home = () => {
  const dispatch = useTypedDispatch();
  const characters = useTypedSelector(charactersList);
  const status = useTypedSelector(charactersStatus);
  const error = useTypedSelector(charactersError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = (
      <div>Loading...</div>
    );
  }
  else if (status === 'success') {
    content = (
      <div>
        {characters.map(char => (
          <div key={char.name}>{char.name}</div>
        ))}
      </div>
    );
  }
  else if (status === 'fail') {
    content = (
      <div>{error}</div>
    );
  }

  return (
    <div>
      <h3>Home</h3>
      {content}
    </div>
  );
}