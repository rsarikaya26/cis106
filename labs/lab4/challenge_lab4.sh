#!/bin/bash
echo "----------------------------------------------------------------------------------------------"
figlet "SYSTEM"
echo

# Display system information
echo "DATE UTC: $(date -u '+%m/%d/%y %H:%M:%S')"
echo "HOSTNAME: $(hostname)"
echo "UPTIME: $(uptime -p | sed 's/up //')"
echo "USER: $(whoami)"
echo

figlet "MEMORY"
echo

# Display disk usage information
echo "Memory usage: "
free

figlet "DISK"
echo

echo "----------------------------------------------------------------------------------------------"
