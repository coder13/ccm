Template.competitionResults.helpers({
  rounds: function() {
    var rounds = Rounds.find({
      competitionId: this.competitionId,
      eventCode: this.eventCode
    }, {
      fields: {
        roundCode: 1,
        eventCode: 1,
      }
    });
    return rounds;
  }
});