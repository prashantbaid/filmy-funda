
//whenever the app is loaded, initit() function is called
function initit(){
document.addEventListener("deviceready", onDeviceReady, false); //this ititializes phonegap, we must do this before we do anything else
    console.log("Inside initit"); //avoid all console.log lines. it just prints whatever you write inside the brackets.

      function onDeviceReady(){ //when initialization complete, the onDeviceReady function is executed
        console.log("Inside odr");
       initDB(); //after phonegap is initialized, database is initialized
        createDB(); //after initializing database, we create the database.
      
   }
       
    }
//the initialize database function
        initDB = function() {
         mydb = openDatabase("songlists", "1.0", "Song Lists", 200000); //mydb is our database variable, we will use this variable in every database operations.
         console.log("database initialised");
         
         return;
         
    }
    createDB = function() {
        mydb.transaction(
                         function(transaction) 
                         {
                         var sqlC='CREATE TABLE IF NOT EXISTS songlists (id INTEGER PRIMARY KEY AUTOINCREMENT, songname TEXT NOT NULL, songurl TEXT NOT NULL, moviename TEXT NOT NULL, hint TEXT NOT NULL, optionid TEXT NOT NULL, level TEXT NOT NULL);';
                         var sqlQ='CREATE TABLE IF NOT EXISTS userinfo (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, score TEXT NOT NULL, dated TEXT NOT NULL);'
                         transaction.executeSql(sqlC, [], nullDataHandler1, errorHandler); 
                         transaction.executeSql(sqlQ, [], nullDataHandler1, errorHandler); 
                         });
        console.log("table created")
        insertDB(); //after the database is created, we will populate the database by calling insertDB() function.
    }



    insertDB = function() { 
        //here we are checking whether the database is already populated or not.
            var rowcount=0;   
            mydb.transaction(
            function(transaction) {
                console.log("Cheking if rows already exists");
               transaction.executeSql('SELECT * FROM songlists' , [], function(transaction,results) { //doing this query to retrieve the rowcount
                    rowcount=results.rows.length; //saving the rowcount in a variable
                    console.log(rowcount);
                    if(rowcount==0) { //if rowcount is 0, means database is not populated
                        insertion(); //so we populate database by calling insertion() function.
                      }
               }, errorHandler);
               console.log("alright")
              
            });

           
            
        }
        //this function is only called when rowcount=0
        insertion = function() {
    var sqlquery = new Array("INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('deewana hai dekho','http://soundx.mp3pk.com/indian/kabhi_khushi_kabhi_gham/k3g08%28www.songs.pk%29.mp3','kabhi khushi kabhi gham','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('its the time to disco','http://soundx.mp3pk.com/indian/kal_ho_na_ho/2%28mp3pk.com%29.mp3','kal ho na ho','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('na tum jaano na hum','http://soundx.mp3pk.com/indian/kaho_na_pyar_hai/7%28mp3pk.com%29.mp3','kaho na pyaar hai','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('ishq hua','http://sound6.mp3pk.com/indian/aaja_nachle/aajanachle02%28www.songs.pk%29.mp3','aaja nachle','dhak dhak girl's comeback','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('kitni baatein','http://soundx.mp3pk.com/indian/lakshya/4%28mp3pk.com%29.mp3','lakshya','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('paayaliya','http://sound15.mp3pk.com/indian/devd/devd14%28www.songs.pk%29.mp3','Dev D','based on a bengali novel!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('chhalka re','http://sound.mp3pk.com/indian/sathiya/saathiya02%28www.songs.pk%29.mp3','saathiya','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('kyun','http://sound12.mp3pk.com/indian/kambakkhtishq/kambakkhtishq05%28www.songs.pk%29.mp3','kambakht ishq','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('saiyyan re','http://sound2.mp3pk.com/indian/salaam-e-ishq/salaameishq02%28www.songs.pk%29.mp3','salaam-e-ishq','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('aana mere pyaar ko','http://sound3x.mp3pk.com/indianx/kabhi_haan_kabhi_na/khkn2%28www.songs.pk%29.mp3','kabhi haan kabhi na','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('tanhayi','http://soundxx.mp3pk.com/indian/dil_chahta_hai/6%28mp3pk.com%29.MP3','dil chahta hai','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('tum se','http://sound.mp3pk.com/indian/na_tum_jano_na_hum/ntjnh04%28songs.pk%29.mp3','na tum jaano na hum','daggu is the actor!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('tinka tinka','http://soundx.mp3pk.com/indian/karam/5%28mp3pk.com%29.mp3','karam','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('ding dong','http://sound.mp3pk.com/indian/kuch_to_hai/1kth%28songs.pk%29.mp3','kuch toh hai','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Aye bekhabar','http://sound20.mp3pk.com/indian/zeher/zeher04%28www.song.pk%29.mp3','Zeher','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Humne ghar chhoda hai','http://soundxx.mp3pk.com/indian/dil/2%28mp3pk.com%29.mp3','Dil','Perfectionist!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Yeh dhuan dhuan sa','http://sound20.mp3pk.com/indian/tumsa_nahin_dekha/9%28mp3pk.com%29.mp3','Tumsa nahin dekha','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('dil mein jaagi','http://sound.mp3pk.com/indian/sur/sur4%28songs.pk%29.mp3','Sur','actor=singer!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('mundeyan tu','http://soundxx.mp3pk.com/indian/boom/7%28mp3pk.com%29.mp3','Boom','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('koi fariyaad','http://sound20.mp3pk.com/indian/tum_bin/tumbin03%28www.songs.pk%29.mp3','Tum bin','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('halke halke','http://sound3x.mp3pk.com/indianx/honeymoon_travels/honeymoon_tpl04%28www.songs.pk%29.mp3','Honeymoon travels pvt. ltd.','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('saathiya','http://sound5.mp3pk.com/indian/darling/darling03%28www.songs.pk%29.mp3','Darling','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('shaka laka baby','http://sound3.mp3pk.com/indianx/nayak/nayak2%28www.songs.pk%29.mp3','Nayak','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('kaale megha','http://soundx.mp3pk.com/indian/laagan/2%28mp3pk.com%29.mp3','Lagaan','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('O saaya','http://sound12.mp3pk.com/indian/slumdog_millionaire/slumdog_millionaire06%28www.songs.pk%29.mp3','Slumdog millionaire','Academy!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Chham se','http://soundxx.mp3pk.com/indian/dus/3%28mp3pk.com%29.mp3','Dus','200/10 -10=?','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Main chala','http://sound8.mp3pk.com/indian/black_white/black_white01%28www.songs.pk%29.mp3','Black and white','Based on terrorism!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('dari vich pyaar','http://sound20.mp3pk.com/indian/tum_bin/tumbin07%28www.songs.pk%29.mp3','Tum bin','Without you!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('maurya re','http://sound1.mp3pk.com/indian/don2006/don200603%28www.songs.pk%29.mp3','Don','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Garaj baras','http://sound.mp3pk.com/indian/paap/paap2%28songs.pk%29.mp3','Paap','A sin!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Neeyat kharab','http://sound16.mp3pk.com/indian/teenpatti/teenpatti01%28www.songs.pk%29.mp3','Teen patti','Gamble!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Mudi mudi','http://sound18.mp3pk.com/indian/paa/paa01%28www.songs.pk%29.mp3','Paa','Father is the son and vice versa!','0','medium')","INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Aaya tere darr par','http://sound20.mp3pk.com/indian/veer_zaraa/1%28mp3pk.com%29.mp3','Veer zaara','Cross border love!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Badal jo aye','http://sound3.mp3pk.com/indianx/yuva/yuva5%28www.songs.pk%29.mp3','Yuva','3 actors,3 actresses','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('aa jao meri tamanna','http://sound18.mp3pk.com/indian/ajabpremkighazabkahanii/ajabpremkighazabkahani06%28www.songs.pk%29.mp3','Ajab prem ki gazab kahani','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('hamesha tumko chaha','http://soundxx.mp3pk.com/indian/devdas/4%28mp3pk.com%29.mp3','Devdas','bengali novel!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('man mohini','http://sound2.mp3pk.com/indian/humdildechukesanam/hddcs06%28www.songs.pk%29.mp3','Hum dil de chuke sanam','gujrat & italy!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('aaj main upar','http://sound2.mp3pk.com/indian/khamoshi/khamoshi1%28www.songs.pk%29.mp3','Khamoshi','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('tujhe yaad na meri','http://soundx.mp3pk.com/indian/kkhh/6%28mp3pk.com%29.mp3','Kuch kuch hota hai','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('bhangda pa le','http://sound.mp3pk.com/indian/karan_arjun/1karjun%28songs.pk%29.mp3','Karan arjun','rebirth of the brothers!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('nach baliye','http://soundxx.mp3pk.com/indian/bunty_aur_babli/3%28mp3pk.com%29.mp3','Bunty aur babli','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('rind posh maal','http://sound3.mp3pk.com/indianx/mission_kashmir/mission_kashmir5%28www.songs.pk%29.mp3','Mission kashmir','Terrorism','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('maria maria','http://sound5.mp3pk.com/indian/partner/partner05%28www.songs.pk%29.mp3','Partner','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('kar doon kamaal','http://soundx.mp3pk.com/indian/mujhse_shaadi_karoge/4%28mp3pk.com%29.mp3','Mujhse shaadi karogi','proposing during a cricket match!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('jiya jale','http://soundxx.mp3pk.com/indian/dil_se/5%28mp3pk.com%29.mp3','Dil se','0','0','easy')","INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('mann ki lagan','http://sound.mp3pk.com/indian/paap/paap9(songs.pk).mp3','paap','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Tumse milke ','http://sound10.mp3pk.com/indian/parinda_1989/parinda4(www.songs.pk).mp3',' Parinda','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Do dil mil ','http://sound3x.mp3pk.com/indianx/pardes/pardes1(www.songs.pk).mp3',' Pardes','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Kasto Mazza','http://sound.mp3pk.com/indian/parineeta/parineeta5(songs.pk).mp3',' Parineeta','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Kya karein','http://soundx.mp3pk.com/indian/rangeela/2(mp3pk.com).mp3','Rangeela','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Phir dekhiye','http://sound11.mp3pk.com/indian/rockon/rockon09(www.songs.pk).mp3','Rock On!!!','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Aap ke pyaar mein','http://soundx.mp3pk.com/indian/raaz/1(mp3pk.com).mp3','Raaz','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Jaane Kaisa','http://sound4.mp3pk.com/indian/raqeeb/raqeeb01(www.songs.pk).mp3','Raqeeb','0','0','Hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Sau Dard','http://sound1.mp3pk.com/indian/jaaneman/jaaneman04(www.songs.pk).mp3','Jaan-E-Mann','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Ishq Hota Nahin','http://sound5.mp3pk.com/indian/joggers_park/jp4(www.songs.pk).mp3','Jogger's park','0','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('O Jaana','http://sound.mp3pk.com/indian/Jab_pyar_kisi_se_hota_hai/jpkshh6(songs.pk).mp3','Jab Pyaar Kissi Se Hota Hain','0','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('My dil goes hmmm','http://sound.mp3pk.com/indian/salaam_namaste/3(mp3pk.com).mp3','Salaam Namaste','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Zara Sa','http://sound9.mp3pk.com/indian/jannat/jannat01(www.songs.pk).mp3','Jannat','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Mera Dil','http://sound2.mp3pk.com/indian/salaam-e-ishq/salaameishq03(www.songs.pk).mp3','salaam-e-ishq','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Mujhe Raat Din','http://soundx.mp3pk.com/indian/sangarsh/5(mp3pk.com).mp3','Sangarsh','copied from hollywood movie silence of the lambs','0','Hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Jadoo hai tera','http://soundxx.mp3pk.com/indian/ghulam/3(mp3pk.com).mp3','Ghulam','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Aazmaale Aazmale','http://sound.mp3pk.com/indian/taxino_9211/1(mp3pk.com).mp3','Taxi No.9211','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Falak Tak','http://sound9.mp3pk.com/indian/tashan/tashan07(www.songs.pk).mp3','Tashan','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Falak Dekhoon','http://soundxx.mp3pk.com/indian/garam_masala/4(mp3pk.com).mp3','Garam Masala','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Mushkil bara','http://soundxx.mp3pk.com/indian/gupt/5(mp3pk.com).mp3','Gupt','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Dil ibaadat','http://sound15.mp3pk.com/indian/tummile/tummile02(www.songs.pk).mp3','Tum Mile','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Sajna aa bhi ja','http://sound.mp3pk.com/indian/waisa_bhi_hota_hai_part2/wbhh5(songs.pk).mp3','Waisa bhi hota hai part-2','There is no part-1 for this part-2!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('O saathiya','http://soundx.mp3pk.com/indian/saaya/6(mp3pk.com).mp3','Saaya','His movie just got selected for academy!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Main cycle se ja ra tha','http://sound3x.mp3pk.com/indianx/hero_no1/herono1_5(www.songs.pk).mp3','Hero no. 1','A no.1 movie!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Nachle ve','http://sound4.mp3pk.com/indian/tararumpum/tararumpum03(www.songs.pk).mp3','Tara rum pum','Car race hero!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Tumse hi','http://sound17.mp3pk.com/indian/anjaanaanjaani/anjaana-anjaani04(www.songs.pk).mp3','Anjaana anjaani','0','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Subah subah','http://sound2.mp3pk.com/indian/iseeyou/iseeyou01(www.songs.pk).mp3','I see you','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Sabki baaratein','http://sound5.mp3pk.com/indian/jaanam_samjha_karo/jaanamsamjhakaro04(www.songs.pk).mp3','Jaanam samjha karo','Salman and urmila!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Pankhon ko','http://sound18.mp3pk.com/indian/rocketsingh/rocketsingh03(www.songs.pk).mp3','Rocket singh-salesman of the year','All about sales and marketing!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Dilbar','http://sound.mp3pk.com/indian/sirf_tum/2(mp3pk.com).mp3','Sirf tum','Love through letters!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Bardasht nahin kar sakta','http://sound2.mp3pk.com/indian/humraaz/humraaz4(www.songs.pk).mp3','Humraaz','Abbas mastan mystery!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Resham si hain','http://soundx.mp3pk.com/indian/mere_yaar_ki_shaadi_hai/4(mp3pk.com).mp3','Mere yaar ki shaadi hai','My friend's wedding!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Dil ko tumse pyaar hua','http://soundx.mp3pk.com/indian/rehna_hai_tere_dil_mein/rhtdm02(www.songs.pk).mp3','Rehna hai tere dil mein','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Bachke tu rehna','http://soundxx.mp3pk.com/indian/compny/1(mp3pk.com).mp3','Company','Vivek oberoi's start','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Dum','http://sound3x.mp3pk.com/indianx/dum/dum1(www.songs.pk).mp3','Dum','Lies in the song!','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Meri zindagi mein ','http://soundxx.mp3pk.com/indian/armaan/5(mp3pk.com).mp3','Armaan','Not khwahish!. It's synonym!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Mahive mahive','http://sound3.mp3pk.com/indianx/the_legend_of_bhagat_singh/tlobs3(www.songs.pk).mp3','The legend of bhagat singh','Freedom fighter!','0','hard')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Udd ja kaale kawan','http://sound3x.mp3pk.com/indianx/gadar/gadar1(www.songs.pk).mp3','Gadar-ek prem katha','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Sajna ve','http://sound3x.mp3pk.com/indianx/chameli/Chameli2(www.songs.pk).mp3','Chameli','0','0','easy')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Aankhein bhi','http://sound13.mp3pk.com/indian/haasil/haasil01(www.songs.pk).mp3','Haasil','College politics','0','medium')", "INSERT INTO songlists(songname,songurl,moviename,hint,optionid,level) VALUES('Aj mera jee karda','http://sound3.mp3pk.com/indianx/monsoon_wedding/monsoon_wedding3(www.songs.pk).mp3','Monsoon wedding','a Mira Nair film','0','hard')");
console.log("inside insertdb now");
        console.log("inside inserting now")
        mydb.transaction(
                             function(transaction) {
                             for(var i=0; i<80; i++) { 
                             transaction.executeSql(sqlquery[i], [], nullDataHandler2, errorHandler); 
                           }
                             });
        console.log("inserted");

return;
}

