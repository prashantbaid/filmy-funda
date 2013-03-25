function initit() {
  document.addEventListener("deviceready", onDeviceReady, false);

      function onDeviceReady(){
       initDB();
        createDB();
       console.log("device ready now")
       navigator.splashscreen.hide();

       document.addEventListener("backbutton", backKeyDown, true);



    }
}

function backKeyDown() {}

function loadtimer() {
          $("#textarea1").val('');
          $('#tym').empty();
            var sec = var
            601 timer = setInterval(function() { 
              sec--;
              $('#tym').text('Time: '+sec+' s');

            //$('#time span').text(sec--);
   if (sec == 0) {
      $('#time').fadeOut('fast');
      clearInterval(timer);
      $('#tym').listview('refresh');
        

var wordcount = $('#textarea1').val().split(' ').length;
    
    //onDeviceReady();
     
      savepost(wordcount);

   } 
}, 1000);

}

function savepost(str) {
	var postlength=str;
	var posttext=document.getElementById('textarea1').value;
	var curDate = new Date();
	var day=curDate.getDate();
  if(day < 10)
      day="0" + day;
	var month=curDate.getMonth();
  if(month < 10)
    month="0" + month;
	var year=curDate.getFullYear();
	var formattedDate=year+"-"+month+"-"+day;

	var hours=curDate.getHours();
	var mins=curDate.getMinutes();
	if (mins < 10)
  		mins = "0" + mins;
  	var formattedTime=hours+":"+mins;
  	//onDeviceReady();
  	console.log("device is ready. now going to insertion")
  	insertDB(postlength,posttext,formattedDate,formattedTime);
    //byebye();
}



    //will create database Dummy_DB or open it

 

    //function will be called when device ready
var mydb=false;
 var monthnames=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    errorHandler = function (transaction, error) { 
    alert("Error!!");
    return true;  
} 

// null db data handler
nullDataHandler = function (transaction, results) { } 

    initDB = function() {
    	 mydb = openDatabase("post_data", "1.0", "Post Detailss", 200000);
    	 console.log("database initialised");
    	 return;
    	 
    }
    //create table and insert some record
	createDB = function() {
        mydb.transaction(
                         function(transaction) 
                         {
                         var sqlC='CREATE TABLE IF NOT EXISTS post_data (id INTEGER PRIMARY KEY AUTOINCREMENT, post_text TEXT NOT NULL, pdate TEXT NOT NULL, ptime TEXT NOT NULL, word_count INTEGER NOT NULL);';
                         transaction.executeSql(sqlC, [], nullDataHandler, errorHandler); 
                         });
        console.log("table created")
        return;
    }
    function insertDB(postlength,posttext,formattedDate,formattedTime) {
    	var sqlI = "INSERT INTO post_data(post_text,pdate,ptime,word_count) VALUES('"
    + posttext
    + "','"
    + formattedDate
    + "','"
    + formattedTime
    + "','"
    + postlength
    + "')";
console.log("inside insertdb now");
    	console.log("inside inserting now")
 		mydb.transaction(
                             function(transaction) {
                             transaction.executeSql(sqlI, [], function(){
                window.location="#dashboard";
            }, nullDataHandler, errorHandler); 
                             });
 		//alert("inserted");
 		console.log("inserted");
    //console.log("loading lc");
 	//loadCelebs();
  //console.log("loading bb");
//  if(errorHandler()==false)
 	//	return;


}

