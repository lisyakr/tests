const fromFormToServer = require('./fromFormToServer');

test('foreign_juridical', () => {
    expect(
        fromFormToServer({
            isForeign: true, // иностранный
            isJuridical: true, // ЮЛ
            title: 'facebook',
            tin: '4534252345',
        })
    ).toStrictEqual({
        type: 'foreign_juridical',
        tin: null,
        name: null,
        foreign_tin: '4534252345',
        company_title: 'facebook',
    });
});

test('foreign_physical', () => {
    expect(
        fromFormToServer({
            isForeign: true, // иностранный
            isJuridical: false, // ФЛ
            title: 'facebook',
            tin: '4534252345',
        })
    ).toStrictEqual({
        type: 'foreign_physical',
        tin: null,
        name: 'facebook',
        foreign_tin: '4534252345',
        company_title: null,
    });
});

test('juridical', () => {
    expect(
        fromFormToServer({
            isForeign: false, // отечеств
            isJuridical: true, // ЮЛ
            title: 'facebook',
            tin: '4534252345',
        })
    ).toStrictEqual({
        type: 'juridical',
        tin: '4534252345',
        name: null,
        foreign_tin: null,
        company_title: 'facebook',
    });
});

test('physical', () => {
    expect(
        fromFormToServer({
            isForeign: false, // отечеств
            isJuridical: false, // ФЛ
            title: 'facebook',
            tin: '4534252345',
        })
    ).toStrictEqual({
        type: 'physical',
        tin: '4534252345',
        name: 'facebook',
        foreign_tin: null,
        company_title: null,
    });
});
