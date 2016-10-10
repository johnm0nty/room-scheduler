delimiter //
create procedure setupdb()
begin
  if not exists (select * from information_schema.tables where table_name = 'rooms') then
    create table ROOMS (ID int primary key, NAME varchar(128) unique not null, DATE_CREATED datetime default current_timestamp, DATE_MODIFIED timestamp);
    insert into rooms (id,name) values (1,'Sim City'),(2,'Zelda'),(3,'Sonic'),(4,'Halo');
	end if;
end//
delimiter ;
call setupdb;
drop procedure setupdb;
