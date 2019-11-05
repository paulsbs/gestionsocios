# -*- coding: utf-8 -*-
# Copyright (c) 2019, UTI and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
 

class TarjetasCoutas(Document):
	def getDatosCliente(self,nombre):        
		if self and nombre:
			datossocio =  frappe.db.sql(""" SELECT s.cedula , l.name   FROM  tabSOCIOS s inner join tabLOCAL l on ( s.name= l.encargado) where s.name=%s""",nombre)[0]
		return datossocio

	def generarpago(self,anio,socio,valor):        
		if self and valor:
			meses = ["SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE","ENERO", "FEBRERO", "MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO"]
			for m in meses:
				pagos = frappe.get_doc("Tarjetas Coutas",self.name)
				row = pagos.append("mes_socio", {}) 			 
				row.mes = m
				row.valor =valor			 
				row.anio = anio
				row.insert()
		return "Exito"