// Copyright (c) 2019, UTI and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tarjetas Coutas', {
  onload: function(frm) {
console.log('a');
  },
	 socio: function(frm) {
      getDatos(frm);
    }
	
});
function getDatos(frm) {
  if (frm != undefined && frm.get_field("socio").value != undefined)
    frappe.call({
      doc: frm.doc,
      method: "getDatosCliente",
      args: { nombre: frm.get_field("socio").value },
      callback: r => { 
     frm.doc.ci = r.message[0];
     frm.doc.nlocal = r.message[1];
     frm.refresh_fields();

      }
    });
}