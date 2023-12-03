import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

const accountTypes = [
  { id: 1, label: 'Personal' },
  { id: 2, label: 'Corporate' },
];

const statuses = [
  { id: 1, label: 'Active' },
  { id: 2, label: 'Passive' },
];

const enumsData = {
  accountTypes,
  statuses,
};

const generateId = () => {
  const idLength = 7;
  const maxLeadingNumberOfZeros = 4;
  const idSuffix = faker.string.fromCharacters('0', {
    min: 0,
    max: maxLeadingNumberOfZeros,
  });
  return (
    idSuffix + faker.string.numeric({ length: idLength - idSuffix.length })
  );
};

const getMockUserData = (i = 0) => {
  return {
    id: generateId(),
    status: statuses[i % 2].id,
    accountType: accountTypes[i % 2].id,
    customerId: generateId(),
    userName: faker.string.alphanumeric({ length: { min: 8, max: 20 } }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobile: faker.phone.number(),
  };
};

const getMockUserListItemData = (i = 0) => {
  return {
    id: faker.number.int(),
    personCompany:
      i % 2 ? faker.company.catchPhraseDescriptor() : faker.person.fullName(),
    status: statuses[i % 2].id,
    accountType: accountTypes[i % 2].id,
    customerId: generateId(),
  };
};

export default defineConfig({
  esarj: {
    input: {
      target: './docs/swagger.yaml',
    },
    output: {
      mode: 'split',
      target: 'src/api/generated/esarj-api.ts',
      schemas: 'src/api/generated/model',
      client: 'react-query',
      clean: true,
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: './src/api/apiClient.ts',
          name: 'apiClient',
        },
        query: {
          useInfiniteQueryParam: 'limit',
          signal: false,
          usePrefetch: true,
        },
        operations: {
          getEnums: {
            mock: {
              data: enumsData,
            },
          },
          getUserById: {
            mock: {
              data: getMockUserData(),
            },
          },
          postUser: {
            mock: {
              data: getMockUserData(),
            },
          },
          listUsers: {
            mock: {
              data: Array.from({ length: 10 }, (x, i) =>
                getMockUserListItemData(i),
              ) as any,
            },
          },
        },
      },
    },
  },
});
