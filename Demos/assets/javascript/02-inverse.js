window.addEvent("domready", function(){
    colors = ["#7CF1DE", "#37C09F", "#42897A", "#205164", "#001E47"];
    var mywall = new Wall("wall", {
                    "draggable":true,
                    "inertia":true,
                    "invert":true,
                    "width":120,
                    "height":120,
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