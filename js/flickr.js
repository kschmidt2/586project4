//flickr



  console.log("flickrcalled")
  var html = ""
  var apiurl = "http://api.flickr.com/services/feeds/photos_public.gne?tags=parisattacks&tagmode=any&format=json&jsoncallback=?"
  $(document).ready(function(){
          console.log("document ready")
          $.getJSON(apiurl,function(json){
              console.log(json);
              <!-- $("#flickr").append('<p>"'+json.title+'"</p>'); -->

              $.each(json.items,function(i,data){
                  html += '<a href="' + data.link + '" target="_blank"><img src ="' + data.media.m + '" style="width: 100%"></a>';
                  html += '<div class="flickrinfo"><h3>' + data.title + '</h3></div>';
                  // html += data.description.title + '</div>';
                  });
              console.log(html);
              $("#flickr").append(html);
          });

          // $.readyFn.execute();


  });

  



//instagram

    $(function() {

    	var apiurl = "https://api.instagram.com/v1/tags/parisattacks/media/recent?access_token=462521447.e7ab2a4.f95b2c0dc6ef4439b6aafe0b2c35cb15&callback=?"
    	var access_token = location.hash.split('=')[1];
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

    			$.each(json.data,function(i,data){
            html += '<a href="' + data.link + '" target="blank"><img src ="' + data.images.low_resolution.url + '" style="width:100%"></a>'
            html += '<div class="flickrinfo"><h3>User: '+ data.caption.from.username +'</h3>';
            html += data.caption.text +'</div>';
    			});

    			console.log(html);
    			$("#instagram").append(html);

    		}




     });
