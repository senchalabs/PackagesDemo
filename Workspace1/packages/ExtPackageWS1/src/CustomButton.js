Ext.define("ExtPackageWS1.CustomButton", {
    extend: 'Ext.button.Button',
    xtype: 'customButtonExtPackage',
    requires: [
        'Ext.window.MessageBox'
    ],
    text: 'Custom Button from ExtPackageWS1',
    width: 400,
    handler: function() {
        Ext.Msg.alert("Button Clicked", "This text is from ExtPackageWS1.CustomButton", Ext.emptyFn);
    }
});