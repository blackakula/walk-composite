import KeysMethod from './Default/KeysMethod';
import LeafCondition from './Default/LeafCondition';
import MutationMethod from './Default/MutationMethod';
import ReducerMethod from './Default/ReducerMethod';

import WalkFunction from './Example/WalkFunction';

import Composite from './Composite';
import Walk from './Walk';

const Defaults = {KeysMethod, LeafCondition, MutationMethod, ReducerMethod};
const Examples = {WalkFunction};
export {Walk, Composite, Defaults, Examples};
export default Walk;
