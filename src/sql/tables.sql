create database petshop;

use petshop;

create table proprietarios(
	id integer primary key auto_increment,
    nome varchar(40) not null,
    telefone varchar(14) not null,
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp
);

create table animais (
	id integer primary key auto_increment,
    nome varchar(40) not null,
    tipo varchar(20) not null,
    proprietario_id integer not null,
    FOREIGN KEY (proprietario_id) REFERENCES proprietarios(id),
    created_at datetime default current_timestamp,
    updated_at datetime default current_timestamp
);