-- will drop MovieApp_db if it exist currently. 
DROP DATABASE IF EXIST MovieApp_db
-- creates the MovieApp_db database.
CREATE DATABASE MovieApp_db;




-- makes it so all of the following code will affect MovieApp_db.
USE MovieApp_db;
-- create table "Movie" within MovieApp_db. 
CREATE TABLE Movie (




-- name is for UserName. 
-- makes a string column called "name" which cannot contain null. 
name VARCHAR(30) NOT NULL, 


-- makes a boolean column called "likes_movies?" which cannot contain null. [I'm guessing True of False? select yes or no kind of thing?]
likes_movies BOOLEAN NOT NULL, 



-- makes a sting column called "list_of_movies"
list_of_movies VARCHAR(30),



-- makes a sting column called "list_of_movies"
list_of_Language VARCHAR(40),
-- just added the language option. 



-- makes a numeric column called person_age.
person_age INTEGER(10)
);

    --NO IDEA. 
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  --PRIMARY KEY (id)
--);















