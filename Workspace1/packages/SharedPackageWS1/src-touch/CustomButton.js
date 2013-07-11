Ext.define("SharedPackageWS1.CustomButton", {
    extend: 'Ext.Button',
    xtype: 'customButtonSharedPackage',
    requires: [
        'Ext.MessageBox',
        'SharedPackageWS1.SharedClass'
    ],
    config: {
        text: 'Custom Button from SharePackageWS1',
        width: 500,
        handler: function() {
            var shared = new SharedPackageWS1.SharedClass();
            shared.alert();
        }
    }
});