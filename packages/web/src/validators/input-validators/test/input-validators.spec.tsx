import { requiredField, requiredFileInput } from "../input-validators";

describe('Required input validator', () => {
    let results: Array<{value: string, res: boolean}> = [
        {value: "Text field value", res: true},
        {value: "", res: false},
        {value: " ", res: false},
    ];
    results.forEach(i => 
        it(`Should return ${i.res} for ${i.value}`, () => {
            expect(requiredField.validate(i.value)).toEqual(i.res);
        })
    );
});
describe('Required file input validator', () => {
    let results: Array<{value: number, res: boolean}> = [
        {value: 2, res: true},
        {value: 1, res: true},
        {value: 0, res: false},
    ];
    results.forEach(i => 
        it(`Should return ${i.res} for ${i.value}`, () => {
            expect(requiredFileInput.validate(i.value)).toEqual(i.res);
        })
    );
});