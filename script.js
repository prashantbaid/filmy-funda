document.addEventListener("deviceready", onDeviceReady, false);

      function onDeviceReady(){
       initDB();
        createDB();
        insertDB();
        playsong();
       console.log("device ready now")
       navigator.splashscreen.hide();
        }
        document.addEventListener("deviceready", onDeviceReady, false);

    initDB = function() {
         mydb = openDatabase("songlist", "1.0", "Song List", 200000);
         console.log("database initialised");
         return;
         
    }

    createDB = function() {
        mydb.transaction(
                         function(transaction) 
                         {
                         var sqlC='CREATE TABLE IF NOT EXISTS songlist (id INTEGER PRIMARY KEY AUTOINCREMENT, songname TEXT NOT NULL, songurl TEXT NOT NULL, moviename TEXT NOT NULL, hint TEXT NOT NULL, optionid TEXT NOT NULL);';
                         transaction.executeSql(sqlC, [], nullDataHandler, errorHandler); 
                         });
        console.log("table created")
        return;
    }

    insertDB = function() {
       var sqlquery = new Array("INSERT INTO songlist(songname,songurl,moviename,hint,optionid) VALUES('Yoon Shabnami','http://sound6.mp3pk.com/indian/saawariya/saawariya05(www.songs.pk).mp3','Saawariya','0','0')", "INSERT INTO songlist(songname,songurl,moviename,hint,optionid) VALUES('Pairon mein bandhan hai','http://soundx.mp3pk.com/indian/mohabbatein/4(mp3pk.com).mp3','Mohabbatein','0','0')", "INSERT INTO songlist(songname,songurl,moviename,hint,optionid) VALUES('Chupke Se Sunn','http://sound3.mp3pk.com/indianx/mission_kashmir/mission_kashmir2(www.songs.pk).mp3','Mission Kashmir','0','0')", "INSERT INTO songlist(songname,songurl,moviename,hint,optionid) VALUES('Andekhi Anjaani Si','http://soundx.mp3pk.com/indian/mujh_se_dosti_karoge/1(mp3pk.com).mp3','Mujhse Dosti Karoge','0','0')", "INSERT INTO songlist(songname,songurl,moviename,hint,optionid) VALUES('Chod Aaye Hum Woh galiyan','http://soundx.mp3pk.com/indian/mujh_se_dosti_karoge/1(mp3pk.com).mp3','Maachis','0','0')");
    for(var i=0; i<5; i++) {        
            var sqlI = sqlquery[i];
console.log("inside insertdb now");
        console.log("inside inserting now")
        mydb.transaction(
                             function(transaction) {
                             transaction.executeSql(sqlI, [], function(){
            }, nullDataHandler, errorHandler); 
                             });
        //alert("inserted");
        console.log("inserted");
    }
    return;
}
        // Cordova is ready
        //
        playsong= function() {
             try {
        //initDB();
        mydb.transaction(
            function(transaction) {
                console.log("Inside playsong function");
               transaction.executeSql('SELECT songurl, id FROM songlist' , songplayhandler, errorHandler);
            });
  
  }  catch(e) {
        alert(e.message);
      }
}

