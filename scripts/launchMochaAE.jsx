//Launch Mocha AE v1.1
//Copyright 2017 Julián Herrera
//MIT License
//vidjuheffects.github.io

//This script is best used in conjunction with a script launcher like "Launch Pad" or "ft-Toolbar." Mocha AE
//can be annoying to launch. It install with after effects but can only be launched with the "Track with Mocha AE"
//command in the animation window. Meaning, to get mocha open, a layer needs to be selected. This is fine 
//when going to track a layer, but if you want to open an earlier mocha save file, having this be the only way to get
//the application open is cumbersome, especially since it can't even be opened by double click on the save files.
//This script binds the launching of mocha to a single button press (when used with a launcher.)


(function launchMochaAE(){
    //generate a random label
    var label = Math.random() * Math.pow(10, 15);
    $.writeln(label);
    
    //create a new temporary comp
    var tempComp = app.project.items.addComp(label, 4, 4, 1, 100, 30) ;
    
    //a little hack to bring the tempComp to the front thanks to @rich helvey
    tempComp.workAreaDuration = 0.06;
    tempComp.ramPreviewTest("",1,"");
    
    //by using a null, we make mocha unable to display
    //its import settings screen so it is a clean launch
    var myNull = tempComp.layers.addNull();
    myNull.selected = true;
    app.executeCommand(app.findMenuCommandId("Track in mocha AE"));
    tempComp.remove();
}())