postsDataHandler=function(transaction, results) {
	console.log("inside posts data handler");
 
  
      // Handle the results 
		$('#loadday').empty();
   console.log("result loop")
		$.each(results.rows,function(index){
			var row = results.rows.item(index);
      var curmonth=monthnames[row['Month']-0];
      console.log(row['Month'])
      var stylishdate=row['Day']+" "+curmonth+" "+row['Year'];
      //console.log(row['id']);
      var aid=row['id'];
      console.log(aid);
			$('#loadday').append('<li><a href="#four" onclick="loadposts('+aid+')" data-ajax="false"><h3 class="ui-li-heading">'+stylishdate+'</h3><p class="ui-li-desc">Time: '+row['ptime']+' , Words: '+row['word_count']+'</p></a></li>');
		});

		$('#loadday').listview('refresh');
    }
 
 
    // load the currently selected icons
    loadCelebs = function(y,m) {
      var monthy='0'+m;
      var yeary=y;
    	console.log("prashant"+monthy);
      try {
 		//initDB();
        mydb.transaction(
            function(transaction) {
            	console.log("Inside transaction function");
               transaction.executeSql('SELECT strftime("%m", pdate) as Month, strftime("%d", pdate) as Day, strftime("%Y", pdate) as Year, word_count, ptime, post_text, id  FROM post_data where Month= ?' ,[monthy], postsDataHandler, errorHandler);
            });
 
      } catch(e) {
        alert(e.message);
      }
 
}

    loadposts = function(a) {
      var idm=a;
      Math.floor(idm);
      try {
    //initDB();
        mydb.transaction(
            function(transaction) {
              console.log(idm);
               transaction.executeSql('SELECT post_text FROM post_data WHERE id = ?',[a], postDataHandler, errorHandler);
               console.log("success!!");
            });
      } catch(e) {
        alert(e.message);
      }
 
}
postDataHandler=function(transaction, results) {
  console.log("inside postshandler");
    $.each(results.rows,function(index){
      var row = results.rows.item(index);
      console.log("inside postshandler");
      console.log(row['post_text'])
      var abc=row['post_text'];
        $('#loadpost').text(abc);
        });
 //window.location="post.html";

  }

      loadyear = function() {
      try {
    //initDB();
        mydb.transaction(
            function(transaction) {
              console.log("inside load year");
               transaction.executeSql('SELECT distinct strftime("%Y", pdate) as Year FROM post_data' ,[], yearDataHandler, errorHandler);
               console.log("success!!");
            });
      } catch(e) {
        alert(e.message);
      }
 
}
yearDataHandler=function(transaction, results) {
  $('#loadyear').empty();
  console.log("inside yearhandler");
    $.each(results.rows,function(index){
      var row = results.rows.item(index);
      console.log("inside postshandler");
     // console.log(row['post_text'])
      var abc=row['Year'];
      console.log(abc)
              $('#loadyear').append('<li><a href="#two" onclick="loadmonth('+abc+')"><h3 class="ui-li-heading">'+abc+'</h3></a></li>');
        });
 $('#loadyear').listview('refresh');

  }

      loadmonth = function(x) {
      try {
        var mon=x;
    //initDB();
        mydb.transaction(
            function(transaction) {
              console.log("inside load month");
              console.log(mon);
               transaction.executeSql('SELECT distinct strftime("%m", pdate) as Month FROM post_data where pdate between ? and ?' ,['01-01-'+mon+'','31-12-'+mon+''], function(transaction, results) {
  $('#loadmonth').empty();
  console.log("inside monthhandler");
    $.each(results.rows,function(index){
      var row = results.rows.item(index);
     
     var y=mon;
    var m=row['Month'];
      var abc=monthnames[row['Month']-0];
      console.log(mon+"bitch");
              $('#loadmonth').append('<li><a href="#three" onclick="loadCelebs('+mon+', '+m+')"><h3 class="ui-li-heading">'+abc+'</h3></a></li>');
              console.log(mon+"bitch2");
        });
 $('#loadmonth').listview('refresh');
 //indow.location="#two"

  }
, errorHandler);
               console.log("success!!");
            });
      } catch(e) {
        alert(e.message);
      }
 
}


    stats = function() {
      try {
    //initDB();
        mydb.transaction(
            function(transaction) {
               transaction.executeSql('SELECT sum(word_count) AS WORDSUM, id, strftime("%m", pdate) as Month, strftime("%d", pdate) as Day, strftime("%Y", pdate) as Year FROM post_data',[], statsDataHandler, errorHandler);

                              transaction.executeSql('SELECT strftime("%m", pdate) as Month, strftime("%d", pdate) as Day, strftime("%Y", pdate) as Year, id FROM post_data',[], challengeDataHandler, errorHandler);


               console.log("success!!");
            });
      } catch(e) {
        alert(e.message);
      }
 
}


challengeDataHandler=function(transaction, results) {

  var total;
                                $.each(results.rows,function(index){
                              var row = results.rows.item(index);
                              total=row['id'];
                            });
                                var oneDay = 24*60*60*1000; 
                                var count=0, one, two, first, second, diff;
                                for(var i=0; i<results.rows.length-1; i++){

                                  var one= results.rows.item(i).Year+','+results.rows.item(i).Month+','+results.rows.item(i).Day;
                               // console.log(last);
                               var two= results.rows.item(i+1).Year+','+results.rows.item(i+1).Month+','+results.rows.item(i+1).Day;
                             //  console.log(parsedatetwo);
                             var first = new Date(one);
                               var second = new Date(two);

                                var diff = Math.round(Math.abs((first.getTime() - second.getTime())/(oneDay)));
                              
                                if(diff==1)
                                  count++;

                                }

                                Math.floor(count);
                                console.log("Count is: "+count);
                                if(total>=1)
                                      $('#once').attr('src', 'check.png');
                                else
                                    $('#once').attr('src', 'cross.png');

                                if(count>=3)
                                      $('#thrice').attr('src', 'check.png');
                                else
                                    $('#thrice').attr('src', 'cross.png');

                                if(count>=7)
                                      $('#seven').attr('src', 'check.png');
                                else
                                    $('#seven').attr('src', 'cross.png');

                                if(count>=30)
                                      $('#thirty').attr('src', 'check.png');
                                else
                                    $('#thirty').attr('src', 'cross.png');

                                if(count>=120)
                                      $('#onetwenty').attr('src', 'check.png');
                                else
                                    $('#onetwenty').attr('src', 'cross.png');

                                if(count>=365)
                                      $('#threesixfive').attr('src', 'check.png');
                                else
                                    $('#threesixfive').attr('src', 'cross.png');

                                //var oneDay = 24*60*60*1000; 
                                var last=results.rows.length-1;
                               // console.log(results.rows.item(0).Year+','+results.rows.item(0).Month+','+results.rows.item(0).Day)
                                var parsedateone= results.rows.item(0).Year+','+results.rows.item(0).Month+','+results.rows.item(0).Day;
                                console.log(last);
                               var parsedatetwo= results.rows.item(last).Year+','+results.rows.item(last).Month+','+results.rows.item(last).Day;
                               console.log(parsedatetwo);
                                var firstDate = new Date(parsedateone);
                               var secondDate = new Date(parsedatetwo);

                                var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
                                console.log(diffDays)
                               $('#apd').text(total/diffDays);
                              } 

statsDataHandler=function(transaction, results) {
  console.log("inside postshandler");
  
  
    $.each(results.rows,function(index){
      var row = results.rows.item(index);
      console.log(results.rows.item(0).Day)
      console.log("inside postshandler");
      console.log(row['WORDSUM'])
      console.log(row['id'])
      var abc=row['WORDSUM']/(row['id']*10);
      abc=Math.ceil(abc * 10) / 10;
        $('#wpm').text(abc);
        $('#postcount').text(row['id']);
        $('#wordc').text(row['WORDSUM']);
        });
 $('#sta').listview('refresh');
//$('#chall').listview('refresh');
  }

  function exit() {
    navigator.app.exitApp();
  }
  function hidedialog() {
      $('#message').dialog('close');
  }