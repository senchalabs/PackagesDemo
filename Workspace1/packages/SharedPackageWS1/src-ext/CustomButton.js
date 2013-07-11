Ext.define("SharedPackageWS1.CustomButton", {
    extend: 'Ext.button.Button',
    xtype: 'customButtonSharedPackage',
    requires: [
        'Ext.window.MessageBox',
        'SharedPackageWS1.SharedClass'
    ],
    text: 'Custom Button from SharedPackageWS1',
    width: 400,
    handler: function() {
        var shared = new SharedPackageWS1.SharedClass();
        shared.alert();
    }
});