# File Uploader Project 

A simple file uploader web app that allows users to upload files to AWS S3 and returns a public link to access the file.

## Features

- Upload text, JPEG, and PNG files
- File size limit (default: 10 MB)
- File type validation
- Publicly accessible uploaded files
- Returns file URL after successful upload

## Tech Stack

- Backend: Node.js, Express
- File handling: Multer
- Cloud Storage: AWS S3
- Environment variables: dotenv
- CORS enabled for frontend requests

## Reflection
During this project, I learned how to integrate AWS S3 with a Node.js backend to handle file uploads securely. The most challenging part was configuring the bucket permissions and public access correctly. I also added file size limits, type checks, and metadata handling for extra functionality.
