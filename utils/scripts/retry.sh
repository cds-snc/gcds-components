#!/bin/bash

# Usage: ./retry.sh <number_of_retries> <command>
# Example: ./retry.sh 5 "curl -s http://example.com"

# Number of retries
RETRIES=$1

# Command to execute
COMMAND=$2

# Counter for the number of attempts
COUNTER=0

# Initial exit status
EXIT_STATUS=1

# Retry loop
while [ $COUNTER -lt $RETRIES ] && [ $EXIT_STATUS -ne 0 ]; do
    # Increment the counter
    COUNTER=$((COUNTER + 1))

    echo "Attempt $COUNTER/$RETRIES: Executing command: $COMMAND"

    # Execute the command
    eval $COMMAND

    # Capture the exit status of the command
    EXIT_STATUS=$?

    if [ $EXIT_STATUS -ne 0 ]; then
        echo "Command failed with exit status $EXIT_STATUS. Retrying..."
    else
        echo "Command succeeded."
    fi

    # Wait for a while before retrying (optional)
    sleep 1
done

if [ $EXIT_STATUS -ne 0 ]; then
    echo "Command failed after $RETRIES attempts."
    exit 1
else
    echo "Command succeeded after $COUNTER attempts."
    exit 0
fi
