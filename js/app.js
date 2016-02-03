$(document) .ready (function(){
            // when hover Ryu shifts to ready position
            $(".ryu") .mouseenter(function (){
                $(".ryu-still") .hide();
                $(".ryu-ready") .show();
            })
            // when stop hover Ryu shifts to still position
            .mouseleave (function (){
                $(".ryu-ready") .hide ();
                $(".ryu-still") .show ();
            })
            // click mouse Ryu leans forward and throws Hadouken
            .mousedown(function(){
                $('.ryu-ready').hide();
                $('.ryu-throwing').show();
            })
            // release mouse Ryu leans goes back to ready position
            .mouseup (function(){
                $(".ryu-throwing") .hide ();
                $(".ryu-ready") .show ();
            })
        })
