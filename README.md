Simon Says
===

## Consegna

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, tramite il prompt(), uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

#### Mio svolgimento

* creo un bottone start e al suo click:
* genero e stampo in pagina 5 numeri random univoci
* utilizzo una function per far scomparire i numeri DOPO 5 secondi e far contemporaneamente apparire 5 prompt che chiedono all'utente di inserire i numeri visti in ordine
* pusho i numeri inseriti in un array
* leggo l'array dei numeri inseriti con un ciclo e lo confronto con l'array dei numeri generati. 
* pusho in un array RISULTATI tutti i numeri presenti in entrambe le liste

* stampo messaggio che comunichi la lenght dell'arrayRisultati (QUANTI numeri hai indovinato), e i numeri indovinati (quindi altro ciclo che legga l'arrayRisultati).
