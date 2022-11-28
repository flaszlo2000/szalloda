from typing import List

from .connection import engine


def check_tables():
    with open("./src/db/szallide.sql", 'r') as sql_dump:
        sql_dump_content: List[str] = []
        for sql_dump_line in sql_dump.readlines():
            if sql_dump_line.startswith("--"): continue # we can't use anything like this
            if sql_dump_line.startswith("/*"): continue

            sql_dump_content.append(sql_dump_line)
        
        base_connection = engine.connect()
        base_connection.execute("\n".join(sql_dump_content))