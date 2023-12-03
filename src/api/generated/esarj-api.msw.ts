/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Swagger Esarj
 * OpenAPI spec version: 1.0.0
 */
import { HttpResponse, delay, http } from 'msw';

export const getListUsersMock = () => [
  {
    id: 328821706326016,
    personCompany: 'Lester Hamill Sr.',
    status: 1,
    accountType: 1,
    customerId: '0486609',
  },
  {
    id: 3863393888894976,
    personCompany: 'holistic',
    status: 2,
    accountType: 2,
    customerId: '0484363',
  },
  {
    id: 3548184401936384,
    personCompany: 'Johnny Larson',
    status: 1,
    accountType: 1,
    customerId: '0783733',
  },
  {
    id: 5609531696480256,
    personCompany: 'cohesive',
    status: 2,
    accountType: 2,
    customerId: '0006258',
  },
  {
    id: 8170862251343872,
    personCompany: 'Jessica Hoeger',
    status: 1,
    accountType: 1,
    customerId: '4152491',
  },
  {
    id: 5912972115312640,
    personCompany: 'radical',
    status: 2,
    accountType: 2,
    customerId: '2416490',
  },
  {
    id: 821712058843136,
    personCompany: 'Kari Zieme',
    status: 1,
    accountType: 1,
    customerId: '0003549',
  },
  {
    id: 5792750047854592,
    personCompany: 'multimedia',
    status: 2,
    accountType: 2,
    customerId: '0003224',
  },
  {
    id: 4825910358310912,
    personCompany: 'Kristopher Kozey',
    status: 1,
    accountType: 1,
    customerId: '6670634',
  },
  {
    id: 2334499249586176,
    personCompany: 'bandwidth-monitored',
    status: 2,
    accountType: 2,
    customerId: '5120314',
  },
];

export const getPostUserMock = () => ({
  id: '0059333',
  status: 1,
  accountType: 1,
  customerId: '0610407',
  userName: 'hektEjJyfwm',
  firstName: 'Pat',
  lastName: 'Champlin',
  email: 'Rachel_Ankunding23@hotmail.com',
  mobile: '887.729.4237 x584',
});

export const getGetUserByIdMock = () => ({
  id: '0004829',
  status: 1,
  accountType: 1,
  customerId: '0003730',
  userName: 'DdOMhvRvdIsxkyc',
  firstName: 'Shaylee',
  lastName: 'Hilll',
  email: 'Quentin_Lubowitz@yahoo.com',
  mobile: '1-650-421-8665 x381',
});

export const getGetEnumsMock = () => ({
  accountTypes: [
    { id: 1, label: 'Personal' },
    { id: 2, label: 'Corporate' },
  ],
  statuses: [
    { id: 1, label: 'Active' },
    { id: 2, label: 'Passive' },
  ],
});

export const getSwaggerEsarjMock = () => [
  http.get('*/users', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getListUsersMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.post('*/users', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getPostUserMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get('*/users/:userId', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getGetUserByIdMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get('*/enums', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getGetEnumsMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
