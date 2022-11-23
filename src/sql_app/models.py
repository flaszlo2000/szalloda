from sqlalchemy import Column, Date, ForeignKey, Integer, String
from sqlalchemy import relationship

from .database import Base

class Vendeg(Base):
    __tabelename__ = "vendeg"
    
    szemelyiAzonosito = Column(String, primary_key = True, index = True)
    vezetekNev = Column(String, index = True)
    keresztNev = Column(String, index = True)
    szuletesiDatum = Column(Date, index = True)
    email = Column(String, index = True)
    nem = Column(String, index = True)
    varos = Column(String, index = True)
    utca = Column(String, index = True)
    hazszam = Column(Integer, index = True)
    
    kapcsolat = relationship("Foglalas", back_populates="kozpont")
    
    
class Foglalas(Base):
    __tablename__ = "foglalas"
    
    foglalasID = Column(Integer, primary_key = True, Index = True)
    mettol = Column(Date, Index = True)
    meddig = Column(Date, Index = True)
    fo = Column(Integer, Index = True)
    szemelyiAzonosito = Column(String, ForeignKey(Vendeg.szemelyiAzonosito))
    
    kozpont = relationship("Vendeg","SzobaVal","SzolgaltatasVal", back_populates="kapcsolat")
    
class SzobaTipus(Base):
    __tablename__ = "szobatipus"
    
    megnevezes = Column(String, primary_key = True, Index = True)
    terulet = Column(Integer, Index = True)
    ar = Column(Integer, Index = True)
    
    
class Szoba(Base):
    __tablename__ = "szoba"
    
    szobaSzam = Column(Integer, primary_key = True, Index = True)
    megnevezes = Column(String, ForeignKey(SzobaTipus.megnevezes))
    
    
class Szolgaltatasok(Base):
    __tablename__ = "szolgaltatasok"
    
    megnevezes = Column(String, primary_key = True, Index = True)
    ar = Column(Integer, Index = True)
    
    
class SzobaVal(Base):
    __tablename__ = "szobaVal"
    foglalasID = Column(Integer, ForeignKey(Foglalas.foglalasID))
    megnevezes = Column(String, ForeignKey(Szolgaltatasok.megnevezes))
    
    kapcsolat = relationship()
    
class SzolgaltatasVal(Base):
    __tablename__ = "szolgaltatasVal"
    
    foglalasID = Column(Integer, ForeignKey(Foglalas.foglalasID))
    megnevezes = Column(String, ForeignKey(Szolgaltatasok.megnevezes))
    
    kapcsolat = relationship()
    