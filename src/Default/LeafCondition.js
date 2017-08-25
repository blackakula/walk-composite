const LeafCondition = (data, ...next) => data === null || typeof data !== 'object';
export default LeafCondition;
