const ReducerMethod = {
    add: (result, value, key) => Array.isArray(result) ? [...result, value] : {...result, [key]: value},
    init: (data, ...next) => Array.isArray(data) ? [] : {}
};

export default ReducerMethod;
