import { atom } from 'recoil';
import { UserAtomType } from '../../../globals/types/user.types';

export const UserAtom = atom({
  key: 'UserAtom',
  default: {} as UserAtomType,
});
