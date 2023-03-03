sap.ui.define([
    "./BaseController",
    "sap/ui/core/ComponentContainer",
   "sap/ui/core/UIComponent"
], function (BaseController, ComponentContainer, UIComponent) {
    "use strict";

    return BaseController.extend("sapb1.salesorders.controller.App", {

        onInit : function () {
            // var sideNavComponent = new ComponentContainer({
            //     name: "sapb1.salesorders",
            //     settings: {
            //        id: "SideNav"
            //     }
            //  });
            //  var worklistComponent = new ComponentContainer({
            //     name: "sapb1.salesorders",
            //     settings: {
            //        id: "worklist"
            //     }
            //  });
    
            //  var oSideNavSplitContainer = this.byId("sideNavSplitContainer");
            //  oSideNavSplitContainer.addContent(sideNavComponent);
    
            //  var oWorklistSplitContainer = this.byId("worklistSplitContainer");
            //  oWorklistSplitContainer.addContent(worklistComponent);
            // apply content density mode to root view
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });

});