$(document).ready(function () {
  function startTime () {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
    getQuote()
    var t = setInterval(updateTime, 1000)
  }

  $('#quote').click(function (){
    getQuote()
  })

  function getQuote () {
    $('#quote').html(quotes[Math.floor(Math.random() * (quotes.length))].toString())
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
    "Doesn't hurt, doesn't count",
    "There are two types of people: you and me",
    "You always have time to not do something",
    "Due tomorrow, do tomorrow",
    "Fairness only in death",
    "Equality is hating everyone equally",
    "Degenerates, all of you",
    "There's never a bus you have to chase after",
    "Men are stupid, women are crazy",
    "You can sleep when you're dead",
    "Life is just convincing people you deserve things you don't"
  ]
  window.onload = startTime()
})
