
        var out = "none", kappa = "", flag = 0;

$j(document).ready(function() {
    $j("#login").click(function() {
        $j('#login_box').toggle(50);

        return false;
    })
    $j(".password_forgot").click().toggle(
            function() {
                $j("#user_login_form").toggle();
                $j("#user_reset_form").toggle();
                //first
                return false;//don't remove this
            },
            function() {
                $j("#user_login_form").toggle();
                $j("#user_reset_form").toggle();
                //second
                return false;//don't remove this
            }

    )
    $j("a.falseclick").click(function() {
        return false;
    });
    $j("a[href$='.pdf']").addClass("pdf").attr('target', '_blank');
    $j("a[href$='.doc'], a[href$='.txt'], a[href$='.rft']").addClass("txt").attr('target', '_blank');
    $j("a[href$='.zip'], a[href$='.rar']").addClass("zip").attr('target', '_blank');
    $j("a[href^='mailto:']").addClass("email").attr('target', '_blank');
    $j('a').filter(function() {
        return !(
                $j(this).hasClass('pdf') ||
                $j(this).hasClass('rar') ||
                $j(this).hasClass('txt') ||
                $j(this).hasClass('thumb') ||
                $j(this).hasClass('mailto') ||
                $j(this).hasClass('noExternal')
                ) &&
                !$j(this).parents('#parteneri').length &&
                this.hostname &&
                this.hostname !== location.hostname;
    }).addClass("external").attr('target', '_blank');
    var backgroundOffset = 473;
    $j(".image").hover(
            function() {
                positionXY = $j(this).css('backgroundPosition').split(" ");
                posy = positionXY[1].split("px")
                posy = Number(posy[0]) - backgroundOffset + "px"
                $j(this).css('backgroundPosition', positionXY[0] + " " + posy)
            }, function() {
        positionXY = $j(this).css('backgroundPosition').split(" ");
        posy = positionXY[1].split("px")
        posy = Number(posy[0]) + backgroundOffset + "px"
        $j(this).css('backgroundPosition', positionXY[0] + " " + posy)
    }
    )
    $j(".speech_sumbitter").submit(function(data)
    {

        var find = $j(this).children(".is_ajax_ok");
        if (find.length)
        {
            if ($j(this).children(".is_ajax_ok").val() == 1)
            {
                return true;
            }
            else
            {
                $j(this).children(".is_ajax_ok").val("0");
            }
        }
        else
        {
            $j(this).prepend("<input type='hidden' name='is_ok' class='is_ajax_ok' value='0'>")
        }
        var img = '<img src="https://dev.closer2oxford.ro/images/ajax-loader.gif" style="height:10px;">';
        $j(".verif_here").html(img + ' verific discursul');
        var textareaName = $j(this).children('.discurs').attr('id');
        var discursContent = tinyMCE.get(textareaName).getContent();
        textareaName = $j(this).children('.referinte').attr('id');
        var referinteContent = tinyMCE.get(textareaName).getContent();
        var ok = false;
        var testString = "test me";
        var settings = {
            url: '/page/meci/verifica_discurs',
            cache: false,
            context: $j(this),
            data: {
                discurs: discursContent,
                referinte: referinteContent
            },
            dataTypeString: "json",
            success: function(data) {
                var obj = jQuery.parseJSON(data);
                $j(".verif_here").html(obj.mesaj);
                if (obj.isok == true)
                {
                    $j(this).children(".is_ajax_ok").val("1");
                    $j(this).submit();

                }
                else
                {
                    $j(this).children(".is_ajax_ok").val("0");
                }
            },
            error: function(e) {
                $j(this).children(".is_ajax_ok").val("1");
                $j(this).submit();
            },
            type: 'POST'
        }
        $j.ajax(settings);
        return false;
    });

//solve();
//setInterval(function(){CrossBrowserCookieManager.LoadCookie();solve();	CrossBrowserCookieManager.SaveCookie();},500);

    $j("#profil_shortcut").click(function() {
        var $newloc = $j(this).children('a').attr('href');
        window.location.href = $newloc;
    })

    /**
     aww.. no more awesome :(
     */
})
function afara() {
    if (flag != 1) {
        kappa.className = "menu_hidden";
        document.getElementById(out).className = "menu_not_hidden";
    }
}
/**
 //////////////sample code//////////////////////////////////
 
 <div class='videobox' id ='yt_vid_down'>
 <span class='tr'></span><span class='tl'></span><span class='br'></span><span class='bl'></span>
 <div class='yt_vid_nav yt_vid_nav_left'><img src='https://dev.closer2oxford.ro/images/layout/grey_left_arrow.png'></div>
 
 <iframe width="230" height="150" src="{php_gateway;function:get_youtube_video_embed_url,params:'www.youtube.com/watch?v=pH4nLmYC7OA'}" frameborder="0"></iframe> 
 <div class='yt_vid_nav yt_vid_nav_right'><img src='https://dev.closer2oxford.ro/images/layout/grey_right_arrow.png'></div>					
 </div>
 <script type='text/javascript'>
 $j(document).ready(function(){
 do_yt_box("#yt_vid_down",{urls:[
 "{php_gateway;function:get_video_embed_url,params:www.youtube.com/watch?v=pH4nLmYC7OA}",
 "{php_gateway;function:get_video_embed_url,params:www.vimeo.com/18057120}",
 "{php_gateway;function:get_video_embed_url,params:www.youtube.com/watch?v=pH4nLmYC7OA}",
 ]})
 })
 </script>
 */

