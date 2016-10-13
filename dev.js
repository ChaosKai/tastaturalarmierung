var set_key_mode = false;
var set_key_name = "";

keyCodeToChar = {8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause/Break",20:"Caps Lock",27:"Esc",32:"Space",33:"Page Up",34:"Page Down",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Windows",93:"Right Click",96:"Numpad 0",97:"Numpad 1",98:"Numpad 2",99:"Numpad 3",100:"Numpad 4",101:"Numpad 5",102:"Numpad 6",103:"Numpad 7",104:"Numpad 8",105:"Numpad 9",106:"Numpad *",107:"Numpad +",109:"Numpad -",110:"Numpad .",111:"Numpad /",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Num Lock",145:"Scroll Lock",182:"My Computer",183:"My Calculator",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Check for jQuery
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

if(typeof(jQuery) == 'undefined')
{
   throw new Error("LSS Tastaturalarmierung: missing jQuery");
}

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Create local Storage
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// - - - - - Submit - - - - -
if (localStorage.getItem("key_submit") === null) {
    setKeyStorage("key_submit", 13);
}

// - - - - - Select All - - - - -
if (localStorage.getItem("key_select_all") === null) {
    setKeyStorage("key_select_all", 106);
}

// - - - - - Delete - - - - -
if (localStorage.getItem("key_delete") === null) {
    setKeyStorage("key_delete", 8);
}

// - - - - - FHZ 1 - - - - -
if (localStorage.getItem("key_fhz1") === null) {
    setKeyStorage("key_fhz1", 49);
}

// - - - - - FHZ 2 - - - - -
if (localStorage.getItem("key_fhz2") === null) {
    setKeyStorage("key_fhz2", 50);
}

// - - - - - FHZ 3 - - - - -
if (localStorage.getItem("key_fhz3") === null) {
    setKeyStorage("key_fhz3", 51);
}

// - - - - - FHZ 4 - - - - -
if (localStorage.getItem("key_fhz4") === null) {
    setKeyStorage("key_fhz4", 52);
}

// - - - - - FHZ 5 - - - - -
if (localStorage.getItem("key_fhz5") === null) {
    setKeyStorage("key_fhz5", 53);
}

// - - - - - FHZ 6 - - - - -
if (localStorage.getItem("key_fhz6") === null) {
    setKeyStorage("key_fhz6", 54);
}

// - - - - - FHZ 7 - - - - -
if (localStorage.getItem("key_fhz7") === null) {
    setKeyStorage("key_fhz7", 55);
}

// - - - - - FHZ 8 - - - - -
if (localStorage.getItem("key_fhz8") === null) {
    setKeyStorage("key_fhz8", 56);
}

// - - - - - FHZ 9 - - - - -
if (localStorage.getItem("key_fhz9") === null) {
    setKeyStorage("key_fhz9", 57);
}

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Create HTML Code
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

var html = '';
html = html + '<div style="width: 100%; padding-bottom: 24px">';
html = html + '   <div style="width: 100%; padding-bottom: 6px">';
html = html + '      <h4>Tastaturalarmierung</h4>';
html = html + '   </div>';
html = html + '   <div style="width: 100%; display: flex; padding-bottom: 6px">';
html = html + '      <input class="string form-control" id="search_vehicle" size="50" type="text">';
html = html + '      <a id="key_settings_button" href="#" class="btn btn-success navbar-btn btn-sm" style="width: 64px; margin: 0; margin-left: 6px" title="Einstellungen">';
html = html + '         <span class="glyphicon glyphicon-cog" style="font-size: 16px; margin-top: 2px"></span>';
html = html + '      </a>';
html = html + '   </div>';
html = html + '   <div id="key_settings" style="width: 100%; display: none; padding-top: 12px; padding-bottom: 12px">';
html = html + '      <div id="key_settings_console" style="width: 100%; padding-top: 12px; padding-bottom: 4px">';
html = html + '         <font style=""></font>';
html = html + '      </div>';
html = html + '      <table id="key_settings_table" class="table table-striped tablesorter tablesorter-default">';
html = html + '         <tbody>';
html = html + '            <tr>';
html = html + '               <td style="text-align: left"><font style="font-weight: 700">Alarmieren</font></td>';
html = html + '               <td style="text-align: left"><font id="submit_key_code"></font></td>';
html = html + '               <td style="text-align: right">';
html = html + '                  <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0" onclick="setKey(' + "'submit'" + ')">Taste belegen</a>';
html = html + '                  <a href="#" class="btn btn-danger navbar-btn btn-sm" style="margin: 0" onclick="delKey(' + "'submit'" + ')">Belegung löschen</a>';
html = html + '               </td>';
html = html + '            </tr>';
html = html + '            <tr>';
html = html + '               <td style="text-align: left"><font style="font-weight: 700">Eingabe löschen</font></td>';
html = html + '               <td style="text-align: left"><font id="delete_key_code"></font></td>';
html = html + '               <td style="text-align: right">';
html = html + '                  <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0" onclick="setKey(' + "'delete'" + ')">Taste belegen</a>';
html = html + '                  <a href="#" class="btn btn-danger navbar-btn btn-sm" style="margin: 0" onclick="delKey(' + "'delete'" + ')">Belegung löschen</a>';
html = html + '               </td>';
html = html + '            </tr>';
html = html + '            <tr>';
html = html + '               <td style="text-align: left"><font style="font-weight: 700">Alle markieren</font></td>';
html = html + '               <td style="text-align: left"><font id="select_all_key_code"></font></td>';
html = html + '               <td style="text-align: right">';
html = html + '                  <a href="#" class="btn btn-success navbar-btn btn-sm" style="margin: 0" onclick="setKey(' + "'select_all'" + ')">Taste belegen</a>';
html = html + '                  <a href="#" class="btn btn-danger navbar-btn btn-sm" style="margin: 0" onclick="delKey(' + "'select_all'" + ')">Belegung löschen</a>';
html = html + '               </td>';
html = html + '            </tr>';
html = html + '         </tbody>';
html = html + '      </table>';
html = html + '   </div>';
html = html + '   <div style="width: 100%; padding-bottom: 6px">';
html = html + '      <font style="font-size: 12px">by ChaosKai93 (build 2016-10-13-1306)</font><a href="https://github.com/ChaosKai/tastaturalarmierung" target="_blank" style="font-size: 12px; margin-left: 24px">GitHub Projekt</a>';
html = html + '   </div>';
html = html + '</div>';

$( "#mission-form" ).before(html);
$( "#search_vehicle" ).focus();

// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// -             Main function
// - -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

$(function(){
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Key Buttons Show/Hide
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#key_settings_button" ).on( "click", function()
    {
        if( $("#key_settings").css("display") == "none" )
        {
            $("#key_settings").css("display", "flex");
            $("#key_settings_button").removeClass("btn-success").addClass("btn-danger");
        }
        else
        {
            $("#key_settings").css("display", "none");
            $("#key_settings_button").removeClass("btn-danger").addClass("btn-success");
        }
    });
   
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Set Keys
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
   
    
   
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Update Table on Key Input
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    $( "#search_vehicle" ).on( "input", function() {
        updateTable();
    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Key Action
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    
    $(document).on( "keyup", function( event )
    {
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // -
        // -             Key: Submit
        // -
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if(!set_key_mode)
        {
            var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";

            // - - - - - Submit  - - - - -
            if(event.which == getKeyStorage("key_submit"))
            {
                $( "#mission-form" ).submit();
            }

            // - - - - - Delete  - - - - -
            if(event.which == getKeyStorage("key_delete"))
            {
                $( "#search_vehicle" ).val(""); updateTable();
            }
            
            // - - - - - Select all  - - - - -
            if(event.which == getKeyStorage("key_select_all"))
            {
                $( table + ":visible" ).each(function() {
                    $( this ).find("input").attr('checked', true);
                });
                
                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 1  - - - - -
            if(event.which == 49)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                $( table + ":visible" ).eq(0).find("input").click();

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 2  - - - - -
            if(event.which == 50)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(1).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(1).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(1).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 3  - - - - -
            if(event.which == 51)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(2).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(2).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(2).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 4  - - - - -
            if(event.which == 52)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(3).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(3).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(3).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 5  - - - - -
            if(event.which == 53)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(4).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(4).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(4).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 6  - - - - -
            if(event.which == 54)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(5).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(5).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(5).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 7  - - - - -
            if(event.which == 55)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(6).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(6).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(6).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 8  - - - - -
            if(event.which == 56)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(7).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(7).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(7).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }

            // - - - - - Ergebnis 9  - - - - -
            if(event.which == 57)
            {
                $( "#search_vehicle" ).val( $( "#search_vehicle" ).val().substring(0, $( "#search_vehicle" ).val().length - 1) );

                updateTable();

                if($( table + ":visible" ).eq(8).find("input").prop('checked') == "checked")
                {
                    $( table + ":visible" ).eq(8).find("input").prop('checked', false);
                }
                else
                {
                    $( table + ":visible" ).eq(8).find("input").prop('checked', true);
                }

                $( "#search_vehicle" ).val(""); updateTable();
            }
        }

    });
    
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    // -
    // -             Key Action
    // -
    // - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
    $(document).on( "keyup", function( event )
    {
        if(set_key_mode)
        {
            console.log(event.altKey,event.ctrlKey,event.metaKey,event.which)
            setKeyStorage("key_" + set_key_name, event.which);
           
            console.log("set key '" + set_key_name + "' to " + event.which);

            $( "#search_vehicle" ).val("Die Taste wurde gespeichert!");
            window.setTimeout(function() { $('#search_vehicle').val("") }, 1500);
           
            set_key_mode = false;
        }
    });
    
}());

function updateTable()
{
    var table = $("#vehicle_show_table_body_all").length ? "#vehicle_show_table_body_all tr":"#vehicle_show_table_rett tr";
        
    $( table ).each(function() {

        if( $( this ).find("label").text().toLowerCase().indexOf( $( "#search_vehicle" ).val().toLowerCase() ) >= 0 )
        {
            // Found vehicle name
            $( this ).css("display", "table-row");
        }
        else if( $( this ).find("a").text().toLowerCase().indexOf( $( "#search_vehicle" ).val().toLowerCase() ) >= 0 )
        {
            // Found station name
            $( this ).css("display", "table-row");
        }
        else
        {
            // Not Found
            $( this ).css("display", "none");
        }

        if( $( "#search_vehicle" ).val().length == 0 )
        {
            $( this ).css("display", "table-row");
        }

    });
   
   
    
}

// - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// -
// -             Key Functions
// -
// - = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

    function showKeyCode(key)
    {
        $( "#" + key + "_key_code" ).html(keyCodeToChar[getKeyStorage(key)]);
    }

   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   // -             set Key (call from button)
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   function setKey(key)
   {
       set_key_mode = true;
       set_key_name = key;
       $( "#key_settings.console" ).find("font").html("Drücke die Taste, die Du für diese Funktion belegen möchtest...");
       $( "#search_vehicle" ).focus();
   }

   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
   // -             delete Key (call from button)
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function delKey(key)
    {
        set_key_mode = false;
        setKeyStorage("key_" + key, {'altKey':false,'ctrlKey':false,'metaKey':false,'key':false});
        $( "#key_settings.console" ).find("font").html("Die Taste '" + key + "' wurde gelöscht!");
        window.setTimeout(function() { $( "#key_settings.console" ).find("font").html("") }, 1500);
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Save Key to Storage
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function setKeyStorage(key,value)
    {
        localStorage.setItem(key,value);
        console.log("set key '" + key + "' to '" + value + "'");
        showKeyCode(key);
    }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // -             Get Key from Storage
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function getKeyStorage(key)
    {
        return localStorage.getItem(key);
    }
