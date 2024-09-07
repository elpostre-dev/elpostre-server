
exports.seed = function (knex) {
  try {
    const ids = [
      '72465a39-0548-4484-b71a-f918e086803a',
      'fa1307a1-6eda-4345-9cea-9550b94cfc06',
      '1ca54b5d-5fdd-4e9e-87bb-1497c8b0f271',
      '5f01a6ab-78bf-4335-9a9e-2699803e35c4',
      'da804024-676c-419b-ad6b-5ed9319362d0',
      'a67e6110-4d75-499f-87f2-b38c4aba6f7a',
      'c9dc855a-d30e-4062-93b5-dd099e259183',
      '475f3122-0d05-4604-97f8-8dce04081127',
      '3fb71952-8b9f-433d-97ca-b5f3a73d7867',
      '27e9dccd-9fc5-4268-8022-de805e6eb6eb',
      '7e98131f-62f5-4e13-a8f3-b25f4c69840f',
      'db165e1d-5cd2-456e-9295-f89e4e11cbe8',
      'ca1fc7db-6265-40fa-9bd5-c78962cb90c4',
      'f8ace026-493e-43ed-8a49-d6bcf0449da3',
      'a204ab83-e9b4-4a4d-8f06-ba4c05aca7b0',
      '0095e441-08a9-44ad-aef6-49e2c2d41dd0',
      'd3590a81-9644-45ca-87db-d3d2ae857655',
      'ee4eaa15-92ee-4c48-ad23-e6648ae8a4f2',
    ]

    const cats = [
      'Brownies', 'Minipays', 'Individuales', 'Galletas', 'Tortugas', 'Muffins', 'Pastel chico', 'Pastel mediano alto', 'Pastel grande', 'Navidad', 'Otros', 'Pasteles Especiales', 'Copitas', 'Panques', '14 de Febrero', 'Entremes', 'Keto', 'Pastel mediano bajo'
    ]

    let weInsertn = []
    for (let index = 0; index < cats.length; index++) {
      weInsertn.push({
        sCategoryId: ids[index],
        sName: cats[index]
      });

    }
    // Deletes ALL existing entries
    return knex('Categories').del()
      .then(function () {
        // Inserts seed entries
        return knex('Categories').insert(weInsertn);
      });
  } catch (err) {
    console.log(err);
  }
};
