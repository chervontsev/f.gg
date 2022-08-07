import { Character } from '@/interfaces';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'fail',
}

interface State {
  status: Status;
  data: Character[];
  next: null | string;
  prev: null | string;
  error: null | string;
};

export const initialState: State = {
  status: Status.IDLE,
  data: [],
  next: null as null | string,
  prev: null as null | string,
  error: null as null | string,
};
