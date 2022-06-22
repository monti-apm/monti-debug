Tinytest.addAsync(
  'Server - Utils.getDebugAuthKey - get key from environemnt', 
  function(test, done) {
    var key = Random.id();
    process.env.KADIRA_DEBUG_AUTH_KEY = key;
    var keyReceived = Utils.getDebugAuthKey();
    test.equal(keyReceived, key);

    delete process.env.KADIRA_DEBUG_AUTH_KEY;
    done();
  }
);

Tinytest.addAsync(
  'Server - Utils.getDebugAuthKey - get key from Meteor.settings', 
  function(test, done) {
    var key = Random.id();
    var originalKadira = Meteor.settings.monti;
    Meteor.settings.monti = { debug: {authKey: key } };
    var keyReceived = Utils.getDebugAuthKey();

    test.equal(keyReceived, key);
    Meteor.settings.monti = originalKadira;
    done();
  }
);

Tinytest.addAsync(
  'Server - Utils.getDebugAuthKey - when there is no key provided', 
  function(test, done) {
    var keyReceived = Utils.getDebugAuthKey();
    test.equal(keyReceived, undefined);
    done();
  }
);