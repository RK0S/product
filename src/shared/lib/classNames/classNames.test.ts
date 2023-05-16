import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with additional classes and modes', () => {
        const expected = 'someClass class1 class2 hovered color';
        expect(
            classNames('someClass', { hovered: true, isPointed: false, color: '#FFF' }, [
                'class1',
                'class2'
            ])
        ).toBe(expected);
    });
});
