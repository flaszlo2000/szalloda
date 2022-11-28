from contextlib import contextmanager
from typing import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

# SQLALCHEMY_DATABASE_URL = "mariadb+mysqldb://root:password123@localhost:3306/szallide"
SQLALCHEMY_DATABASE_URL = "sqlite:///test.db"


engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

__sessionmaker = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def session() -> Generator[Session, None, None]:
    c_session = __sessionmaker() 

    yield c_session

    c_session.commit()

