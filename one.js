$("#axis7").mouseenter(function(){

     $("<audio></audio>").attr({
                'src':'audios/krik.mp3',
                'volume':0.6,
                'autoplay':'autoplay'
        }).appendTo("body");
});