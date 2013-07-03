Ext.define("ExtPackageWS2.CustomButton", {
    extend: 'Ext.button.Button',
    xtype: 'customButtonExtPackage',
    requires: [
        'Ext.window.MessageBox'
    ],
    text: 'Custom Button from ExtPackageWS2',
    width: 400,
    handler: function() {
        Ext.Msg.alert("Button Clicked", "This text is from ExtPackageWS2.CustomButton", Ext.emptyFn);
    }
});