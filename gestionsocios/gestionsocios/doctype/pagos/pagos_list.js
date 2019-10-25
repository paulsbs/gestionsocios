// Copyright (c) 2019, UTI and contributors
// For license information, please see license.txt

frappe.listview_settings['PAGOS'] = { 
	onload: function(listview) {		 

		listview.page.add_menu_item(__("Generar Cuotas"), function() {

			frappe.prompt([
				{
					fieldname: "anio",
					label: __("Año"),
					fieldtype: "Select",
					options: [
						{ "value": "2017", "label":"2017" },
						{ "value": "2018", "label":"2018" },
						{ "value": "2019", "label":"2019" },
						{ "value": "2021", "label":"2021" }, 
						{ "value": "2022", "label":"2022" }, 
						{ "value": "2023", "label":"2023" }, 
						{ "value": "2024", "label":"2024" }, 
						{ "value": "2025", "label":"2025" }, 
						{ "value": "2026", "label":"2026" }, 
						{ "value": "2027", "label":"2027" }, 
						{ "value": "2028", "label":"2028" }, 
					],
					reqd: 1,
				  
				},
				{
					fieldname: 'socio',
					label: __('Socio'),
					fieldtype: 'Link',
					reqd: 0,
					options: 'SOCIOS' 
				}
				,
				{
					fieldname: 'valor',
					label: __('Valor'),
					fieldtype: 'Link',
					reqd: 1,
					options: 'valor' 
				}
			], (data) => {
				 console.log(data); 
				 frappe.call({				 
					method: "gestionsocios.gestionsocios.doctype.pagos.pagos.generarpago",
					args: {
						anio:data.anio,
						socio:data.socio,
						valor:data.valor,
					 },
					callback: r => {      
						console.log(r);   
					  frappe.show_alert({
								  indicator: 'green',
								  message: __('Pagos Generados')
							  });
					}
				  });
			});
	
			},
			"Seleccione " );

	 

	} 

};
