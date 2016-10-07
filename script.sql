delimiter //
create procedure setupdb()
begin
  if not exists(select 1) then select 2;
    else select 3;
	end if;
end//
delimiter ;
call setupdb;
drop procedure setupdb;
