# GlobTest


## Enoncé

[Echo](https://www.instagram.com/globalisecho/?hl=fr), mascotte de l'équipe de [Globalis](https://www.globalis-ms.com/), a découvert une fonction `foo()` bien mystérieuse. Hélas, il n'a pas accès au code. Curieux et grand amateur de [rétro-ingénierie](https://fr.wikipedia.org/wiki/R%C3%A9tro-ing%C3%A9nierie), Echo s'est amusé à appeler cette fonction, en injectant des données en entrée et en récoltant les sorties. Le comportement de la fonction `foo()` est le suivant :

|  Appel     |  Sortie     |
| ---   |:-:    |
| `foo([[0, 3], [6, 10]])` | `[[0, 3], [6, 10]]` |
| `foo([[0, 5], [3, 10]])` | `[[0, 10]]` |
| `foo([[0, 5], [2, 4]])` | `[[0, 5]]` |
| `foo([[7, 8], [3, 6], [2, 4]])` | `[[2, 6], [7, 8]]` |
| `foo([[3, 6], [3, 4], [15, 20], [16, 17], [1, 4], [6, 10], [3, 6]])` | `[[1, 10], [15, 20]]` |

Le challenge, si vous l'acceptez, serait d'aider Echo à comprendre ce que fait cette fonction et à la recoder. Vous êtes partant ? ;)


### Question 1

Expliquez, en quelques lignes, ce que fait cette fonction.

Cette fonction permet d'etablir une liste d'intervalles maximales à partir des intervalles données.
Les plus grandes et petite valeur sont retourné dans un tableau. 
Si il y a un deuxième intervalle qui n'est pas contenue dans le premier alors il est ajouter au tableau de résultat.

### Question 2

Codez cette fonction.
Merci de fournir un fichier contenant :

- la fonction, 
- l'appel de la fonction, avec un jeu de test en entrée,
- l'affichage du résultat en sortie.

le fichier de la fonction est le main.ts
le fichier de test est le test.spec.ts
Il suffit de cloner le repo de faire la commande npm install pour installer les dépendance
Pour lancer les tests il siffit de lancer la commande npm test

### Question 3

Précisez en combien de temps vous avez implémenté cette fonction.

Cette fonction a été implémenté en 1 heure 30 minutes. 

