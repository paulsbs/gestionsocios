// Copyright (c) 2019, UTI and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tarjetas Coutas', {
  onload: function(frm) {
console.log('a');
  },
	 socio: function(frm) {
      getDatos(frm);
    },
    btncuotas:function(frm){
      generarCuotas(frm);
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

function generarCuotas(frm){
 

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
      doc: frm.doc,
      method: "generarpago",
      args: {
        anio:data.anio,
        socio:frm.doc.socio,
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

 

}