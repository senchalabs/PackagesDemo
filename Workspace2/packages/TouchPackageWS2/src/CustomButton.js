Ext.define("TouchPackageWS2.CustomButton", {
    extend: "Ext.Button",
    xtype: "customButtonTouchPackage",
    config: {
        text: 'Custom Button from TouchPacakgeWS2',
        width: 500,
        handler: function() {
            Ext.Msg.alert("Button Clicked", "This text is from TouchPackageWS2.CustomButton", Ext.emptyFn);
        }
    }
});