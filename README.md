## Strona pa-site

# Run locally project
Open terminal from project directory 
Run command: npm run dev - start locally


# Run production mode project
npm run build - build production version

# Database migration
This is the way how we are going to seed database with aggregated data from P&A project sources (e.g facebook)

<<TO BE CHANGED IN FEATURE>> 
    Each migration deletes previous one, any mistakes can be overriden by simply calling /api/run-migration endpoint
<<TO BE CHANGED IN FEATURE>> 


Prerequisite install:
    -> setup connection to postgress, reach out to ME and ask how
    -> httpie
    -> node.js => v.20.15.1
    -> psql => 14.12 (optionally)

1. Add migration data to ./scripts/projects.json file
2. Run locally project
3. From terminal run POST request: http://localhost:3000/api/run-migration 
4. Check output of terminal and verify correctnes of table content on Vercel site
5. In bash terminal run source `./export-envs.sh` 
6. Login to database from console `psql $POSTGRES_URL`
7. View project table, verify data 
```
# Enable pretty print
\x

# Examine table projects
select * from projects;

# Check how many records are created
select count(*) from projects;
```


# Future scope of work
1. Replace mocked data with seeded Project data in HomePage, ProjectPage
2. In the main page use preview object created from Project
3. Implement caraousel
4. Add new table `partners` and use it in HomePage
5. Add new table `clients` and store data from emails
6. Replace statics with use of Cloudinary as our CDN to store all of these images