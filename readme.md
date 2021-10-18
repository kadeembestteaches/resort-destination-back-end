## Resort Destination RESTful API 

A simple RESTful API that allows an administrator  to create, read, edit and delete resorts destinations

## Resort Destination End Points

### GET /resorts

The above end point returns all resorts

### GET /resorts/id

The above end point returns a resort based on the id provided

### POST /resorts

The above end point creates a resort. You are required to submit the resort destination data in the body of the request (as JSON) : The data includes :

- title (required)
- description (required)
- price (required)
- imagePath (required),
- featured (required)

### PUT /resorts/id

The above end point updates a resort based on the id provided. You are required to submit the  resort destination data, that is require to be updated,in the body of the request (as JSON) : The data could include ANY of the following :

- title (required)
- description (required)
- price (required)
- imagePath (required),
- featured (required)

### DELETE /resorts/id

The above end point deletes a resort based on the id provided

## Rules to Set up application

1. Clone source code by running: **git clone GITHUP_PROJECT_URL . **
2. After Cloning, re-install ALL 3rd party dependencies by running **npm install**
3. Create a folder within the project called **config**
4. Within the **config** folder, create a file called **keys.env**
5. Within the **keys.env** file, create the below environment variables :
   - **MONGODB_QUERY_STRING** - Assign your Database Connection String to the variable
   - **PORT** - Assign 5000
6. Run application by running : **npm run dev**