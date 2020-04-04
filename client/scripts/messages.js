var Messages = {

    allMessages : [],

    updateMessages: function(data) {

      console.log(data.results) //returns array of message objects

      for (var i = 0; i < data.results.length; i++) {
        var eachMessage = data.results[i];
        MessagesView.renderMessage(eachMessage);
        Messages.allMessages.push(eachMessage);
      }
    }

};

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };
