// routes/team-member.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TeamMemberRoute extends Route {
  @service api;

  async model(params) {
    const response = await this.api.fetchTeamMembersData(params.id, {
      include: ['members'],
    });
    return response;
  }
}
