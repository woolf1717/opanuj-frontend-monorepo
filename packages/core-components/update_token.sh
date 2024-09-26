#!/usr/bin/env bash

new_token=$(aws codeartifact get-authorization-token --domain core-components --domain-owner 021891611839 --query authorizationToken --output text)

sed -i "s|authToken=.*|authToken=$new_token|" .npmrc

echo "New auth token generated inside .npmrc"
