import { nanoid } from 'nanoid';

const filterData = [
    {
        id: nanoid(),
        filterName: 'Location',
        options: [
            'Select location',
            'Pennsylvania',
            'Oklahoma',
            'Michigan',
            'Florida',
            'Texas',
            'Oregon',
            'Georgia',
            'California'
        ]
    },
    {
        id: nanoid(),
        filterName: 'Price',
        options: [
            {
                range: 'Select price',
                minPrice: 0,
                maxPrice: 0
            },
            {
                range: '$1000 - $2000',
                minPrice: 1000,
                maxPrice: 2000
            },
            {
                range: '$2000 - $3000',
                minPrice: 2000,
                maxPrice: 3000
            },
            {
                range: '$3000 - $4000',
                minPrice: 3000,
                maxPrice: 4000
            },
            {
                range: '$4000 - $5000',
                minPrice: 4000,
                maxPrice: 5000
            },  
        ]
    },
    {
        id: nanoid(),
        filterName: 'Property Type',
        options: [
            'Select property type',
            'Housing',
            'Land',
            'Industrial',
            'Commercial'
        ]
    }
];

export default filterData;