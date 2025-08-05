import { test, describe, jest, expect, beforeEach } from '@jest/globals';
import { service, init } from '../service';
import { WriteToDBInterface } from '../interfaces';


describe('Service Tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should initialize and call service', () => {
        const mockWriteToDB: WriteToDBInterface = jest.fn((input) => { console.log(`Mock Writing to DB: ${input}`); });

        init(mockWriteToDB);
        service();

        expect(mockWriteToDB).toHaveBeenCalled();
    });
});