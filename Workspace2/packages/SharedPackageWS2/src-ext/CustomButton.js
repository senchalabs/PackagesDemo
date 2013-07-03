Ext.define("SharedPackageWS2.CustomButton", {
    extend: 'Ext.button.Button',
    xtype: 'customButtonSharedPackage',
    requires: [
        'Ext.window.MessageBox',
        'SharedPackageWS2.SharedClass'
    ],
    text: 'Custom Button from SharedPackageWS2',
    width: 400,
    handler: function() {
        var shared = new SharedPackageWS2.SharedClass();
        shared.alert();
    }
});
