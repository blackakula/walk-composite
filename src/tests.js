import * as _ from './index';
import expect from 'expect';

const tests = () => {
    expect(_.Examples.WalkFunction([1])((zero, one) => one(zero))(
        {a: {b: 1, c: 2}, d: [3, 4]},
        {a: {b: x => x + 1, c: y => y * y}, d: [z => z - 8, w => w * 3]}
    )).toEqual({a: {b: 2, c: 4}, d: [-5, 12]});
    try {
        _.Examples.WalkFunction([0])(f => f())({a: 3});
        expect(true).toEqual(false);
    } catch (e) {
        expect(e.message).toEqual('Leaf data could be only function');
    }
};

tests();

export default tests;
