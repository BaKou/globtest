import { foo } from './index';
describe('foo test suite', () => {
    test('should return empty error', () => {
        expect(() => {
            foo([]);
        }).toThrow('interval array empty');
    });

    test('should return interval element error', () => {
        expect(() => {
            foo([[5, 0], [3, 10]]);
        }).toThrow('element 0 of interval can t be superior of element 1 of interval');
    });
    
    test('should return wrong number error', () => {
        expect(() => {
            foo([[0, 5, 30], [3, 10]]);
        }).toThrow('interval with wrong number of data');
    });
    
    test.each([
        [[[0, 3], [6, 10]], [[0, 3], [6, 10]]],
        [[[3, 10],[0, 5]], [[0, 10]]],
        [[[0, 5], [3, 10]], [[0, 10]]],
        [[[7, 8], [3, 6], [2, 4]], [[2, 6], [7, 8]]],
        [[[0, 5], [2, 4]], [[0, 5]]],
        [[[7, 8], [3, 6], [2, 4]], [[2, 6], [7, 8]]],
        [[[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]], [[1, 10], [15, 20]]],
    ])('testing with sample data %p', (a, expected) => {
        expect(foo(a)).toStrictEqual(expected);
    });
});