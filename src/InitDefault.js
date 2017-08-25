import Walk from './Walk';
import Composite from './Composite';
import LeafCondition from './Default/LeafCondition';
import MutationMethod from './Default/MutationMethod';
import KeysMethod from './Default/KeysMethod';
import ReducerMethod from './Default/ReducerMethod';

const InitDefault = ({leafCondition, mutationMethod, walkMethod, compositeMethod, keysMethod, reducerMethod}) => ({
    walkMethod: () => typeof walkMethod === 'function' ? walkMethod : Walk,
    compositeMethod: () => typeof compositeMethod === 'function' ? compositeMethod : Composite,
    leafCondition: () => typeof leafCondition === 'function' ? leafCondition : LeafCondition,
    mutationMethod: () => typeof mutationMethod === 'function' ? mutationMethod : MutationMethod,
    keysMethod: () => typeof keysMethod === 'function' ? keysMethod : KeysMethod,
    reducerMethod: () => typeof reducerMethod === 'object' && typeof reducerMethod.add === 'function' && typeof reducerMethod.init === 'function'
        ? reducerMethod
        : ReducerMethod
});

export default InitDefault;
