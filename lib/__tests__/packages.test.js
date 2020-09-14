const Meta = require('../index').default;

describe('nuxt-meta-builder', () => {
    let metaBuilder;

    beforeEach(() => {
        metaBuilder = new Meta;
    });

    test('sets the title', () => {
        metaBuilder.setTitle('This is my page title');

        const metaObject = metaBuilder.make();

        expect(metaObject.title).toBe('This is my page title');
    });

    test('sets the description', () => {
        metaBuilder.setDescription('This is my page description, it is very cool');

        const metaObject = metaBuilder.make();

        // Standard description
        expect(metaObject.meta).toContainEqual({
            hid: 'description',
            name: 'description',
            content: 'This is my page description, it is very cool',
        });

        // Open Graph description
        expect(metaObject.meta).toContainEqual({
            hid: 'og:description',
            name: 'og:description',
            content: 'This is my page description, it is very cool',
        });
    });

    test('limits the description if it is longer than 155 characters', () => {
        metaBuilder.setDescription('This is my page description, it is very cool, I am going to be talking a load of rubbish until the character limit is set to 155 characters, I have ran out of things to say, erm, I guess that is it?', {
            limit: 155,
        });

        const metaObject = metaBuilder.make();

        // Standard description
        expect(metaObject.meta).toContainEqual({
            hid: 'description',
            name: 'description',
            content: 'This is my page description, it is very cool, I am going to be talking a load of rubbish until the character limit is set to 155 characters, I have ran out…',
        });

        // Open Graph description
        expect(metaObject.meta).toContainEqual({
            hid: 'og:description',
            name: 'og:description',
            content: 'This is my page description, it is very cool, I am going to be talking a load of rubbish until the character limit is set to 155 characters, I have ran out…',
        });
    });

    test('limits the title to 5 words', () => {
        metaBuilder.setTitle('This is my page title plus an extra few words', {
            limit: 5,
        });

        const metaObject = metaBuilder.make();

        expect(metaObject.title).toBe('This is my page title…');
    });

    test('setting meta directly works as intended', () => {
        metaBuilder.addMeta('martin', 'is the best');
        metaBuilder.addMeta(['martin', 'only martin'], 'is the best');
    });
});
