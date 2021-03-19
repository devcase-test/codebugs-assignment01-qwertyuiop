import { run } from '../index';

describe('Check implementation', function () {
    it('Is implemented', async function () {
        try {
            await run();
        } catch (error) {
            expect(error).toBe(null);
        }
    }, 5000)

    it('Is returning correct values', async function () {
        expect(await run()).toBe(41);
    }, 5000)

    it('Is optimized', async function () {
        var start = +new Date();
        await run();
        var end = +new Date();
        expect((end - start) < 2500).toBe(true);
    }, 5000)
});
