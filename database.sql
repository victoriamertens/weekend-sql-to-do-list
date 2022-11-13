--Create a database titled: weekend_to_do_app
--Database port:5432
--host: localhost 
--Detailed information can be found in pool.js file 

 CREATE TABLE "updated_tasks" ( 
	"id" serial  primary key,
	"list" varchar(10), 
	"task" varchar(80), 
	"completed" BOOLEAN DEFAULT false
);

 INSERT INTO "updated_tasks" 
  ("task", "list")
  VALUES
  ('Wash the dog with new shampoo', 'Important'),
  ('Blow dry the cat', 'Casual'),
  ('Buy birthday present for Elaina', 'Time'),
  ('Design Ultimate Shawl Sticker', 'Casual'),
  ('Schedule 2 networking events', 'Time'), 
  ('Grocery shop for weekly lunches', 'Time'), 
  ('Start CSS course by Josh C.', 'Important'), 
  ('Tailor black jeans at waist', 'Casual'),  
  ('Lookup vegetarian recipies for dinner', 'Casual')    
 ;
