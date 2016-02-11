$(document).ready(function () {
  function startTime () {
    var today = new Date()
    $('#timer').html(today.toLocaleString())
    var t = setTimeout(startTime, 500)
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

  window.onload = startTime()
})
