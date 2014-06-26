
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({nope:['jquery-ui-1.10.0.custom.min.js'],complete:init});function init(){var dragged=false;var dropped=false;sym.getSymbol('dragged').$("dragdrop5").hide();sym.$('part').draggable({start:function(e){dragged=true;},stop:function(e){if(sym.getSymbol('headline').$("dragdrop").is(':visible')&&dragged==false&&dropped==true){sym.getSymbol('headline').$("dragdrop").hide();sym.getSymbol('dragged').$("dragdrop5").show();}else{sym.getSymbol('headline').$("dragdrop").show();sym.getSymbol('dragged').$("dragdrop5").hide();}}});sym.$('body').droppable({drop:function(){sym.getSymbol("part").play();dragged=false;dropped=true;}});}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'part'
(function(symbolName){})("part");
//Edge symbol end:'part'

//=========================================================

//Edge symbol: 'drag_text'
(function(symbolName){})("drag_text");
//Edge symbol end:'drag_text'

//=========================================================

//Edge symbol: 'headline'
(function(symbolName){})("headline");
//Edge symbol end:'headline'

//=========================================================

//Edge symbol: 'dragged'
(function(symbolName){})("dragged");
//Edge symbol end:'dragged'
})(jQuery,AdobeEdge,"EDGE-34189304");