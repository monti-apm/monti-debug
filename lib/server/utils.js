Utils = Utils || {};

Utils.getDebugAuthKey = function () {
  var authKey = process.env.KADIRA_DEBUG_AUTH_KEY || process.env.MONTI_DEBUG_AUTH_KEY;
  if(authKey) {
    return authKey;
  }

  // Getting it from Meteor.settings.
  authKey = Meteor.settings && 
    Meteor.settings.monti && 
    Meteor.settings.monti.debug &&
    Meteor.settings.monti.debug.authKey || Meteor.settings.kadira && 
    Meteor.settings.kadira.debug &&
    Meteor.settings.kadira.debug.authKey;

  return authKey;
};