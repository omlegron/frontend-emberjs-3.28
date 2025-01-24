import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr('integer') id;
  @attr('string') name;
  @attr('string') description;
}
