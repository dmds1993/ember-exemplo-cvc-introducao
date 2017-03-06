import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  links: DS.attr(),
  location: DS.attr(),
  name: DS.attr('string'),
  rooms: DS.attr()
});
