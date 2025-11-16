# Notes 6

## Managing files and directories

## mkdir
### Usage: 
- This is the command itself, short for "make directory. The mkdir command in Linux is used to create new directories. The basic "formula" or syntax for its usage is: 

### Formula:
- `mkdir [OPTIONS] DIRECTORY_NAME(s)`

### Example:
- Creating a single directory.
- `mkdir my_directory`


## touch
## Usage:
- Creating Empty Files: If a specified FILE does not exist, touch will create an empty file with that name.

### Formula:
- `touch [OPTION]... FILE...`

### Example:
- ` touch newfile.txt`


## rm
## Usage:
- The rm command in Linux is used to remove (delete) files and directories. It is a powerful command, and deletions are generally irreversible, meaning files are not moved to a "recycle bin" but are unlinked from the filesystem. 

### Formula:
- ` rm [OPTION]... FILE...`

### Example
- To remove a single file:
- ` rm filename.txt`

## cp

## Usage:
- The cp command in Linux is used to copy files and directories. Its basic usage and common options are as follows: 
### Formula:
- `cp [OPTION]... SOURCE DEST`
- `cp [OPTION]... SOURCE... DIRECTORY`
- `cp [OPTION]... -t DIRECTORY SOURCE...`

### Example
- Copying a single file: This copies file1.txt to file2.txt in the current directory. If file2.txt already exists, it will be overwritten.
- `cp file1.txt file2.txt`

## mv
## Usage:
- The mv command in Linux is used to move or rename files and directories. It functions by changing the location of a file or directory within the filesystem or by changing its name.
### Formula
- `mv [OPTIONS] SOURCE DESTINATION`
### Example
- Moving a file:
- `mv file.txt /home/user/documents`
