--Create a database titled: weekend_to_do_app
--Database port:5432
--host: localhost 
--Detailed information can be found in pool.js file 

 CREATE TABLE "tasks" ( 
	"id" serial  primary key, 
	"task" varchar(80), 
	"completed" BOOLEAN DEFAULT false
);

 INSERT INTO "tasks" 
  ("task")
  VALUES
  ('Wash the dog with new shampoo'),
  ('Blow dry the cat'),
  ('Buy birthday present for Elaina'),
  ('Design Ultimate Shawl Sticker'),
  ('Schedule 2 networking events'), 
  ('Grocery shop for weekly lunches'), 
  ('Start CSS course by Josh C.'), 
  ('Tailor black jeans at waist'),  
  ('Lookup vegetarian recipies for dinner')    
 ;
