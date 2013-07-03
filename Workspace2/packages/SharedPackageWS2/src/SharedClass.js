Ext.define("SharedPackageWS2.SharedClass", {

    getSharedText: function() {
        return "This text is from SharedPackageWS2.SharedClass";
    },
            
    alert: function() {
        Ext.Msg.alert("Button Clicked", this.getSharedText(), Ext.emptyFn);
    }
    
});
