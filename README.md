# contributors_data
Database storing details for those that have worked on the project. 

Where ever you see *id* you need to replace it with the ID of the contributor that you are trying to maniuplate. 

Post new contributor:
http://localhost:4000/contributors/
Structure of JSON object needs to be as follows:
{
		"contributor_name": "test",
		"email": "test@fake.com",
		"github_link": "test5"
}

Get all contributors:
http://localhost:4000/contributors

Get contributor by id:
http://localhost:4000/contributors/1

Edit contributors details:
http://localhost:4000/contributors/*id*
Structure of JSON object needs to be as follows:
{
		"id": "*id*",
		"contributor_name": "test",
		"email": "test@fake.com",
		"github_link": "testing"
}

Delete contributors data:
http://localhost:4000/contributors/*id*
