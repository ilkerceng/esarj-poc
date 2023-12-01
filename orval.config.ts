import { faker } from '@faker-js/faker';
import { defineConfig } from 'orval';

const AccountTypes = ['Personal', 'Corporate'];

const generateCustomerId = () => {
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
    id: faker.number.int(),
    status: faker.datatype.boolean(),
    accountType: AccountTypes[i % 2],
    customerId: generateCustomerId(),
    userName: faker.internet.userName(),
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
      i % 2
        ? faker.company.catchPhraseDescriptor()
        : faker.person.fullName(),
    status: faker.datatype.boolean(),
    accountType: AccountTypes[i % 2],
    customerId: generateCustomerId(),
  };
};

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
          signal: false,
        },
        operations: {
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
              data: Array.from({ length: 10 }, (x, i) => getMockUserListItemData(i)),
            },
          },
        },
      },
    },
  },
});
