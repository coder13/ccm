/* COMMENTED OUT AS WORKAROUND FOR https://github.com/okgrow/analytics/issues/57 --JFLY
Meteor.publish(null, function() {
  if(this.userId) {
    return Meteor.users.find(
      {_id: this.userId},
      {fields: {  'services.facebook.email': 1,
                  'services.google.email': 1,
                  'services.github.email': 1 }});
  } else {
    this.ready();
  }
});
*/
