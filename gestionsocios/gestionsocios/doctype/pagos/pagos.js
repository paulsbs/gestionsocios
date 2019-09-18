// Copyright (c) 2019, UTI and contributors
// For license information, please see license.txt

frappe.ui.form.on('PAGOS', {
	refresh: function(frm) {

	},
	
	onload: function(listview) {
		listview.page.add_menu_item(__("Generar Cuotas"), function() {
			 
		});
	}

});
