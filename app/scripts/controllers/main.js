'use strict';

/**
 * @ngdoc function
 * @name spacePoniesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spacePoniesApp
 */
angular.module('spacePoniesApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    $rootScope.users = [
      [
        {
          'id': 1,
          'choosen': true,
          'name': 'PHP',
          'frameworks': [
            {
              'id': 5,
              'choosen': true,
              'name': 'Laravel'
            }
          ]
        },
        {
          'id': 2,
          'choosen': true,
          'name': 'JS',
          'frameworks': [
            {
              'id': 6,
              'choosen': true,
              'name': 'Angular'
            },
            {
              'id': 7,
              'choosen': true,
              'name': 'React'
            },
          ]
        },
        {
          'id': 3,
          'choosen': true,
          'name': 'HTML'
        },
        {
          'id': 4,
          'choosen': true,
          'name': 'CSS',
          'frameworks': [
            {
              'id': 8,
              'choosen': false,
              'name': 'LESS'
            },
            {
              'id': 9,
              'choosen': false,
              'name': 'SASS'
            }
          ]
        }
      ],
      [
        {
          'id': 1,
          'choosen': false,
          'name': 'PHP',
          'frameworks': [
            {
              'id': 5,
              'choosen': false,
              'name': 'Laravel'
            }
          ]
        },
        {
          'id': 2,
          'choosen': true,
          'name': 'JS',
          'frameworks': [
            {
              'id': 6,
              'choosen': true,
              'name': 'Angular'
            },
            {
              'id': 7,
              'choosen': false,
              'name': 'React'
            },
          ]
        },
        {
          'id': 3,
          'choosen': true,
          'name': 'HTML'
        },
        {
          'id': 4,
          'choosen': true,
          'name': 'CSS',
          'frameworks': [
            {
              'id': 8,
              'choosen': false,
              'name': 'LESS'
            },
            {
              'id': 9,
              'choosen': false,
              'name': 'SASS'
            }
          ]
        }
      ]
    ];

    $rootScope.companies = [
      {
        'mainReq': [
          {
            'id': 2,
            'subMain': [],
            'subExtra': [6, 7]
          },
          {
            'id': 3,
            'subMain': [],
            'subExtra': []
          }
        ],
        'extraReq': [
          {
            'id': 4,
            'subMain': [],
            'subExtra': [9]
          }
        ]
      },
      {
        'mainReq': [
          {
            'id': 1,
            'subMain': [],
            'subExtra': [5]
          },
          {
            'id': 2,
            'subMain': [],
            'subExtra': [6, 7]
          },
          {
            'id': 3,
            'subMain': [],
            'subExtra': []
          },
          {
            'id': 4,
            'subMain': [],
            'subExtra': [8, 9]
          }
        ],
        'extraReq': []
      }
    ];

    $rootScope.companyMatches = [
      [
        {
          'main': [],
          'extra': []
        },
        {
          'main': [],
          'extra': []
        }
      ],
      [
        {
          'main': [],
          'extra': []
        },
        {
          'main': [],
          'extra': []
        }
      ]
    ]

    $rootScope.calcMatches = function() {

    };

  });
