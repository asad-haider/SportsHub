export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   name: 'Books',
  //   url: '/books',
  //   icon: 'icon-speedometer',
  // },
  {
    name: 'Sports',
    url: '/sports',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Soccer',
        url: '/sports/soccer',
        icon: 'icon-puzzle'
      },
      {
        name: 'Motorsport',
        url: '/sports/motorsport',
        icon: 'icon-puzzle'
      },
      {
        name: 'Ice Hockey',
        url: '/sports/iceHockey',
        icon: 'icon-puzzle'
      },
      {
        name: 'Basketball',
        url: '/sports/basketball',
        icon: 'icon-puzzle'
      },
    ]
  },
];