//all the initialization work is complete now.
//So till now, we have-
//1. initialized phonegap
//2. initialized database
//3. created database
//4. Populated database

//All the above is done everytime we start the app

//some global variables we will use later
        var abc; var songn;
        var score=0;
  var ques=0;

  //playsong function is called when someone clicks on play
        function playsong() {
          $('#hint').removeClass('ui-disabled'); 
          $('#popupmes').hide();
            if(ques==4) {
                
        if(score>=2) {
          $('#con').hide();
          console.log('in if');
          $('#medium').removeClass('ui-disabled');
          $('#popupmes').show();
         
        }

      }
      else {
          $('#movie').val('');
          $('#hintd').text('');
          console.log('hello');
             try {
              var songlevel;
              console.log('hello');
               initsearch();
              initDB();
              songlevel=$('#level').text();
              console.log(songlevel);
        mydb.transaction(
            function(transaction) {
               $("a#level").click(function(){
              songlevel=$('#level').text();
              console.log(songlevel);
 });
                console.log("Inside playsong function");
               transaction.executeSql('SELECT distinct songurl, moviename, songname FROM songlists' , [], songplayhandler, errorHandler);
               console.log("alrighty");
            });
  
  }  catch(e) {
        alert(e.message);
      }

}
}

 songplayhandler = function(transaction, results) {
  var ind; var j=0; var flag=0;
   console.log("inside songplayhandler");
            ind=Math.floor((Math.random()*80)+1);
         console.log(ind);
         ind--;
        // var alreadyselected=new Array();
         
         // function unique() {
         //  for(var k=0; k<alreadyselected.length-1; k++) {
         //    if(ind==alreadyselected[k]) {
         //      ind=Math.floor((Math.random()*5)+1);
         //      flag=1;
         //      unique();
              
         //    }


         
      var row = results.rows.item(ind);
        var surl=row['songurl'];
       abc = localStorage['abc']=row['moviename'];
       songn = localStorage['songn']=row['songname']
        console.log(surl);
        console.log(songn);
      //  checkcontainer(mov);
    playAudio(surl);
}


        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) { 
          console.log('inside playaudio');
                // Create Media object from src    
                    
                    console.log('The song name is'+src);
       mediaTimer = null;
        my_media = new Media(src, onSuccess, onError);
            // else play current audio
            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                }, 1000);
            }
          //  return;
        }

        // Pause audio
        // 
        function initsearch(){
        console.log('inside initsearch now')
           mydb.transaction(
            function(transaction) {
                console.log("Inside initsearch function");
               transaction.executeSql('SELECT moviename FROM songlists' , [], searchhandler, errorHandler);
            });
           return;
        }
        
        function searchhandler(transaction, results) {
          var indee;
          var movielist=new Array();
          var i=0;
              $.each(results.rows,function(indee){
      var row = results.rows.item(indee);
        movielist[i++]=row['moviename'];

        });
              $('#movie').betterAutocomplete('init', movielist, {}, {});
              console.log(movielist[4]);
              return;

}
       
        // function pauseAudio() {
        //                   $('#pauseb').addClass('ui-disabled');
        //         $('#playb').removeClass('ui-disabled');
        //     if (my_media) {
        //         my_media.pause();

        //     }
        // }

        // Stop audio
        // 
        // function resumeAudio() {
        //                   $('#playb').addClass('ui-disabled');
        //      $('#pauseb').removeClass('ui-disabled');
              
        //      //   my_media.play();

             
            
        // }

        // onSuccess Callback
        //

          function stopAudio() {
            if(my_media)
                my_media.stop();
         
            clearInterval(mediaTimer);
            mediaTimer = null;
            
            return;
        }
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }


  
        function check() {
          ques++;
          my_media.stop();
          my_media.release();
          console.log(localStorage['abc']);
          var moviee=localStorage['abc'];

var x=$('#movie').val();
console.log(x);
if(x==moviee) {
      console.log('inside if');
      $("#ans").text("Correct Answer.");
      $('#mname').text(moviee);
      $('#sname').text(songn);
      score++;
      $('#score').text(score+'/'+ques);
      $('#fscore').text(score+'/'+ques);
      
    }
  else {
    console.log('inside else');
    $("#ans").text("Wrong Answer.");
      $('#mname').text('Sorry, cannot disclose that :)');
      $('#sname').text(songn);
      $('#score').text(score+'/'+ques);
      $('#fscore').text(score+'/'+ques);
    }


  
       
      }
      function disablehint() {
        

           mydb.transaction(
            function(transaction) {
              var sn=localStorage['songn']
                console.log("Inside playsong function");
               transaction.executeSql('SELECT hint FROM songlists where songname= ?' , [sn], hinthandler, errorHandler);
            });
           return;
      }
      function disableflip() {
        $('#flip').addClass('ui-disabled');
                  my_media.stop();
          my_media.release();
        playsong();
      }


              function hinthandler(transaction, results) {
              $.each(results.rows,function(index){
      var row = results.rows.item(index);
        var hintify=row['hint'];
        if(hintify==0)
          $('#hintd').text('Sorry, no hint available for this question.');
          else {
            $('#hint').addClass('ui-disabled');
            $('#hintd').text('Hint: '+hintify);
          }

        });
        

}
function onquit() {
  var namey=$('#namer').val();
console.log(namey);
  var hcore=score+'/'+ques;
  $('#fscore').text(hcore);
    var curDate = new Date();
  var day=curDate.getDate();
  if(day < 10)
      day="0" + day;
  var month=curDate.getMonth();
  if(month < 10)
    month="0" + month;
  var year=curDate.getFullYear();
  var formattedDate=year+"-"+month+"-"+day;
  insertDB2(namey,hcore,formattedDate);
}
    function insertDB2(namey,hcore,formattedDate) {
      var sqlI = "INSERT INTO userinfo(name,score,dated) VALUES('"
    + namey
    + "','"
    + hcore
    + "','"
    + formattedDate
    + "')";
console.log("inside in userdatabase now");
    mydb.transaction(
                             function(transaction) {
                             transaction.executeSql(sqlI, [],nullDataHandler1, errorHandler); 
                             });
    console.log("inserted");

}
function hscore() {
    try {
    //initDB();
        mydb.transaction(
            function(transaction) {
              console.log("inside load year");
               transaction.executeSql('SELECT * from userinfo' ,[], hscoreHandler, errorHandler);
               console.log("success!!");
            });
      } catch(e) {
        alert(e.message);
      }
 
}
function hscoreHandler(transaction,results) {
  console.log('inside hscore handler');
    $.each(results.rows,function(index){
      var row = results.rows.item(index);
      var nam = row['name'];
      var dat = row['dated'];
      var scor = row['score'];
      console.log("inside postshandler");
      console.log(abc);
              $('#lscore').append(nam+'</br>'+dat+'</br>'+score);
        });
}

function pause() {
  my_media.pause();
}
function stopper() {
  my_media.stop();
}

function play() {
  my_media.play();
}

function exitapp() {
  navigator.app.exitApp();
}

function showcon() {
  $('#popupmes').hide();
  $('#con').show();
}
            errorHandler = function (transaction, error) { 
} 
nullDataHandler1 = function (transaction, results) {                
         
} 

nullDataHandler2 = function (transaction, results) { 
} 












