// //nytimes
// var html = ""
// var apiurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=paris&fq=subject:paris&begin_date=20151113&sort=newest&response-format=.json&api-key=ffd87bc06f550f20e494164b12dec344:19:58249400"
// $(document).ready(function(){
//         console.log("document ready")
//         $.getJSON(apiurl,function(json){
//             console.log(json);
//             // <!-- $("#nytimes").append('<p>"'+json.title+'"</p>'); -->
//
//             $.each(json.items,function(i,data){
//                 html += section_name;
//                 // html += '<div class="flickrinfo"><h3>' + data.title + '</h3></div>';
//                 // html += data.description.title + '</div>';
//                 });
//             console.log(html);
//             $("#nytimes").append(html);
//         });
//
//
// });

$(function() {

  var apiurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?&q=attacks&fq=headline:paris&begin_date=20151113&sort=newest&response-format=.json&api-key=ffd87bc06f550f20e494164b12dec344:19:58249400"
  // var access_token = location.hash.split('=')[1];
  var html = ""

    $.ajax({
      type: "GET",
      dataType: "json",
      cache: false,
      url: apiurl,
      success: parseData
    });


    function parseData(json){
      console.log(json);

      $.each(json.response.docs,function(i,data){

        var date = new Date(data.pub_date);
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var day = days[date.getDay()];
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var month = months[date.getMonth()];
        var dayOfMonth = date.getDate();
        var year = date.getFullYear();

        html += '<br><div class="sectionname">' + data.section_name + '</div>';
        html += '<div class="nytheadline"><a href="' + data.web_url + '" target="_blank">' + data.headline.main + '</a></div>';
        html += '<div class="date"><span class="byline">' + data.byline.original + '</span> | ' + month + ' ' + dayOfMonth + ', ' + year + '</div>'

        if (data.lead_paragraph == null) {
          }
          else {
            html += '<div class="firstgraf">' + data.lead_paragraph + '</div>'
          }
      });

      console.log(html);
      $("#nytimes").append(html);

    }




 });
