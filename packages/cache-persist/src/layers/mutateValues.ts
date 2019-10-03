import { IMutateValue } from '../CacheTypes';

function mutateValues(set: (value: any) => any, get: (value: any) => any): IMutateValue {
    return { set, get } as IMutateValue;
}

export default mutateValues;
