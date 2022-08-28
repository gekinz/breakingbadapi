var requestOptions = {
    method: 'GET',
    Headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',

  };
  
  fetch("https://breakingbadapi.com/api/random-death", requestOptions)
    .then(response => response.json())
    .then(char => {

        
        let charImgEl = char.img;

        let charNameEl = char.death;
        let charNickNameEl = char.nickname;
        let charOccupationEl = char.occupation;

        let charKillerEl = char.responsible;
        let charDeathCauseEl = char.cause;
        let charLastWordsEl = char.last_words;
        
        let charSeasonEl = char.season;
        let charEpisodeEl = char.episode;

        

        console.log(char);

        function refreshChar () {
            document.getElementById('charImg').style.background = "url(" + charImgEl + ") no-repeat";
            document.getElementById('charName').innerText = charNameEl;
            document.getElementById('charNickname').innerText = charNickNameEl;
            document.getElementById('charOccupation').innerText = charOccupationEl;
            document.getElementById('charKiller').innerText = charKillerEl;
            document.getElementById('charDeathCause').innerText = charDeathCauseEl;
            document.getElementById('charLastWords').innerText = charLastWordsEl;
            document.getElementById('charSeason').innerText = charSeasonEl;
            document.getElementById('charEpisode').innerText = charEpisodeEl;

            if (charNameEl == charNickNameEl) {
                document.getElementById('charName').innerText = "Full name unknown";
            }
        }
        refreshChar();


    })
    .catch(error => console.log('error', error));

 //  {
 //       "death_id": 45,
 //       "death": "Mike Ehrmantraut",
 //       "cause": "Shot in the gut.",
 //       "responsible": "Walter White",
 //       "last_words": "Shut the fuck up and let me die in peace.",
 //       "season": 5,
 //       "episode": 7,
 //       "occupation": [
 //           "Hitman",
 //           " Private Investigator",
 //           " Ex-Cop"
 //       ],
 //       "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
 //       "nickname": "Mike",
 //       "appearance": [
 //           2,
 //           3,
 //           4,
 //           5
 //       ]
 //   }