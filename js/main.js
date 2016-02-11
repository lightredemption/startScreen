$(document).ready(function () {
  function startTime () {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
    $('#quote').html(quotes[Math.floor(Math.random() * (quotes.length))].toString())
    var t = setInterval(updateTime, 1000)
  }

  function updateTime () {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
  }

  $('#lock').click(function () {
    $('#sfw').addClass('hidden')
    $('#nsfw').removeClass('hidden')
    $('#lock').addClass('hidden')
    $('#unlock').removeClass('hidden')
  })

  $('#unlock').click(function () {
    $('#sfw').removeClass('hidden')
    $('#nsfw').addClass('hidden')
    $('#lock').removeClass('hidden')
    $('#unlock').addClass('hidden')
  })

  var quotes = [
    "Die hard, live harder",
    "Degenerates, all of you",
    "There's never a bus you have to chase after",
    "All men are stupid. All women are crazy",
    "There's plenty of time to sleep once you're dead",
    "Life is just convincing people you deserve things you don't"
  ]
  window.onload = startTime()
})
