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

