// Copyright (c) 2019, UTI and contributors
// For license information, please see license.txt

frappe.ui.form.on('SESIONES', {
	onload: function(frm) {
		frm.set_query("socio", "socioasistencia", function(doc, cdt, cdn) {
			//const row = locals[cdt][cdn];
			return {
			  query:
				"gestionsocios.gestionsocios.doctype.sesiones.sesiones.get_encargado",
			  filters: {
				//listaprecio: frm.doc.listaprecios,
				//almacen: frm.doc.estab
			  }
			};
		  });
	}
});
