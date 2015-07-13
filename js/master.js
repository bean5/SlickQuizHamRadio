// Put all your page JS here

$(function () {
    //Default way of setting up upon page load
    // $('#slickQuiz').slickQuiz(
    //   {
    //     skipStartButton: true,
    //     randomSortQuestions: true
    //   }
    // );

    //setting things up when options are set for quiz.
    $('#random').on('click', function() {
      setup(true);
    })

    $('#notRandom').on('click', function() {
      setup(false);
    })

    function setup(randomSortQuestions) {
      $('#slickQuiz').slickQuiz(
        {
          skipStartButton: true,
          randomSortQuestions: randomSortQuestions
        }
      );

      $('#options').remove();
    }
});
