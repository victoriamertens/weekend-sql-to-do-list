 CREATE TABLE "tasks" ( 
	"id" serial  primary key, 
	"task" varchar(80), 
	"completed" BOOLEAN DEFAULT false
);
