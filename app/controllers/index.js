// controllers/application.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service api;

  // eslint-disable-next-line ember/classic-decorator-hooks
  async init() {
    super.init(...arguments);
    this.fetchData();
  }

  async fetchData() {
    const response = await this.api.fetchTeamData();
    console.log('response', response);
    // eslint-disable-next-line ember/classic-decorator-no-classic-methods
    this.set('data', response);
  }
}
