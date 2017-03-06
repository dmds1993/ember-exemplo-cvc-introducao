import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      quarto: this.store.queryRecord('room', params),
      hotel: this.store.peekRecord('hotel', params.id)
    } 
  }
});
