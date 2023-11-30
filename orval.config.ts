import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    input: {
      target: './docs/swagger.yaml',
    },
    output: {
      mode: 'split',
      target: 'src/api/generated/esarj-api.ts',
      schemas: 'src/api/generated/model',
      client: 'react-query',
      mock: true,
      prettier: true,

      override: {
        mutator: {
          path: './src/api/apiClient.ts',
          name: 'apiClient',
        },
        query: {
          useInfiniteQueryParam: 'limit',
        },
        operations: {
          listUsers: {
            mock: {
              data: Array.from({ length: 236 }, (x, i) => ({
                id: faker.number.int(),
                personCompany: faker.person.firstName(),
                status: faker.datatype.boolean(),
                accountType: ['Personal', 'Corporate'][i % 2],
                customerId: (() => {
                  const idLength = 7;
                  const maxLeadingNumberOfZeros = 4;
                  const idSuffix = faker.string.fromCharacters('0', {
                    min: 0,
                    max: maxLeadingNumberOfZeros,
                  });
                  return (
                    idSuffix +
                    faker.string.numeric({ length: idLength - idSuffix.length })
                  );
                })(),
              })),
            },
          },
        },
      },
    },
  },
});
