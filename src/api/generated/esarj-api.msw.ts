/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Swagger Esarj
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';

export const getListUsersMock = () => [
  {
    id: 7053845481914368,
    personCompany: 'Erik',
    status: true,
    accountType: 'Personal',
    customerId: '0000156',
  },
  {
    id: 4549692547399680,
    personCompany: 'Felton',
    status: false,
    accountType: 'Corporate',
    customerId: '0686828',
  },
  {
    id: 8437683051298816,
    personCompany: 'Sebastian',
    status: false,
    accountType: 'Personal',
    customerId: '0154823',
  },
  {
    id: 3521148346171392,
    personCompany: 'Onie',
    status: true,
    accountType: 'Corporate',
    customerId: '0006155',
  },
  {
    id: 5294479523184640,
    personCompany: 'Gabriella',
    status: false,
    accountType: 'Personal',
    customerId: '0000564',
  },
  {
    id: 7761884906258432,
    personCompany: 'Ola',
    status: false,
    accountType: 'Corporate',
    customerId: '8656449',
  },
  {
    id: 4877683756367872,
    personCompany: 'Cathrine',
    status: true,
    accountType: 'Personal',
    customerId: '5214419',
  },
  {
    id: 5564662447865856,
    personCompany: 'Novella',
    status: true,
    accountType: 'Corporate',
    customerId: '0000937',
  },
  {
    id: 3466499140354048,
    personCompany: 'Elisa',
    status: false,
    accountType: 'Personal',
    customerId: '0009772',
  },
  {
    id: 5858322464899072,
    personCompany: 'Lempi',
    status: false,
    accountType: 'Corporate',
    customerId: '0410327',
  },
  {
    id: 2875816987852800,
    personCompany: 'Clemmie',
    status: true,
    accountType: 'Personal',
    customerId: '0272325',
  },
  {
    id: 6025992665563136,
    personCompany: 'Cali',
    status: false,
    accountType: 'Corporate',
    customerId: '0033795',
  },
  {
    id: 3005656296587264,
    personCompany: 'Kaleigh',
    status: true,
    accountType: 'Personal',
    customerId: '0031298',
  },
  {
    id: 7629550649344000,
    personCompany: 'Unique',
    status: false,
    accountType: 'Corporate',
    customerId: '9085863',
  },
  {
    id: 656010203103232,
    personCompany: 'Lincoln',
    status: false,
    accountType: 'Personal',
    customerId: '0007268',
  },
  {
    id: 7239893130412032,
    personCompany: 'Misty',
    status: false,
    accountType: 'Corporate',
    customerId: '0004551',
  },
  {
    id: 7696949362819072,
    personCompany: 'Danika',
    status: false,
    accountType: 'Personal',
    customerId: '0051429',
  },
  {
    id: 1005260185272320,
    personCompany: 'Chelsie',
    status: false,
    accountType: 'Corporate',
    customerId: '0726229',
  },
  {
    id: 623903217025024,
    personCompany: 'Derrick',
    status: true,
    accountType: 'Personal',
    customerId: '0002784',
  },
  {
    id: 1046761982394368,
    personCompany: 'Matilda',
    status: false,
    accountType: 'Corporate',
    customerId: '0000831',
  },
  {
    id: 6632191775735808,
    personCompany: 'Jayden',
    status: true,
    accountType: 'Personal',
    customerId: '0035153',
  },
  {
    id: 1865562898563072,
    personCompany: 'Dillan',
    status: false,
    accountType: 'Corporate',
    customerId: '0000124',
  },
  {
    id: 919076494901248,
    personCompany: 'Vicky',
    status: true,
    accountType: 'Personal',
    customerId: '0044200',
  },
  {
    id: 1981263472754688,
    personCompany: 'Lamar',
    status: false,
    accountType: 'Corporate',
    customerId: '0000368',
  },
  {
    id: 425953754873856,
    personCompany: 'Alison',
    status: true,
    accountType: 'Personal',
    customerId: '0040101',
  },
  {
    id: 8504984802951168,
    personCompany: 'Juston',
    status: false,
    accountType: 'Corporate',
    customerId: '0060039',
  },
  {
    id: 8580566427369472,
    personCompany: 'Judy',
    status: true,
    accountType: 'Personal',
    customerId: '0000618',
  },
  {
    id: 1272814665465856,
    personCompany: 'Oren',
    status: false,
    accountType: 'Corporate',
    customerId: '0400753',
  },
  {
    id: 4279307232870400,
    personCompany: 'Glenda',
    status: true,
    accountType: 'Personal',
    customerId: '0050037',
  },
  {
    id: 7020701743579136,
    personCompany: 'Eino',
    status: false,
    accountType: 'Corporate',
    customerId: '0007752',
  },
  {
    id: 8515936793395200,
    personCompany: 'Izabella',
    status: true,
    accountType: 'Personal',
    customerId: '0034066',
  },
  {
    id: 3724815934423040,
    personCompany: 'Bailey',
    status: false,
    accountType: 'Corporate',
    customerId: '0732530',
  },
  {
    id: 5882037726609408,
    personCompany: 'Jaylon',
    status: true,
    accountType: 'Personal',
    customerId: '0586236',
  },
  {
    id: 6165990899449856,
    personCompany: 'Nathen',
    status: true,
    accountType: 'Corporate',
    customerId: '0364183',
  },
  {
    id: 5444227108438016,
    personCompany: 'Anya',
    status: false,
    accountType: 'Personal',
    customerId: '0057306',
  },
  {
    id: 4642872397660160,
    personCompany: 'Maiya',
    status: false,
    accountType: 'Corporate',
    customerId: '0000708',
  },
  {
    id: 2207945456615424,
    personCompany: 'Josie',
    status: false,
    accountType: 'Personal',
    customerId: '0021355',
  },
  {
    id: 7220834749906944,
    personCompany: 'Mckenzie',
    status: true,
    accountType: 'Corporate',
    customerId: '0998993',
  },
  {
    id: 4178575099953152,
    personCompany: 'Rodger',
    status: false,
    accountType: 'Personal',
    customerId: '9518085',
  },
  {
    id: 1255742585700352,
    personCompany: 'King',
    status: false,
    accountType: 'Corporate',
    customerId: '4914304',
  },
  {
    id: 8582666922229760,
    personCompany: 'Kadin',
    status: false,
    accountType: 'Personal',
    customerId: '0000051',
  },
  {
    id: 7696605364879360,
    personCompany: 'Donato',
    status: true,
    accountType: 'Corporate',
    customerId: '0000827',
  },
  {
    id: 6601021069459456,
    personCompany: 'Tressie',
    status: false,
    accountType: 'Personal',
    customerId: '0005214',
  },
  {
    id: 7089900457295872,
    personCompany: 'Lempi',
    status: true,
    accountType: 'Corporate',
    customerId: '0000837',
  },
  {
    id: 4301347688022016,
    personCompany: 'Kariane',
    status: false,
    accountType: 'Personal',
    customerId: '0006029',
  },
  {
    id: 971149028622336,
    personCompany: 'Cyril',
    status: true,
    accountType: 'Corporate',
    customerId: '0060437',
  },
  {
    id: 4586275340288000,
    personCompany: 'Erika',
    status: true,
    accountType: 'Personal',
    customerId: '0027790',
  },
  {
    id: 3657270137192448,
    personCompany: 'Ena',
    status: true,
    accountType: 'Corporate',
    customerId: '0003985',
  },
  {
    id: 3676114348146688,
    personCompany: 'Cullen',
    status: true,
    accountType: 'Personal',
    customerId: '6262657',
  },
  {
    id: 7873280132251648,
    personCompany: 'Cleta',
    status: false,
    accountType: 'Corporate',
    customerId: '0000662',
  },
  {
    id: 2533147568766976,
    personCompany: 'Morton',
    status: false,
    accountType: 'Personal',
    customerId: '0005669',
  },
  {
    id: 1021620252573696,
    personCompany: 'Howard',
    status: false,
    accountType: 'Corporate',
    customerId: '0093946',
  },
  {
    id: 4810882194341888,
    personCompany: 'Bernadette',
    status: false,
    accountType: 'Personal',
    customerId: '0057624',
  },
  {
    id: 7876396766461952,
    personCompany: 'Talon',
    status: false,
    accountType: 'Corporate',
    customerId: '0000335',
  },
  {
    id: 1080568544493568,
    personCompany: 'Julien',
    status: false,
    accountType: 'Personal',
    customerId: '0000353',
  },
  {
    id: 2924627219185664,
    personCompany: 'Trycia',
    status: false,
    accountType: 'Corporate',
    customerId: '0321893',
  },
  {
    id: 4913953629011968,
    personCompany: 'Nicholaus',
    status: false,
    accountType: 'Personal',
    customerId: '0900963',
  },
  {
    id: 7385243023572992,
    personCompany: 'Mario',
    status: false,
    accountType: 'Corporate',
    customerId: '0004064',
  },
  {
    id: 5175389525639168,
    personCompany: 'Ubaldo',
    status: false,
    accountType: 'Personal',
    customerId: '0605416',
  },
  {
    id: 690087429931008,
    personCompany: 'Alexa',
    status: true,
    accountType: 'Corporate',
    customerId: '0002621',
  },
  {
    id: 7472820458094592,
    personCompany: 'Junius',
    status: true,
    accountType: 'Personal',
    customerId: '0000226',
  },
  {
    id: 600424937684992,
    personCompany: 'Elyssa',
    status: false,
    accountType: 'Corporate',
    customerId: '0000197',
  },
  {
    id: 1519191490297856,
    personCompany: 'Mckenna',
    status: false,
    accountType: 'Personal',
    customerId: '0000660',
  },
  {
    id: 2018535308001280,
    personCompany: 'Conor',
    status: true,
    accountType: 'Corporate',
    customerId: '0113678',
  },
  {
    id: 4999408934453248,
    personCompany: 'Gayle',
    status: true,
    accountType: 'Personal',
    customerId: '0001941',
  },
  {
    id: 4014001021255680,
    personCompany: 'Devonte',
    status: false,
    accountType: 'Corporate',
    customerId: '0821208',
  },
  {
    id: 3983560071446528,
    personCompany: 'Alvena',
    status: false,
    accountType: 'Personal',
    customerId: '0000589',
  },
  {
    id: 3678320474456064,
    personCompany: 'Edwardo',
    status: false,
    accountType: 'Corporate',
    customerId: '0007738',
  },
  {
    id: 7278979153133568,
    personCompany: 'Casimir',
    status: false,
    accountType: 'Personal',
    customerId: '0055458',
  },
  {
    id: 666717275553792,
    personCompany: 'Mae',
    status: true,
    accountType: 'Corporate',
    customerId: '0725948',
  },
  {
    id: 8462014041030656,
    personCompany: 'Emmitt',
    status: false,
    accountType: 'Personal',
    customerId: '0000068',
  },
  {
    id: 4871828000473088,
    personCompany: 'Meaghan',
    status: false,
    accountType: 'Corporate',
    customerId: '0063137',
  },
  {
    id: 6016462229602304,
    personCompany: 'Steve',
    status: false,
    accountType: 'Personal',
    customerId: '5822311',
  },
  {
    id: 6677812039647232,
    personCompany: 'Ruben',
    status: true,
    accountType: 'Corporate',
    customerId: '0000406',
  },
  {
    id: 731797560229888,
    personCompany: 'Renee',
    status: false,
    accountType: 'Personal',
    customerId: '0018875',
  },
  {
    id: 5456029590487040,
    personCompany: 'Nikko',
    status: false,
    accountType: 'Corporate',
    customerId: '0000281',
  },
  {
    id: 8746752662306816,
    personCompany: 'Jerald',
    status: true,
    accountType: 'Personal',
    customerId: '0000303',
  },
  {
    id: 7910985113272320,
    personCompany: 'Hubert',
    status: true,
    accountType: 'Corporate',
    customerId: '0000058',
  },
  {
    id: 3239470063157248,
    personCompany: 'Lue',
    status: false,
    accountType: 'Personal',
    customerId: '0070621',
  },
  {
    id: 7589442139193344,
    personCompany: 'Carlo',
    status: false,
    accountType: 'Corporate',
    customerId: '0000799',
  },
  {
    id: 5560397314654208,
    personCompany: 'Saige',
    status: true,
    accountType: 'Personal',
    customerId: '0380184',
  },
  {
    id: 3184489364717568,
    personCompany: 'Ibrahim',
    status: false,
    accountType: 'Corporate',
    customerId: '0000305',
  },
  {
    id: 1047630379483136,
    personCompany: 'Foster',
    status: true,
    accountType: 'Personal',
    customerId: '0006670',
  },
  {
    id: 2058755797680128,
    personCompany: 'Gregory',
    status: true,
    accountType: 'Corporate',
    customerId: '5127323',
  },
  {
    id: 827818038525952,
    personCompany: 'Wilton',
    status: false,
    accountType: 'Personal',
    customerId: '0009765',
  },
  {
    id: 4684775652589568,
    personCompany: 'Dixie',
    status: false,
    accountType: 'Corporate',
    customerId: '4472487',
  },
  {
    id: 2137254111739904,
    personCompany: 'Brice',
    status: false,
    accountType: 'Personal',
    customerId: '0000722',
  },
  {
    id: 4014188793954304,
    personCompany: 'Chad',
    status: true,
    accountType: 'Corporate',
    customerId: '0895815',
  },
  {
    id: 6673144429412352,
    personCompany: 'Bartholome',
    status: true,
    accountType: 'Personal',
    customerId: '0391852',
  },
  {
    id: 1106862279753728,
    personCompany: 'Dylan',
    status: false,
    accountType: 'Corporate',
    customerId: '0679103',
  },
  {
    id: 3334099389382656,
    personCompany: 'Haleigh',
    status: true,
    accountType: 'Personal',
    customerId: '0001436',
  },
  {
    id: 2595099194163200,
    personCompany: 'Lucienne',
    status: true,
    accountType: 'Corporate',
    customerId: '0007955',
  },
  {
    id: 2047924127137792,
    personCompany: 'Lou',
    status: false,
    accountType: 'Personal',
    customerId: '3017149',
  },
  {
    id: 6524043471618048,
    personCompany: 'Mathilde',
    status: true,
    accountType: 'Corporate',
    customerId: '0008194',
  },
  {
    id: 4833991716765696,
    personCompany: 'Rickey',
    status: true,
    accountType: 'Personal',
    customerId: '0009942',
  },
  {
    id: 4181317228953600,
    personCompany: 'Colin',
    status: true,
    accountType: 'Corporate',
    customerId: '0002704',
  },
  {
    id: 323442240913408,
    personCompany: 'Esmeralda',
    status: false,
    accountType: 'Personal',
    customerId: '0197726',
  },
  {
    id: 1931320252956672,
    personCompany: 'Hazle',
    status: true,
    accountType: 'Corporate',
    customerId: '0008282',
  },
  {
    id: 6905457708892160,
    personCompany: 'Zoey',
    status: true,
    accountType: 'Personal',
    customerId: '0008938',
  },
  {
    id: 751273974431744,
    personCompany: 'Ines',
    status: false,
    accountType: 'Corporate',
    customerId: '0596650',
  },
  {
    id: 3649080400019456,
    personCompany: 'Jaleel',
    status: true,
    accountType: 'Personal',
    customerId: '0076454',
  },
  {
    id: 4936722871746560,
    personCompany: 'Toby',
    status: false,
    accountType: 'Corporate',
    customerId: '0644165',
  },
  {
    id: 7352968045133824,
    personCompany: 'Magdalen',
    status: false,
    accountType: 'Personal',
    customerId: '0025186',
  },
  {
    id: 1023770013728768,
    personCompany: 'Gus',
    status: true,
    accountType: 'Corporate',
    customerId: '0000359',
  },
  {
    id: 6765580109479936,
    personCompany: 'Fredrick',
    status: true,
    accountType: 'Personal',
    customerId: '0005981',
  },
  {
    id: 3931267726835712,
    personCompany: 'Maryjane',
    status: true,
    accountType: 'Corporate',
    customerId: '0016688',
  },
  {
    id: 6498921471803392,
    personCompany: 'Laura',
    status: false,
    accountType: 'Personal',
    customerId: '2094144',
  },
  {
    id: 8345560891260928,
    personCompany: 'Eusebio',
    status: false,
    accountType: 'Corporate',
    customerId: '0027907',
  },
  {
    id: 5725681797300224,
    personCompany: 'Dasia',
    status: true,
    accountType: 'Personal',
    customerId: '0003330',
  },
  {
    id: 3890290729418752,
    personCompany: 'Raquel',
    status: false,
    accountType: 'Corporate',
    customerId: '0000434',
  },
  {
    id: 5438575134900224,
    personCompany: 'Susanna',
    status: false,
    accountType: 'Personal',
    customerId: '0077526',
  },
  {
    id: 7772462689288192,
    personCompany: 'Cameron',
    status: false,
    accountType: 'Corporate',
    customerId: '4220077',
  },
  {
    id: 1117106653364224,
    personCompany: 'Damien',
    status: true,
    accountType: 'Personal',
    customerId: '0095422',
  },
  {
    id: 4616619204542464,
    personCompany: 'Cali',
    status: true,
    accountType: 'Corporate',
    customerId: '0000265',
  },
  {
    id: 2148045472923648,
    personCompany: 'Abbey',
    status: true,
    accountType: 'Personal',
    customerId: '8812535',
  },
  {
    id: 4998948911579136,
    personCompany: 'Webster',
    status: false,
    accountType: 'Corporate',
    customerId: '0048362',
  },
  {
    id: 616366455390208,
    personCompany: 'Michale',
    status: true,
    accountType: 'Personal',
    customerId: '0022904',
  },
  {
    id: 6992251464974336,
    personCompany: 'Violette',
    status: false,
    accountType: 'Corporate',
    customerId: '2487266',
  },
  {
    id: 3516002077769728,
    personCompany: 'Caleb',
    status: true,
    accountType: 'Personal',
    customerId: '9525554',
  },
  {
    id: 6982084142825472,
    personCompany: 'Carter',
    status: false,
    accountType: 'Corporate',
    customerId: '0252975',
  },
  {
    id: 3254433840365568,
    personCompany: 'Lon',
    status: false,
    accountType: 'Personal',
    customerId: '0000350',
  },
  {
    id: 4295251778863104,
    personCompany: 'Josue',
    status: false,
    accountType: 'Corporate',
    customerId: '0003323',
  },
  {
    id: 8705643015831552,
    personCompany: 'Orville',
    status: true,
    accountType: 'Personal',
    customerId: '0004823',
  },
  {
    id: 6650748760752128,
    personCompany: 'Brianne',
    status: true,
    accountType: 'Corporate',
    customerId: '0374132',
  },
  {
    id: 3573826413658112,
    personCompany: 'Morton',
    status: false,
    accountType: 'Personal',
    customerId: '1962915',
  },
  {
    id: 2501624127815680,
    personCompany: 'Cali',
    status: false,
    accountType: 'Corporate',
    customerId: '9795399',
  },
  {
    id: 478499173302272,
    personCompany: 'Alexane',
    status: false,
    accountType: 'Personal',
    customerId: '0000467',
  },
  {
    id: 2410739274874880,
    personCompany: 'Bethel',
    status: false,
    accountType: 'Corporate',
    customerId: '0185876',
  },
  {
    id: 3332531862634496,
    personCompany: 'Aubrey',
    status: false,
    accountType: 'Personal',
    customerId: '0000924',
  },
  {
    id: 5166641285431296,
    personCompany: 'Brent',
    status: true,
    accountType: 'Corporate',
    customerId: '0000011',
  },
  {
    id: 3898138037321728,
    personCompany: 'Alford',
    status: false,
    accountType: 'Personal',
    customerId: '0003165',
  },
  {
    id: 7279444156743680,
    personCompany: 'Maudie',
    status: true,
    accountType: 'Corporate',
    customerId: '0007105',
  },
  {
    id: 2570333865377792,
    personCompany: 'Landen',
    status: true,
    accountType: 'Personal',
    customerId: '0046642',
  },
  {
    id: 4350381014384640,
    personCompany: 'Jamie',
    status: true,
    accountType: 'Corporate',
    customerId: '9609384',
  },
  {
    id: 2421823568347136,
    personCompany: 'Anastacio',
    status: false,
    accountType: 'Personal',
    customerId: '0073740',
  },
  {
    id: 3624018370363392,
    personCompany: 'Callie',
    status: true,
    accountType: 'Corporate',
    customerId: '5876463',
  },
  {
    id: 1544641725857792,
    personCompany: 'Dalton',
    status: false,
    accountType: 'Personal',
    customerId: '0783880',
  },
  {
    id: 989236169801728,
    personCompany: 'General',
    status: false,
    accountType: 'Corporate',
    customerId: '0000672',
  },
  {
    id: 2205422098317312,
    personCompany: 'Earnest',
    status: true,
    accountType: 'Personal',
    customerId: '0038761',
  },
  {
    id: 1340472115068928,
    personCompany: 'Brendon',
    status: true,
    accountType: 'Corporate',
    customerId: '0676184',
  },
  {
    id: 495250321702912,
    personCompany: 'Trycia',
    status: false,
    accountType: 'Personal',
    customerId: '0590829',
  },
  {
    id: 3679842639806464,
    personCompany: 'Anais',
    status: false,
    accountType: 'Corporate',
    customerId: '0064474',
  },
  {
    id: 3040187512782848,
    personCompany: 'Monserrate',
    status: false,
    accountType: 'Personal',
    customerId: '0000785',
  },
  {
    id: 5243649078067200,
    personCompany: 'Marley',
    status: true,
    accountType: 'Corporate',
    customerId: '0038130',
  },
  {
    id: 203003954987008,
    personCompany: 'Skylar',
    status: false,
    accountType: 'Personal',
    customerId: '1047571',
  },
  {
    id: 6726775725883392,
    personCompany: 'Norbert',
    status: false,
    accountType: 'Corporate',
    customerId: '4757801',
  },
  {
    id: 7738355110379520,
    personCompany: 'Demarco',
    status: false,
    accountType: 'Personal',
    customerId: '0904386',
  },
  {
    id: 1981001634938880,
    personCompany: 'Leann',
    status: true,
    accountType: 'Corporate',
    customerId: '3454918',
  },
  {
    id: 6490917441634304,
    personCompany: 'Saul',
    status: false,
    accountType: 'Personal',
    customerId: '0830688',
  },
  {
    id: 7717465448513536,
    personCompany: 'Roosevelt',
    status: false,
    accountType: 'Corporate',
    customerId: '0000919',
  },
  {
    id: 7070136521457664,
    personCompany: 'Devin',
    status: true,
    accountType: 'Personal',
    customerId: '0000002',
  },
  {
    id: 1185724770549760,
    personCompany: 'Briana',
    status: true,
    accountType: 'Corporate',
    customerId: '7052388',
  },
  {
    id: 8653634885648384,
    personCompany: 'Abdul',
    status: true,
    accountType: 'Personal',
    customerId: '0000516',
  },
  {
    id: 8145707368185856,
    personCompany: 'Emmet',
    status: false,
    accountType: 'Corporate',
    customerId: '0005176',
  },
  {
    id: 4454927673851904,
    personCompany: 'Genevieve',
    status: false,
    accountType: 'Personal',
    customerId: '0007444',
  },
  {
    id: 6584034247311360,
    personCompany: 'Saul',
    status: false,
    accountType: 'Corporate',
    customerId: '0008890',
  },
  {
    id: 8651455579815936,
    personCompany: 'Ned',
    status: true,
    accountType: 'Personal',
    customerId: '0005683',
  },
  {
    id: 2941889330282496,
    personCompany: 'Yolanda',
    status: false,
    accountType: 'Corporate',
    customerId: '0000583',
  },
  {
    id: 5430200663801856,
    personCompany: 'Armando',
    status: false,
    accountType: 'Personal',
    customerId: '0005262',
  },
  {
    id: 1701008075915264,
    personCompany: 'Victoria',
    status: true,
    accountType: 'Corporate',
    customerId: '0008232',
  },
  {
    id: 1152009411493888,
    personCompany: 'Nasir',
    status: false,
    accountType: 'Personal',
    customerId: '0000538',
  },
  {
    id: 8802502055034880,
    personCompany: 'Gwen',
    status: false,
    accountType: 'Corporate',
    customerId: '0039857',
  },
  {
    id: 4288374770761728,
    personCompany: 'Jalyn',
    status: true,
    accountType: 'Personal',
    customerId: '0001772',
  },
  {
    id: 844341379596288,
    personCompany: 'Romaine',
    status: true,
    accountType: 'Corporate',
    customerId: '0653268',
  },
  {
    id: 3977736250982400,
    personCompany: 'Susie',
    status: true,
    accountType: 'Personal',
    customerId: '0000949',
  },
  {
    id: 4634888592424960,
    personCompany: 'Delphia',
    status: false,
    accountType: 'Corporate',
    customerId: '1085492',
  },
  {
    id: 6251750392594432,
    personCompany: 'Cristobal',
    status: false,
    accountType: 'Personal',
    customerId: '0000534',
  },
  {
    id: 8403620072521728,
    personCompany: 'Viola',
    status: true,
    accountType: 'Corporate',
    customerId: '0008601',
  },
  {
    id: 8940630380118016,
    personCompany: 'Cassidy',
    status: false,
    accountType: 'Personal',
    customerId: '0007284',
  },
  {
    id: 5478582591684608,
    personCompany: 'Jeromy',
    status: true,
    accountType: 'Corporate',
    customerId: '0000179',
  },
  {
    id: 7983032019451904,
    personCompany: 'Charles',
    status: false,
    accountType: 'Personal',
    customerId: '0000977',
  },
  {
    id: 2237324979077120,
    personCompany: 'Juliana',
    status: false,
    accountType: 'Corporate',
    customerId: '0059273',
  },
  {
    id: 5126190887075840,
    personCompany: 'Alicia',
    status: true,
    accountType: 'Personal',
    customerId: '0002839',
  },
  {
    id: 2434683285536768,
    personCompany: 'Adrian',
    status: false,
    accountType: 'Corporate',
    customerId: '0831411',
  },
  {
    id: 4348220373204992,
    personCompany: 'Pauline',
    status: true,
    accountType: 'Personal',
    customerId: '0093683',
  },
  {
    id: 1139368938962944,
    personCompany: 'Marianne',
    status: false,
    accountType: 'Corporate',
    customerId: '0824729',
  },
  {
    id: 3967754403053568,
    personCompany: 'Sadye',
    status: true,
    accountType: 'Personal',
    customerId: '0806741',
  },
  {
    id: 2559664038346752,
    personCompany: 'Dillon',
    status: false,
    accountType: 'Corporate',
    customerId: '0000239',
  },
  {
    id: 4463662894940160,
    personCompany: 'Kira',
    status: false,
    accountType: 'Personal',
    customerId: '6367085',
  },
  {
    id: 7294180111941632,
    personCompany: 'Alvis',
    status: true,
    accountType: 'Corporate',
    customerId: '0099128',
  },
  {
    id: 723876547919872,
    personCompany: 'Lexie',
    status: false,
    accountType: 'Personal',
    customerId: '0975797',
  },
  {
    id: 6456922666434560,
    personCompany: 'Elinore',
    status: true,
    accountType: 'Corporate',
    customerId: '0085201',
  },
  {
    id: 2803718693060608,
    personCompany: 'Mitchel',
    status: false,
    accountType: 'Personal',
    customerId: '0087230',
  },
  {
    id: 395504252878848,
    personCompany: 'Lucienne',
    status: true,
    accountType: 'Corporate',
    customerId: '0007231',
  },
  {
    id: 2235881748430848,
    personCompany: 'Myriam',
    status: true,
    accountType: 'Personal',
    customerId: '0066082',
  },
  {
    id: 7708471321427968,
    personCompany: 'Garth',
    status: true,
    accountType: 'Corporate',
    customerId: '4839176',
  },
  {
    id: 8862219787829248,
    personCompany: 'Earline',
    status: false,
    accountType: 'Personal',
    customerId: '0002709',
  },
  {
    id: 374653600137216,
    personCompany: 'Lincoln',
    status: false,
    accountType: 'Corporate',
    customerId: '0000694',
  },
  {
    id: 6966126971977728,
    personCompany: 'Johnathan',
    status: false,
    accountType: 'Personal',
    customerId: '0068294',
  },
  {
    id: 2789722153811968,
    personCompany: 'Darren',
    status: true,
    accountType: 'Corporate',
    customerId: '6303194',
  },
  {
    id: 58646763405312,
    personCompany: 'Elise',
    status: false,
    accountType: 'Personal',
    customerId: '0439448',
  },
  {
    id: 4385202428182528,
    personCompany: 'Maverick',
    status: true,
    accountType: 'Corporate',
    customerId: '9546996',
  },
  {
    id: 3444384825606144,
    personCompany: 'Rebeka',
    status: false,
    accountType: 'Personal',
    customerId: '4672371',
  },
  {
    id: 3892504220925952,
    personCompany: 'Neha',
    status: true,
    accountType: 'Corporate',
    customerId: '0824086',
  },
  {
    id: 8612027807301632,
    personCompany: 'Kyle',
    status: true,
    accountType: 'Personal',
    customerId: '7038686',
  },
  {
    id: 8242001619189760,
    personCompany: 'Alphonso',
    status: true,
    accountType: 'Corporate',
    customerId: '0000951',
  },
  {
    id: 3823535610920960,
    personCompany: 'Brendan',
    status: false,
    accountType: 'Personal',
    customerId: '0000198',
  },
  {
    id: 3694698342383616,
    personCompany: 'Aleen',
    status: true,
    accountType: 'Corporate',
    customerId: '0007741',
  },
  {
    id: 7378374924173312,
    personCompany: 'Holly',
    status: true,
    accountType: 'Personal',
    customerId: '2373241',
  },
  {
    id: 3821983533891584,
    personCompany: 'Barton',
    status: false,
    accountType: 'Corporate',
    customerId: '0884185',
  },
  {
    id: 4688685230456832,
    personCompany: 'Elaina',
    status: false,
    accountType: 'Personal',
    customerId: '0000047',
  },
  {
    id: 2508251105067008,
    personCompany: 'Heloise',
    status: true,
    accountType: 'Corporate',
    customerId: '0300439',
  },
  {
    id: 2207074035433472,
    personCompany: 'Florence',
    status: true,
    accountType: 'Personal',
    customerId: '0000027',
  },
  {
    id: 1904578268233728,
    personCompany: 'Nicklaus',
    status: false,
    accountType: 'Corporate',
    customerId: '0003021',
  },
  {
    id: 3276033071513600,
    personCompany: 'Eldora',
    status: false,
    accountType: 'Personal',
    customerId: '0020672',
  },
  {
    id: 8050848131186688,
    personCompany: 'Clarabelle',
    status: false,
    accountType: 'Corporate',
    customerId: '0378543',
  },
  {
    id: 7737823461376000,
    personCompany: 'Kattie',
    status: false,
    accountType: 'Personal',
    customerId: '0085274',
  },
  {
    id: 6245159775764480,
    personCompany: 'Dorcas',
    status: false,
    accountType: 'Corporate',
    customerId: '0006156',
  },
  {
    id: 3327527162478592,
    personCompany: 'Marquise',
    status: true,
    accountType: 'Personal',
    customerId: '0000842',
  },
  {
    id: 2338577509777408,
    personCompany: 'Daniella',
    status: true,
    accountType: 'Corporate',
    customerId: '4829108',
  },
  {
    id: 6218428354396160,
    personCompany: 'Rahul',
    status: false,
    accountType: 'Personal',
    customerId: '0025973',
  },
  {
    id: 5668809782329344,
    personCompany: 'Domingo',
    status: true,
    accountType: 'Corporate',
    customerId: '0363165',
  },
  {
    id: 8038796660572160,
    personCompany: 'Doyle',
    status: false,
    accountType: 'Personal',
    customerId: '0021507',
  },
  {
    id: 6470646496231424,
    personCompany: 'Declan',
    status: true,
    accountType: 'Corporate',
    customerId: '0058571',
  },
  {
    id: 833861405638656,
    personCompany: 'Everett',
    status: false,
    accountType: 'Personal',
    customerId: '0571640',
  },
  {
    id: 4138105319718912,
    personCompany: 'Lisandro',
    status: false,
    accountType: 'Corporate',
    customerId: '0000616',
  },
  {
    id: 6196407983669248,
    personCompany: 'Lorenza',
    status: false,
    accountType: 'Personal',
    customerId: '0007474',
  },
  {
    id: 1256278577905664,
    personCompany: 'Maeve',
    status: false,
    accountType: 'Corporate',
    customerId: '7768244',
  },
  {
    id: 1319544316493824,
    personCompany: 'Marilie',
    status: false,
    accountType: 'Personal',
    customerId: '4562266',
  },
  {
    id: 5646196272005120,
    personCompany: 'Rosemary',
    status: false,
    accountType: 'Corporate',
    customerId: '0000873',
  },
  {
    id: 6796302367064064,
    personCompany: 'Brown',
    status: true,
    accountType: 'Personal',
    customerId: '0983714',
  },
  {
    id: 6005321535324160,
    personCompany: 'Berry',
    status: false,
    accountType: 'Corporate',
    customerId: '4421940',
  },
  {
    id: 479643222147072,
    personCompany: 'Kirstin',
    status: false,
    accountType: 'Personal',
    customerId: '0031875',
  },
  {
    id: 5739309604798464,
    personCompany: 'Ronaldo',
    status: false,
    accountType: 'Corporate',
    customerId: '0004181',
  },
  {
    id: 7100441630343168,
    personCompany: 'Tia',
    status: true,
    accountType: 'Personal',
    customerId: '0000649',
  },
  {
    id: 6704891617607680,
    personCompany: 'Lacy',
    status: true,
    accountType: 'Corporate',
    customerId: '4952710',
  },
  {
    id: 3377916729622528,
    personCompany: 'Keyshawn',
    status: false,
    accountType: 'Personal',
    customerId: '0000698',
  },
  {
    id: 5146055876280320,
    personCompany: 'Gia',
    status: false,
    accountType: 'Corporate',
    customerId: '0022581',
  },
  {
    id: 1313963052630016,
    personCompany: 'Misael',
    status: false,
    accountType: 'Personal',
    customerId: '0095007',
  },
  {
    id: 5107760003809280,
    personCompany: 'Newell',
    status: true,
    accountType: 'Corporate',
    customerId: '0195451',
  },
  {
    id: 880057734135808,
    personCompany: 'Sarah',
    status: false,
    accountType: 'Personal',
    customerId: '0011515',
  },
  {
    id: 8813426958663680,
    personCompany: 'Emmanuel',
    status: false,
    accountType: 'Corporate',
    customerId: '0833604',
  },
  {
    id: 5116223356403712,
    personCompany: 'Theresia',
    status: false,
    accountType: 'Personal',
    customerId: '0549356',
  },
  {
    id: 3112146623791104,
    personCompany: 'Cloyd',
    status: true,
    accountType: 'Corporate',
    customerId: '0751138',
  },
  {
    id: 3584071093452800,
    personCompany: 'Jada',
    status: true,
    accountType: 'Personal',
    customerId: '0016197',
  },
  {
    id: 3306372139581440,
    personCompany: 'Lesly',
    status: false,
    accountType: 'Corporate',
    customerId: '0118677',
  },
];

export const getGetUsersUserIdMock = () => ({
  email: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  id: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
  lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  password: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  phone: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  username: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  userStatus: faker.helpers.arrayElement([
    faker.number.int({ min: undefined, max: undefined }),
    undefined,
  ]),
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
  http.get('*/users/:userId', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getGetUsersUserIdMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];