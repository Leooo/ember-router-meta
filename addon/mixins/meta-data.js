import Ember from 'ember';
const {Mixin, inject, getOwner} = Ember;

export default Mixin.create({
  routeMetadata: inject.service(),

  _currentRouteName() {
    let container = getOwner(this);
    return container.lookup('controller:application').get('currentRouteName');
  },
  //TODO: Change editRoute to return updated metaData
  /**
   * Edit the meta of the route
   * @param  {String} route The route name e.g. authenticated.premises
   * @param  {String} key   The key for the value that you wish to change
   * @param  {String} val   New value for metadata
   * @return {Object} metaData
   */
  editMetaData(route, key, val) {
    this.get('routeMetadata').editRoute(route, key, val);
    return this.get('routeMetadata').getMetaDataByRoute(route);
  }
});
