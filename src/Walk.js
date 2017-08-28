import InitDefault from "./InitDefault";

export const Walk = (parameters) => {
    const defaults = InitDefault(parameters);
    return leafCallback => (...data) => defaults.leafCondition()(...data)
        ? leafCallback(...data)
        : defaults.compositeMethod()(parameters)(leafCallback)(...data);
};
export default Walk;
