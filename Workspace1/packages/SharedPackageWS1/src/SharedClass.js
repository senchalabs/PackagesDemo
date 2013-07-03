Ext.define("SharedPackageWS1.SharedClass", {

    getSharedText: function() {
        return "This text is from SharedPackageWS1.SharedClass";
    },
            
    alert: function() {
        Ext.Msg.alert("Button Clicked", this.getSharedText(), Ext.emptyFn);
    }
    
});