# -*- coding: utf-8 -*-
# Copyright (c) 2019, UTI and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import   nowdate
class PAGOS(Document):
	def generarpago(self ):
		return "hola"

@frappe.whitelist()
def generarpago(anio,socio,valor ):	
	meses = ["ENERO", "FEBRERO", "MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]
	data = frappe.db.sql(""" SELECT name  FROM nextdb.tabSOCIOS  order by 1 """ )
	for d in data:
		for m in meses:
			pagos = frappe.new_doc("PAGOS")
			pagos.socio = d[0]
			pagos.mes = m
			pagos.valor =valor
			pagos.fecha =  nowdate()
			pagos.anio = anio
			pagos.save()

	return "exito" 
