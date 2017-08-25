import LeafCondition from './LeafCondition';

const MutationMethod = key => (...data) => data.map(
    argument => LeafCondition(...data) || typeof argument !== 'object' || !argument.hasOwnProperty(key)
        ? undefined
        : argument[key]
);

export default MutationMethod;
