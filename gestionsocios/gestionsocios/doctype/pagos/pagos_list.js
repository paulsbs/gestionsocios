// Copyright (c) 2019, UTI and contributors
// For license information, please see license.txt

frappe.listview_settings['PAGOS'] = { 
	onload: function(listview) {		 

		listview.page.add_menu_item(__("Generar Cuotas"), function() {
			frappe.call({
				 
				method: "generarpago",
				args: { },
				callback: r => {         
				  frappe.show_alert({
							  indicator: 'green',
							  message: __('XML Generado...')
						  });
				}
			  });
		});

	} 

};
