from __future__ import unicode_literals
from frappe import _
def get_data():
	return [{
    "label": _("Gestión de Socios"),
	"items": [
			    {
				"type": "doctype",
				"app_icon": "file-alt",
				"name":"DIRECTIVAS",
                "label":"Directiva"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
				"name":"SOCIOS",
                "label":"Socios"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
                "name":"LOCAL",
				"label":"Locales"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
                "name":"PROVEEDORES",
				"label":"Proveedores"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
                "name":"SESIONES",
				"label":"Sesiones"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
                "name":"EGRESOS",
				"label":"Egresos"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
                "name":"IVA",
				"label":"Iva"
				},
			    {
				"type": "doctype",
				"app_icon": "file-alt",
                "name":"PAGOS",
				"label":"Pagos"
				}
			 ]
            },
            {
    "label": _("Reportes"),
	"items": [
                {
                "type": "doctype",
				"app_icon": "file-alt",
                "name":"LOCALES_POR_SOCIOS",
				"label":"Locales por Socios"
                },
                {
                "type": "doctype",
				"app_icon": "file-alt",
                "name":"PAGOS_SOCIOS",
				"label":"Pagos de Socios"
                },
                {
                "type": "doctype",
				"app_icon": "file-alt",
                "name":"REPORTE_DE_SOCIOS",
				"label":"Listado de Socios"
                }
             ]
            }]