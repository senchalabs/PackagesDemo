Ext.define("SharedPackageWS2.CustomButton", {
    extend: 'Ext.Button',
    xtype: 'customButtonSharedPackage',
    requires: [
        'Ext.MessageBox',
        'SharedPackageWS2.SharedClass'
    ],
    config: {
        text: 'Custom Button from SharePackageWS2',
        width: 500,
        handler: function() {
            var shared = new SharedPackageWS2.SharedClass();
            Ext.Msg.alert("Button Clicked", shared.getSharedText(), Ext.emptyFn);
        }
    }
});
