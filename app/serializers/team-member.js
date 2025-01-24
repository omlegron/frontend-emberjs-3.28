import Serializer from '@ember-data/serializer/json-api';

export default class TeamMemberSerializer extends Serializer {
  attrs = {
    name: { serialize: false },
    description: { serialize: false },
  };
}
