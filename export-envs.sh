#!/bin/bash

filename=".env.local"

#Read file line by line 
while IFS= read -r line || [[ -n "$line" ]]; do
    # Trim leading and trailing whitespace
    line=$(echo "$line" | xargs)

    # Skip empty lines or lines starting with #
    if [[ -z "$line" || "$line" == \#* ]]; then
        continue
    fi

    # Extract the key and value
    key=$(echo "$line" | cut -d '=' -f 1)
    value=$(echo "$line" | cut -d '=' -f 2-)

    # Export the environment variable
    export "$key=$value"
    echo "Exported: $key=$value"
done < "$filename"
