import {Walk, Defaults} from '../index';

const WalkFunction = (indices = [0], parameters) =>  Walk({
    walkMethod: parameters => WalkFunction(indices, parameters),
    leafCondition: (...data) => {
        if (!Defaults.LeafCondition(...data)) {
            return false;
        }
        data.map((argument, i) => {
            if (argument !== undefined && indices.indexOf(i) !== -1 && typeof argument !== 'function') {
                throw {
                    message: "Leaf data could be only function",
                    data: argument,
                    index: i
                }
            }
        });
        return true;
    },
    ...parameters
});
export default WalkFunction;
