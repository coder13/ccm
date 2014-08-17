if(Meteor.isClient) {
  Router.onBeforeAction('dataNotFound');
}

Router.map(function() {
  this.route('home', {path:'/'});
  this.route('compTemplate', {
    path: "/:wcaCompetitionId",
    data: function() {
      var wcaCompetitionId = this.params.wcaCompetitionId;
      return Competitions.findOne(
        { wcaCompetitionId: wcaCompetitionId },
        { fields: { wcaCompetitionId: 1 } }
      );
    }
  });
  this.route('roundTemplate', {
    path: "/:wcaCompetitionId/:eventCode/:roundCode",
    template: 'roundTemplate',
    data: function() {
      var wcaCompetitionId = this.params.wcaCompetitionId;
      var roundCode = this.params.roundCode;
      var eventCode = this.params.eventCode;

      var competition = Competitions.findOne(
        { wcaCompetitionId: wcaCompetitionId },
        { fields: { wcaCompetitionId: 1 } }
      );
      if(!competition) {
        return null;
      }

      var round = Rounds.findOne(
        {
          competitionId: competition._id,
          eventCode: eventCode,
          roundCode: roundCode
        }
      );
      if(!round) {
        return null;
      }
      return {
        competition: competition,
        round: round
      };
    }
  });

});

Router.configure({
  notFoundTemplate: "notFound",
  layoutTemplate: "layout"
});