import { nanoid } from 'nanoid';
const navData = [
    {
        id: nanoid(),
        title: 'Rent',
        isClicked: false,
        isDropdown: false
    },
    {
        id: nanoid(),
        title: 'Buy',
        isClicked: false,
        isDropdown: false
    },
    {
        id: nanoid(),
        title: 'Sell',
        isClicked: false,
        isDropdown: false
    },
    {
        id: nanoid(),
        title: 'Manage Property',
        isClicked: false,
        isDropdown: true
    },
    {
        id: nanoid(),
        title: 'Resources',
        isClicked: false,
        isDropdown: true
    },
    {
        id: nanoid(),
        title: 'Favorites',
        isClicked: false,
        isDropdown: false
    }
];

export default navData;