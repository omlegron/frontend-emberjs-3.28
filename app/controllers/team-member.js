import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class TeamMemberController extends Controller {
  @service store;
  @service api;

  // eslint-disable-next-line ember/classic-decorator-hooks
  async init() {
    super.init(...arguments);
  }

  teamMember = null;

  beforeModel() {
    this.teamMember = null;
  }

  model() {
    console.log('isModel');
  }
}
