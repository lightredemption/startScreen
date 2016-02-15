$(document).ready(function() {
  function startTime() {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
    window.i = Math.floor(Math.random() * (quotes.length))
    getQuote(window.i)
    getWeather()
    var t = setInterval(updateTime, 1000)
    var c = setInterval(getWeather, 60000)
  }

  $('#quote').click(function() {
    if (i < quotes.length) {
      i++
    } else {
      i = 0
    }
    getQuote(i)
  })

  function getWeather() {
    $.simpleWeather({
      location: 'Cincinnati, OH',
      woeid: '',
      unit: 'c',
      success: function(weather) {
        html = ' ' + weather.temp + '&deg;'

        $('#temp').html(html)
      },
      error: function(error) {
        $('#temp').html('<p>' + error + '</p>')
      }
    })
  }

  function getQuote(index) {
    $('#quote').html(quotes[index].toString())
  }

  function updateTime() {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
  }

  $('#lock').click(function() {
    $('#sfw').addClass('hidden')
    $('#nsfw').removeClass('hidden')
    $('#lock').addClass('hidden')
    $('#unlock').removeClass('hidden')
    $('#quote').removeClass('hidden')
  })

  $('#unlock').click(function() {
    $('#sfw').removeClass('hidden')
    $('#nsfw').addClass('hidden')
    $('#lock').removeClass('hidden')
    $('#unlock').addClass('hidden')
    $('#quote').addClass('hidden')
  })

  var quotes = [
    'Die hard, live harder',
    "Doesn't hurt, doesn't count",
    'There are two types of people: me and those not me',
    'You always have time to not do something',
    'Due tomorrow, do tomorrow',
    'Fairness only in death',
    'Equality is hating everyone equally',
    'Degenerates, all of you',
    "There's never a bus you have to chase after",
    'Men are stupid, women are crazy',
    "You can sleep when you're dead",
    "The dead don't speak because they have nothing to say",
    "Life is just convincing people you deserve things you don't",
    "Business is people pretending their success isn't luck",
    'The enemy of your enemy is probably your enemy',
    'Relativism is weak, absolutism is inflexible',
    "There's a special place in hell for Disney writers",
    "If you're in a room with Hitler, Stalin, and a bullet, shoot yourself",
    "Boredom is the great man's poison",
    'Doing the same thing repeatedly expecting a different outcome is called training',
    'No one is created equal',
    "No one cares about your children, that's why they're your children",
    'Life is not that complicated',
    'Religion is legally and literally child abuse',
    "You don't need to believe in a god to be religious",
    'Perversion is just the minority fetishes',
    'A perfect world is a totalitarian one',
    'Liberalism is about individual rights',
    'Collectivism is about undoing progress',
    "Life isn't about living up to expectations of dead people"
  ]
  window.onload = startTime()
})
