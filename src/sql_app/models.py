from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy import relationship

from .database import Base

class Vendeg(Base):
    __tabelename__ = "vendeg"
    
class Foglalas(Base):
    __tablename__ = "foglalas"
    
class Szoba(Base):
    __tablename__ = "szoba"

class SzobaTipus(Base):
    __tablename__ = "szobatipus"
    
class Szolgaltatasok(Base):
    __tablename__ = "szolgaltatasok"
    
class SzobaValasztas(Base):
    __tablename__ = "szobaVal"
    
class SzolgaltatasValasztas(Base):
    __tablename__ = "szolgaltatasVal"