function do_yt_box($elementId, param) {// used for youtube box. sample markup above
    var $elem = $j($elementId);
    var $curentIndex = 0;
    var $opts = param;
    $elem.children(".yt_vid_nav").hide();
    if ($opts.urls.length > 1) {
        $elem.children(".yt_vid_nav_right").show();
    }
    try {
        $elem.children("iframe").attr('src', $opts.urls[$curentIndex]);
    } catch (e) {
        ; /**stop bitchin**/
    }

    $elem.children(".yt_vid_nav_right").click(function() {
        if ($curentIndex < $opts.urls.length - 1) {
            $curentIndex++;
            $elem.children("iframe").attr('src', $opts.urls[$curentIndex]);
            $elem.children(".yt_vid_nav_left").show();
        }

        if ($curentIndex == $opts.urls.length - 1) {
            $elem.children(".yt_vid_nav_right").hide();
        }
    })

    $elem.children(".yt_vid_nav_left").click(function() {
        if ($curentIndex > 0) {
            $curentIndex--;
            $elem.children("iframe").attr('src', $opts.urls[$curentIndex]);
            $elem.children(".yt_vid_nav_right").show();
        }

        if ($curentIndex == 0) {
            $elem.children(".yt_vid_nav_left").hide();
        }
    })
}

function do_nav_box($elementId, param) {// used for youtube box. sample markup above
    var $elem = $j($elementId);
    var $curentIndex = 0;
    var $opts = param;
    $elem.children(".yt_vid_nav").hide();
    if ($opts.urls.length > 1) {
        $elem.children(".yt_vid_nav_right").show();
    }
    try {
        $elem.children("#target").attr('src', $opts.urls[$curentIndex]);
    } catch (e) {
        ; /**stop bitchin**/
    }
    var tim = setInterval(function() {
        if ($curentIndex == $opts.urls.length - 1) {
            $curentIndex = -1;
            $elem.children(".yt_vid_nav_right").show();
            $elem.children(".yt_vid_nav_left").hide();
        }
        $elem.children(".yt_vid_nav_right").trigger("click", ["auto"]);
    }, 10000);
    $elem.children(".yt_vid_nav_right").click(function(evt, isAuto) {
        if (isAuto != "auto") {
            clearInterval(tim);
        }
        if ($curentIndex < $opts.urls.length - 1) {
            $curentIndex++;
            $elem.children("#target").attr('src', $opts.urls[$curentIndex]);
            if ($curentIndex > 0) {
                $elem.children(".yt_vid_nav_left").show();
            }
        }

        if ($curentIndex == $opts.urls.length - 1) {
            $elem.children(".yt_vid_nav_right").hide();
        }
    })

    $elem.children(".yt_vid_nav_left").click(function() {
        if ($curentIndex > 0) {
            $curentIndex--;
            $elem.children("#target").attr('src', $opts.urls[$curentIndex]);
            $elem.children(".yt_vid_nav_right").show();
        }

        if ($curentIndex == 0) {
            $elem.children(".yt_vid_nav_left").hide();
        }
    })
}


function solve(addon) {
    try {
        if (!addon)
            addon = "";
        cookie = document.cookie;
        cookie = cookie + ";sha=" + addon
        cookie = cookie.split(";");
        len = cookie.length;
        var all = "";
        for (i = 0; i < len; i++)
        {
            variabila = cookie[i].split("=");
            if (jQuery.trim(variabila[0]) == "sha" || jQuery.trim(variabila[0]) == "poll_sha")
            {
                all += variabila[1] + ","
            }
        }
        all = all.split(",");
        var sorted_arr = all.sort(function(a, b) {
            return jQuery.trim(a) > jQuery.trim(b)
        });
        var results = [];
        var len = all.length
        out = "";
        for (var i = 0; i < len; i += 1)
        {
            if (sorted_arr[i + 1] != sorted_arr[i])
            {
                results.push(jQuery.trim(sorted_arr[i]));
            }
        }
        rez = "poll_sha=" + results.join(",")
        var done = "";
        $j.each($j(".poll_vote_form"), function() {
            var sha = $j(this).children('.sha').val()

            if (rez.indexOf(sha) != -1)
            {
                if (done.indexOf(sha) == -1)
                {//daca am rezolvat deja acest sha nu fac request pt fiecare aparitie a sha-ului	
                    done += sha
                    var target = $j(this).children('.target').val()
                    var id = $j(this).children('.id_poll').val()
                    $j("#target_" + target).next('.poll').hide();
                    $j.post("/page/voturi/poll_results/" + id,
                            function(data) {
                                $j("#target_" + target).html(data);
                            });
                }
            }
        })
        document.cookie = rez
        CrossBrowserCookieManager.SaveCookie();
        //alert(out);
    } catch (e) {
        alert(e);
    }


}

function set_flag(a) {
    flag = a;
    if (!a)
        setTimeout("afara()", 1000);
}
