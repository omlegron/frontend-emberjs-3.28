import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | team member', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('team-member');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('team-member', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
