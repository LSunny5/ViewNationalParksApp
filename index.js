'use strict';






function startApp() {
  $('form').submit(event => {
    event.preventDefault();





    const searchTerm = $('#searchArea').val();
    const maxResults = $('#maxResults').val();
    getYouTubeVideos(searchTerm, maxResults);



  });
}

$(startApp);