import { nanoid } from 'nanoid';
import re1 from '../imgs/re1.jpg';
import re2 from '../imgs/re2.jpg';
import re3 from '../imgs/re3.jpg';
import re4 from '../imgs/re4.jpg';
import re5 from '../imgs/re5.jpg';
import re6 from '../imgs/re6.jpg';
import re7 from '../imgs/re7.jpg';
import re8 from '../imgs/re8.jpg';
import re9 from '../imgs/re9.jpg';
import re10 from '../imgs/re10.jpg';
import re11 from '../imgs/re11.jpg';
import re12 from '../imgs/re12.jpg';
import re13 from '../imgs/re13.jpg';
import re14 from '../imgs/re14.jpg';
import re15 from '../imgs/re15.jpg';
import re16 from '../imgs/re16.jpg';
import re17 from '../imgs/re17.jpg';
import re18 from '../imgs/re18.jpg';
import re19 from '../imgs/re19.jpg';
import re20 from '../imgs/re20.jpg';

const propertyData = [
    {
        id: nanoid(),
        image: re1,
        type: 'housing',
        location: 'Pennsylvania',
        price: 1300,
        state: 'San Bruno Ave',
        address: '275 Estate Dr, East Stroudsburg, PA',
        beds: 4,
        bathrooms: 2,
        length: 6,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re2,
        type: 'housing',
        location: 'Oklahoma',
        price: 1450,
        state: 'Teresita Blvd',
        address: '9401 Maybrook Dr, Oklahoma City, OK',
        beds: 2,
        bathrooms: 3,
        length: 10,
        breadth: 7,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re3,
        type: 'housing',
        location: 'Pennsylvania',
        price: 1560,
        state: 'Castro St',
        address: '6 Iroquois Rd, Albrightsville, PA',
        beds: 3,
        bathrooms: 2,
        length: 7,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re4,
        type: 'housing',
        location: 'Michigan',
        price: 1625,
        state: 'Panorama Dr',
        address: '1856 Greenview Ct, Zeeland, MI',
        beds: 6,
        bathrooms: 4,
        length: 9,
        breadth: 5,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re5,
        type: 'housing',
        location: 'Florida',
        price: 1780,
        state: 'Juanita Way',
        address: '6030 Jessica St, Fort Myers, FL',
        beds: 2,
        bathrooms: 3,
        length: 10,
        breadth: 7,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re6,
        type: 'land',
        location: 'Texas',
        price: 1875,
        state: 'Kirkwood Ave',
        address: '1142 SEVEN IRON WAY, San Antonio, TX',
        beds: 5,
        bathrooms: 3,
        length: 8,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re7,
        type: 'land',
        location: 'Oregon',
        price: 1945,
        state: 'Eucalyptus Dr',
        address: '1510 S Carey Ln, Portland, OR',
        beds: 3,
        bathrooms: 5,
        length: 9,
        breadth: 5,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re8,
        type: 'land',
        location: 'Florida',
        price: 2995,
        state: 'Dellbrook Ave',
        address: '1008 S Val Dr, Inverness, FL',
        beds: 4,
        bathrooms: 2,
        length: 6,
        breadth: 3,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re9,
        type: 'land',
        location: 'Florida',
        price: 3035,
        state: 'Pinehurst Way',
        address: '9125 Hickorynut Hl, Tallahassee, FL',
        beds: 2,
        bathrooms: 4,
        length: 8,
        breadth: 5,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re10,
        type: 'land',
        location: 'Michigan',
        price: 3175,
        state: 'Diamond St',
        address: '2701 Pattengill Ave, Lansing, MI',
        beds: 3,
        bathrooms: 3,
        length: 7,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re11,
        type: 'industrial',
        location: 'Michigan',
        price: 3255,
        state: 'Visitacion Ave',
        address: '4636 62nd St, Holland, MI',
        beds: 4,
        bathrooms: 2,
        length: 10,
        breadth: 8,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re12,
        type: 'industrial',
        location: 'Georgia',
        price: 3385,
        state: 'Topaz Way',
        address: '1230 Briers Creek Dr, Alpharetta, GA',
        beds: 6,
        bathrooms: 4,
        length: 7,
        breadth: 3,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re13,
        type: 'industrial',
        location: 'Oregon',
        price: 3415,
        state: 'Douglass St',
        address: '3112 Honeysuckle Way NE, Salem, OR',
        beds: 3,
        bathrooms: 5,
        length: 9,
        breadth: 6,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re14,
        type: 'industrial',
        location: 'Texas',
        price: 3575,
        state: 'Oak Park Dr',
        address: '9807 Canterhurst Cir, Houston, TX',
        beds: 5,
        bathrooms: 3,
        length: 6,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re15,
        type: 'industrial',
        location: 'Oregon',
        price: 3640,
        state: 'Anderson St',
        address: '993 SW Junction Pl, Gresham, OR',
        beds: 2,
        bathrooms: 4,
        length: 8,
        breadth: 6,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re16,
        type: 'commercial',
        location: 'California',
        price: 3725,
        state: 'La Salle Ave',
        address: '6006 Blue Spruce Ave, Bakersfield, CA',
        beds: 4,
        bathrooms: 2,
        length: 10,
        breadth: 9,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re17,
        type: 'commercial',
        location: 'California',
        price: 3800,
        state: 'Farallones St',
        address: '2229 N Euclid Ave, Upland, CA',
        beds: 3,
        bathrooms: 5,
        length: 8,
        breadth: 7,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re18,
        type: 'commercial',
        location: 'Texas',
        price: 3995,
        state: 'Alemany Blvd',
        address: '11008 Daly Cv, Austin, TX',
        beds: 5,
        bathrooms: 2,
        length: 10,
        breadth: 9,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re19,
        type: 'commercial',
        location: 'California',
        price: 4010,
        state: 'Palm Harbor',
        address: '9307 Caliente Creek Ct, Bakersfield, CA',
        beds: 2,
        bathrooms: 4,
        length: 7,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re20,
        type: 'commercial',
        location: 'California',
        price: 4160,
        state: 'Beverly Springfield',
        address: '6001 Charmain St, Bakersfield, CA',
        beds: 3,
        bathrooms: 3,
        length: 8,
        breadth: 5,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re12,
        type: 'housing',
        location: 'Pennsylvania',
        price: 1365,
        state: 'Topaz Way',
        address: '1230 Briers Creek Dr, Alpharetta, PA',
        beds: 6,
        bathrooms: 4,
        length: 7,
        breadth: 3,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re18,
        type: 'housing',
        location: 'Pennsylvania',
        price: 1395,
        state: 'Alemany Blvd',
        address: '11008 Daly Cv, Austin, PA',
        beds: 5,
        bathrooms: 2,
        length: 10,
        breadth: 9,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re19,
        type: 'housing',
        location: 'Pennsylvania',
        price: 1440,
        state: 'Palm Harbor',
        address: '9307 Caliente Creek Ct, Bakersfield, PA',
        beds: 2,
        bathrooms: 4,
        length: 7,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re8,
        type: 'land',
        location: 'Pennsylvania',
        price: 1100,
        state: 'Dellbrook Ave',
        address: '1008 S Val Dr, Inverness, PA',
        beds: 4,
        bathrooms: 2,
        length: 6,
        breadth: 3,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re9,
        type: 'land',
        location: 'Pennsylvania',
        price: 1150,
        state: 'Pinehurst Way',
        address: '9125 Hickorynut Hl, Tallahassee, PA',
        beds: 2,
        bathrooms: 4,
        length: 8,
        breadth: 5,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re10,
        type: 'land',
        location: 'Pennsylvania',
        price: 1280,
        state: 'Diamond St',
        address: '2701 Pattengill Ave, Lansing, PA',
        beds: 3,
        bathrooms: 3,
        length: 7,
        breadth: 4,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re11,
        type: 'land',
        location: 'Pennsylvania',
        price: 1450,
        state: 'Visitacion Ave',
        address: '4636 62nd St, Holland, PA',
        beds: 4,
        bathrooms: 2,
        length: 10,
        breadth: 8,
        isFavorite: false
    },
    {
        id: nanoid(),
        image: re17,
        type: 'commercial',
        location: 'Pennsylvania',
        price: 1500,
        state: 'Farallones St',
        address: '2229 N Euclid Ave, Upland, PA',
        beds: 3,
        bathrooms: 5,
        length: 8,
        breadth: 7,
        isFavorite: false
    }
];

export default propertyData;