songplayhandler = function(transaction, results) {
  console.log("inside songplayhandler");
    $.each(results.rows,function(index){
      var row = results.rows.item(index);
        var songarray = new Array();
        songarray[i]= row['songurl'];
        var index=Math.floor((Math.random()*5)+1);
        index--;
        //var playsong=songarray[index];
    }  
    //playAudio(playsong);
//}

        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            if (my_media == null) {
                // Create Media object from src
                my_media = new Media(src, onSuccess, onError);
            } // else play current audio
            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        // 
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }

            errorHandler = function (transaction, error) { 
    alert("Error!!");
    return true;  
} 
nullDataHandler = function (transaction, results) { } 

























(function($) {
  $.widget('mobile.tabbar', $.mobile.navbar, {
    _create: function() {
      // Set the theme before we call the prototype, which will 
      // ensure buttonMarkup() correctly grabs the inheritied theme.
      // We default to the "a" swatch if none is found
      var theme = this.element.jqmData('theme') || "a";
      this.element.addClass('ui-footer ui-footer-fixed ui-bar-' + theme);

      // Make sure the page has padding added to it to account for the fixed bar
      this.element.closest('[data-role="page"]').addClass('ui-page-footer-fixed');


      // Call the NavBar _create prototype
      $.mobile.navbar.prototype._create.call(this);
    },

    // Set the active URL for the Tab Bar, and highlight that button on the bar
    setActive: function(url) {
      // Sometimes the active state isn't properly cleared, so we reset it ourselves
      this.element.find('a').removeClass('ui-btn-active ui-state-persist');
      this.element.find('a[href="' + url + '"]').addClass('ui-btn-active ui-state-persist');
    }
  });

  $(document).bind('pagecreate create', function(e) {
    return $(e.target).find(":jqmData(role='tabbar')").tabbar();
  });
  
  $(":jqmData(role='page')").live('pageshow', function(e) {
    // Grab the id of the page that's showing, and select it on the Tab Bar on the page
    var tabBar, id = $(e.target).attr('id');

    tabBar = $.mobile.activePage.find(':jqmData(role="tabbar")');
    if(tabBar.length) {
      tabBar.tabbar('setActive', '#' + id);
    }
  });

var attachEvents = function() {
    var hoverDelay = $.mobile.buttonMarkup.hoverDelay, hov, foc;

    $( document ).bind( {
        "vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart": function( event ) {
            var theme,
                $btn = $( closestEnabledButton( event.target ) ),
                evt = event.type;
        
            if ( $btn.length ) {
                theme = $btn.attr( "data-" + $.mobile.ns + "theme" );
        
                if ( evt === "vmousedown" ) {
                    if ( $.support.touch ) {
                        hov = setTimeout(function() {
                            $btn.removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-down-" + theme );
                        }, hoverDelay );
                    } else {
                        $btn.removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-down-" + theme );
                    }
                } else if ( evt === "vmousecancel" || evt === "vmouseup" ) {
                    $btn.removeClass( "ui-btn-down-" + theme ).addClass( "ui-btn-up-" + theme );
                } else if ( evt === "vmouseover" || evt === "focus" ) {
                    if ( $.support.touch ) {
                        foc = setTimeout(function() {
                            $btn.removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-hover-" + theme );
                        }, hoverDelay );
                    } else {
                        $btn.removeClass( "ui-btn-up-" + theme ).addClass( "ui-btn-hover-" + theme );
                    }
                } else if ( evt === "vmouseout" || evt === "blur" || evt === "scrollstart" ) {
                    $btn.removeClass( "ui-btn-hover-" + theme  + " ui-btn-down-" + theme ).addClass( "ui-btn-up-" + theme );
                    if ( hov ) {
                        clearTimeout( hov );
                    }
                    if ( foc ) {
                        clearTimeout( foc );
                    }
                }
            }
        },
        "focusin focus": function( event ){
            $( closestEnabledButton( event.target ) ).addClass( $.mobile.focusClass );
        },
        "focusout blur": function( event ){
            $( closestEnabledButton( event.target ) ).removeClass( $.mobile.focusClass );
        }
    });

    attachEvents = null;
};

$.fn.buttonMarkup = function( options ) {
    var $workingSet = this;

    // Enforce options to be of type string
    options = ( options && ( $.type( options ) == "object" ) )? options : {};
    for ( var i = 0; i < $workingSet.length; i++ ) {
        var el = $workingSet.eq( i ),
            e = el[ 0 ],
            o = $.extend( {}, $.fn.buttonMarkup.defaults, {
                icon:       options.icon       !== undefined ? options.icon       : el.jqmData( "icon" ),
                iconpos:    options.iconpos    !== undefined ? options.iconpos    : el.jqmData( "iconpos" ),
                theme:      options.theme      !== undefined ? options.theme      : el.jqmData( "theme" ) || $.mobile.getInheritedTheme( el, "c" ),
                inline:     options.inline     !== undefined ? options.inline     : el.jqmData( "inline" ),
                shadow:     options.shadow     !== undefined ? options.shadow     : el.jqmData( "shadow" ),
                corners:    options.corners    !== undefined ? options.corners    : el.jqmData( "corners" ),
                iconshadow: options.iconshadow !== undefined ? options.iconshadow : el.jqmData( "iconshadow" ),
                iconsize:   options.iconsize   !== undefined ? options.iconsize   : el.jqmData( "iconsize" ),
                mini:       options.mini       !== undefined ? options.mini       : el.jqmData( "mini" )
            }, options ),

            // Classes Defined
            innerClass = "ui-btn-inner",
            textClass = "ui-btn-text",
            buttonClass, iconClass,
            // Button inner markup
            buttonInner,
            buttonText,
            buttonIcon,
            buttonElements;

        $.each(o, function(key, value) {
            e.setAttribute( "data-" + $.mobile.ns + key, value );
            el.jqmData(key, value);
        });

        // Check if this element is already enhanced
        buttonElements = $.data(((e.tagName === "INPUT" || e.tagName === "BUTTON") ? e.parentNode : e), "buttonElements");

        if (buttonElements) {
            e = buttonElements.outer;
            el = $(e);
            buttonInner = buttonElements.inner;
            buttonText = buttonElements.text;
            // We will recreate this icon below
            $(buttonElements.icon).remove();
            buttonElements.icon = null;
        }
        else {
            buttonInner = document.createElement( o.wrapperEls );
            buttonText = document.createElement( o.wrapperEls );
        }
        buttonIcon = o.icon ? document.createElement( "span" ) : null;

        if ( attachEvents && !buttonElements) {
            attachEvents();
        }
        
        // if not, try to find closest theme container  
        if ( !o.theme ) {
            o.theme = $.mobile.getInheritedTheme( el, "c" );    
        }       

        buttonClass = "ui-btn ui-btn-up-" + o.theme;
        buttonClass += o.inline ? " ui-btn-inline" : "";
        buttonClass += o.shadow ? " ui-shadow" : "";
        buttonClass += o.corners ? " ui-btn-corner-all" : "";

        if ( o.mini !== undefined ) {
            // Used to control styling in headers/footers, where buttons default to `mini` style.
            buttonClass += o.mini ? " ui-mini" : " ui-fullsize";
        }
        
        if ( o.inline !== undefined ) {         
            // Used to control styling in headers/footers, where buttons default to `mini` style.
            buttonClass += o.inline === false ? " ui-btn-block" : " ui-btn-inline";
        }
        
        
        if ( o.icon ) {
            o.icon = "ui-icon-" + o.icon;
            o.iconpos = o.iconpos || "left";

            iconClass = "ui-icon " + o.icon;

            if ( o.iconshadow ) {
                iconClass += " ui-icon-shadow";
            }

            if ( o.iconsize ) {
                iconClass += " ui-iconsize-" + o.iconsize;
            }
        }

        if ( o.iconpos ) {
            buttonClass += " ui-btn-icon-" + o.iconpos;

            if ( o.iconpos == "notext" && !el.attr( "title" ) ) {
                el.attr( "title", el.getEncodedText() );
            }
        }
    
        innerClass += o.corners ? " ui-btn-corner-all" : "";

        if ( o.iconpos && o.iconpos === "notext" && !el.attr( "title" ) ) {
            el.attr( "title", el.getEncodedText() );
        }

        if ( buttonElements ) {
            el.removeClass( buttonElements.bcls || "" );
        }
        el.removeClass( "ui-link" ).addClass( buttonClass );

        buttonInner.className = innerClass;

        buttonText.className = textClass;
        if ( !buttonElements ) {
            buttonInner.appendChild( buttonText );
        }
        if ( buttonIcon ) {
            buttonIcon.className = iconClass;
            if ( !(buttonElements && buttonElements.icon) ) {
                buttonIcon.appendChild( document.createTextNode("\u00a0") );
                buttonInner.appendChild( buttonIcon );
            }
        }

        while ( e.firstChild && !buttonElements) {
            buttonText.appendChild( e.firstChild );
        }

        if ( !buttonElements ) {
            e.appendChild( buttonInner );
        }

        // Assign a structure containing the elements of this button to the elements of this button. This
        // will allow us to recognize this as an already-enhanced button in future calls to buttonMarkup().
        buttonElements = {
            bcls  : buttonClass,
            outer : e,
            inner : buttonInner,
            text  : buttonText,
            icon  : buttonIcon
        };

        $.data(e,           'buttonElements', buttonElements);
        $.data(buttonInner, 'buttonElements', buttonElements);
        $.data(buttonText,  'buttonElements', buttonElements);
        if (buttonIcon) {
            $.data(buttonIcon, 'buttonElements', buttonElements);
        }
    }

    return this;
};

$.fn.buttonMarkup.defaults = {
    corners: true,
    shadow: true,
    iconshadow: true,
    iconsize: 18,
    wrapperEls: "span"
};

function closestEnabledButton( element ) {
    var cname;

    while ( element ) {
        // Note that we check for typeof className below because the element we
        // handed could be in an SVG DOM where className on SVG elements is defined to
        // be of a different type (SVGAnimatedString). We only operate on HTML DOM
        // elements, so we look for plain "string".
        cname = ( typeof element.className === 'string' ) && (element.className + ' ');
        if ( cname && cname.indexOf("ui-btn ") > -1 && cname.indexOf("ui-disabled ") < 0 ) {
            break;
        }

        element = element.parentNode;
    }

    return element;
}

    
})(jQuery);
