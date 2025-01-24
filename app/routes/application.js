// routes/application.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service api;

  async model() {
    const response = await this.api.fetchTeamData();
    return response.data;
  }
}
