import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Recieving:")
    console.log(data.body)
    $('#message-container').append('<div class="message"> ' + data.body + '</div>')
    $('.msg-body').val('');
    scroll_bottom();
  }
});


let submit_messages;
let scroll_bottom;

scroll_bottom = function() {
  if ($('#message-container').length >0 ) {
      $('#message-container').scrollTop($('#message-container')[0].scrollHeight);
  }
}

$(document).on('turbolinks:load', function () {
  submit_messages()
  scroll_bottom();
})

submit_messages = function () {
  // $('#message_body').on('keydown', function (event) {
  //   // alert(event.keyCode);
  //   if (event.keyCode == 13) {
  //     $('input#msg-send').trigger('click')
  //     event.target.value = ''
  //     event.preventDefault()
  //   }
  // })
}