# -*- coding: utf-8 -*-
# Copyright (c) 2019, UTI and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class SESIONES(Document):
	pass
@frappe.whitelist()     
def get_encargado( doctype, txt, searchfield, start, page_len, filters):
      
        #return frappe.db.sql(""" select  p.name, nombre, codigo, unidad , pa.cantidad, pa.almacen, lp.precio, lp.incluyeiva, lp.ivaporcentaje
        return frappe.db.sql(""" SELECT 
distinct `tabLOCAL`.encargado 
FROM 
`tabLOCAL` """ )