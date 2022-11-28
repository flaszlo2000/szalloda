#!/bin/bash

source ./venv/bin/activate
export PYTHONPATH="${PYTHONPATH}:./src"
uvicorn src.main:app --reload --port 8000
