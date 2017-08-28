import KeysMethod from './Default/KeysMethod';
import LeafCondition from './Default/LeafCondition';
import MutationMethod from './Default/MutationMethod';
import ReducerMethod from './Default/ReducerMethod';

import WalkFunction from './Example/WalkFunction';

import Composite from './Composite';
import Walk from './Walk';

export const Defaults = {KeysMethod, LeafCondition, MutationMethod, ReducerMethod};
export const Examples = {WalkFunction};
export default { Walk, Composite, Defaults, Examples };
export { Composite } from './Composite';
export { Walk } from './Walk';
