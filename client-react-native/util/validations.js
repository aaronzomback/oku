import { syllable } from 'syllable';


export function syllableReq (input) {
  if (syllable(input) != 5) {
    setError(true);
    alert('You must fit syllable reqs! 👀')
  }
}
