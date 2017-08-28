import InitDefault from './InitDefault';

export const Composite = (parameters) => {
    const defaults = InitDefault(parameters);
    const reducerMethod = defaults.reducerMethod();
    return leafCallback => (...data) => defaults.keysMethod()(...data).reduce(
        (result, key) => {
            const value = defaults.walkMethod()(parameters)(leafCallback)(...defaults.mutationMethod()(key)(...data));
            return reducerMethod.add(result, key, value);
        },
        reducerMethod.init(...data)
    );
};

export default Composite;
