#!/usr/bin/env bash

DIRECTORY="node_modules/"

echo "Removing ${DIRECTORY}..."

rm -rf $DIRECTORY

cd client/
rm -rf $DIRECTORY

cd ..

cd backend/
rm -rf $DIRECTORY