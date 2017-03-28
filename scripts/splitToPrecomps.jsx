//Split to Precomps v1.0
//Copyright 2017 Julián Herrera
//MIT License
//vidjuheffects.github.io

//To use this script. Drag the item you want to split into precomps so it is the top layer of your comp and run the script.

(function(thisObj){
activeItem = app.project.activeItem;
if (activeItem instanceof CompItem) {
    app.beginUndoGroup("Split to Precomps");
    for (i=2; i<=activeItem.numLayers; i+=1){
        var copyLayer = activeItem.layer(1);
        var targetLayer = activeItem.layer(i);
        if (targetLayer.source instanceof CompItem) {
            var targetLayerStartTime = targetLayer.startTime;
            var targetComp = targetLayer.source;
            
            //Clear any selected layers, so copyToComp() inserts our layer on top
            selLayers = targetComp.selectedLayers;
            for (j=0; j<selLayers.length; j++){
                selLayers[j].selected=false;
            }

            copyLayer.copyToComp(targetComp);
            targetComp.layer(1).startTime =  targetComp.layer(1).startTime - targetLayerStartTime;
        }
    }
    app.endUndoGroup();
    return 0;
}
else {
    alert ("Please make sure a composition is active before running this script.")
    return 1;
}
}(this));
