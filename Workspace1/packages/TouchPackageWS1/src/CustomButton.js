Ext.define("TouchPackageWS1.CustomButton", {
    extend: "Ext.Button",
    xtype: "customButtonTouchPackage",
    config: {
        text: 'Custom Button from TouchPacakgeWS1',
        width: 500,
        handler: function() {
            Ext.Msg.alert("Button Clicked", "This text is from TouchPackageWS1.CustomButton", Ext.emptyFn);
        }
    }
});