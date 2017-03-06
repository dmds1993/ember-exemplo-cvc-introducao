import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForQueryRecord(query, modelName) {
    return `${this.host}/hotels/${query.id}/rooms/${query.rateToken}`
  }
});
