$(document).ready(function () {
  function startTime () {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
    window.i = Math.floor(Math.random() * (quotes.length))
    getQuote(window.i)
    var t = setInterval(updateTime, 1000)
  }

  $('#quote').click(function () {
    if (i < quotes.length) {
      i ++
    } else {
      i = 0
    }
    getQuote(i)
  })

  function getQuote (index) {
    $('#quote').html(quotes[index].toString())
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
    $('#quote').removeClass('hidden')
  })

  $('#unlock').click(function () {
    $('#sfw').removeClass('hidden')
    $('#nsfw').addClass('hidden')
    $('#lock').removeClass('hidden')
    $('#unlock').addClass('hidden')
    $('#quote').addClass('hidden')
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
