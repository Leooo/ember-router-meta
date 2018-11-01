'use strict';

module.exports = function() {
  return {
    scenarios: [
      {
        name: 'ember-lts-2.12',
        npm: {
          devDependencies: {
            'ember-source': '~2.12.0'
          }
        }
      },
      {
        name: 'ember-lts-2.16',
        npm: {
          devDependencies: {
            'ember-source': '~2.16.0'
          }
        }
      },
      {
        name: 'ember-lts-2.18',
        npm: {
          devDependencies: {
            'ember-source': '~2.18.0'
          }
        }
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': urls[0]
          }
        }
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': urls[1]
          }
        }
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': urls[2]
          }
        }
      },
      {
        name: 'ember-default',
        npm: {
          devDependencies: {}
        }
      }
    ]
  };
};
