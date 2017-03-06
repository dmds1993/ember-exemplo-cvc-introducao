import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  mealPlan: DS.attr('string'),
  name: DS.attr('string')
});
