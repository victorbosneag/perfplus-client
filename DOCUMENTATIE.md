# Apex Olympix

Descriere

Apex Olympix este o platforma web care centralizeaza toate competițiile academice.

Cu Apex Olympix, elevii si educatorii pot descoperi, participa si excela intr-o gama larga de competitii academice.
Platforma aduna competitii din diferite discipline, inclusiv matematica, stiinte, informatica si multe altele.

Caracteristici:

- Centralizare pentru toate competitiile: Apex Olympix este o destinatie unica pentru competitii academice, prezentand o
  varietate mare de concursuri in diferite discipline.
- Liste complete de competitii: Informatii detaliate despre fiecare competitie, inclusiv criterii de eligibilitate,
  termene de inregistrare, reguli si premii, ajuta utilizatorii sa gaseasca si sa aleaga competitii potrivite.
- Proces de inregistrare fara probleme: Platforma simplifica procesul de inregistrare, permitand educatorilor sa inscrie
  elevii la mai multe competitii cu usurinta.
- Toate subiectele si baremele tuturor concursurilor intr-un singur loc

-----------

## Frontend

Resurse folosite:

1. Imagini:
    - Sigla: [Logo-maker](https://logo-maker.freelogodesign.org)
    - Fundal: [Freepik](https://www.freepik.com/free-photo/blackboard-with-calculations-frame_2483500.htm#query=blackboard&position=49&from_view=keyword&track=sph")
2. Biblioteci:
    - react
    - d3
    - markdown-to-jsx
    - moment
    - react-calendar
    - react-icons
    - react-paginate
    - react-pdf
    - react-pro-sidebar
    - react-scroll-horizontal
    - styled-components
    - turndown

------

## Backend

**API-ul are capabilitatea de a face distinctia intre nivelurile de acces**

API Routes:

- Contest:
    - `/create` creeaza un nou concurs
    - `/list` afiseaza toate concursurile (cu paginatie)
    - `/view` afiseaza toate concursurile (fara paginatie)
    - `/find` cauta (si gaseste) un concurs
    - `/delete` sterge concursul
- Contest Content:
    - `/config` configureaza documentele auxiliare pe care le poate aveau un document
    - `/upload` incarca documentul
    - `/get` afiseaza documentul
- Participant:
    - `/create` inregistreaza participanti noi (se pot inregistra mai multi intr-un singur request)
    - `/list` afiseaza toti participantii (cu paginatie)
- Post:
    - `/create` creeaza o postare noua (suporta markdown)
    - `/find` returneaza o postare in functie de id
    - `/list` afiseaza toate postarile
- Ranking:
    - `/create` acorda un loc participantilor
- User:
    - `/create` inregistreaza un nou utilizator
    - `/login` login
    - `/info` returneaza informatii despre user-ul logat

Tehnologii folosite:

- Node.js
- Express
- Sequelize (ORM)
- SQLite (se pot folosi alte baze de date pentru performanta sporita datorita utilizarii unui ORM)

Biblioteci folosite:

- Cele mentionate mai sus la tehnologii
- dotenv
- jsonwebtoken
- body-parser
- n-readline
- node-base64-to-file
