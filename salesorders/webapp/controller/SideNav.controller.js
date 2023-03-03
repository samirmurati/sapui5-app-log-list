sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sapb1.salesorders.controller.SideNav", {

		onCollapseExpandPress: function () {
			var oSideNavigation = this.byId("sideNavigation");
			var bExpanded = oSideNavigation.getExpanded();

			oSideNavigation.setExpanded(!bExpanded);
		},

		onHideShowSubItemPress: function () {
			var oNavListItem = this.byId("subItem3");
			oNavListItem.setVisible(!oNavListItem.getVisible());
		}

	});
});