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
    console.log('app');
  }
}
