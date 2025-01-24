import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class TeamMemberModel extends Model {
  @attr('string') name;
  @attr('string') description;
}
