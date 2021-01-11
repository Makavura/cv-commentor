## Recruit Commentor

### Proposed Features:
The user of this react application should be able to view the CV response(s) of for a job
candidates are applying for at their company. The application should have the following
workflow,
- Choose candidate from a list.
- Depending on the selection in the first step, if the selected candidate has an
application, open the CV file of the candidate. If the selected candidate does not
have an CV attached, display appropriate message.
- Provide an option for recruiter to enter comments about the candidates CV .
- Provide a "Save" button that saves the comments to the api.json file.
- Use dummy CVs no need to implement upload mechanisim
### Requirements
- Only step 1 should be visible when no candidate is picked. Step 1,2,3 and 4
should be visible when a candidate is picked.
- User should be able to change candidate selection at any time.
- You can use whatever libraries, task runners and build processes you like. React
and plain JavaScript are the only requirements (ES6 encouraged, but no
TypeScript, CoffeeScript, etc). Redux is strongly encouraged if you see a need
for it.

### API Usage
API can be launched using npm start. 

**Endpoint Result**
- /candidates Lists all available candidates
- /questions Lists all available questions
- /applications Lists all available applications


## Project Setup

Clone the repository
- git clone git@github.com:Makavura/recruit-commentor.git

Install Json-server which is used to mock a backend
- npm i -g json-server

Navigate into project directory
- cd recruit-commentor

Run project
- npm run start
