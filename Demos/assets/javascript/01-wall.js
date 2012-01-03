window.addEvent("domready", function(){
    colors = ["#730046", "#BFBB11", "#FFC200", "#E88801", "#C93C00"];
    var mywall = new Wall("wall", {
                    "draggable":true,
                    "width":180,
                    "height":180,
                    "printCoordinates":true,
                    "rangex":[-300,300],
                    "rangey":[-300,300],
                    callOnUpdate: function(items){
                        items.each(function(e, i){
                            // If use concole log
                            // console.log("x:" + e.x + "\t y:"+e.y);
                            // On Update set different color background
                            e.node.setStyle("background",colors[ Math.floor(Math.random()*colors.length) ]);
							e.node.fade("hide").fade("in")
                        }.bind(this));
                    }
                });
    // Init Wall
    mywall.initWall();
});