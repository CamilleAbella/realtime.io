# Radon Voleur

## Sommaire
1. [Histoire](#histoire)
2. [Gameplay](#gameplay)
    1. [But du jeu](#but)
    2. [Actions](#actions)
    3. [Interactions](#interactions)
    4. [Les phases de jeu](#phases)
    5. [Les stratégies](#strategies)
3. [Contenu du jeu](#contenu)
    1. [Les objets](#objets)
    2. [Les indices](#indices)
    3. [Les rôles](#roles)
4. [Level Design](#level)
5. [Graphismes](#graphics)
6. [Sound Design](#sound)
7. [Idées diverses](#idees)

## 1 - Histoire <a name="histoire"></a>
Une famille de ratons-laveur s’installe au fond d’une caverne, mais la présence de Radon radioactif gène leur confort. Ils doivent donc sortir le métal de leur caverne pour êtres en sécurité. Comme le Radon est radioactif, il ne peuvent pas le garder pendant toute la monté et doivent se le passer en cours de route. Mais attention à ne pas le donner au Raton Fou qui s’en servirait pour tuer toute la colonie. Les ratons devront aussi chercher des indices permettant d’innoncneter des ratons et ainsi pour leur passer le radon jusqu’à la sortie.

## 2 - Gameplay <a name="gameplay"></a>
- 6 joueurs dont 1 imposteur
- Succession de niveaux sous forme de plateformes (étages) en vue de profil 2D
- 3 à 5 étages selon difficulté

### But du jeu : <a name="but"></a>
Pour les Ratons innocents :
- Atteindre la sortie dans le temps imparti
- Ne pas donner le Radon au raton fou

Pour le Raton fou :
- Ralentir suffisamment l’équipe pour ne pas atteindre la sortie à temps
- Se faire donner le Radon

### Les actions : <a name="actions"></a>
- Déplacement
- Saut
- Attraper un objet
- Poser ou donner un objet
- Intéragir avec l'environnement (ouvrir porte, actionner un levier, creuser un trou...)

### Les éléments d’interaction : <a name="interactions"></a>
- **Checkpoint :** Tous les ratons doivent s’y retrouver en fin de niveau pour passer au suivant
- **Courte échelle :** Un raton peut sauter sur un autre pour accéder à des plates formes trop hautes
- **Porte verrouillée :** un raton peut trouver une clé et ouvrir des portes, parfois il devra donner la clé à un autre raton.
- ***Petit trou (optionnel) :** Un raton peut donner un objet à travers ce trou, mais il ne peut pas passer par ce trou.
- ***Colonne (optionnel) :** Les ratons peuvent gratter la base d’une colonne pour la faire tomber et créer un pont
- **Eboulis :** Les ratons peuvent creuser dans un éboulis afin de découvrir un nouveau passage
- **Échelle :** un raton peut monter à une échelle. Certaines échelles peuvent être déplacées.

### Les phases de jeu : <a name="phases"></a>

**Plateforme :**
Les joueurs doivent passer à l’étage suivant en coopérant. Le jeu est sous forme de plateforme en 2D de profil (type Mario, Hollow Knight, Speluncky...)

Ils peuvent : 
- Ouvrir des passages pour faciliter l’avancée du Rameneur
- Chercher des indices permettant d’identifier les Ratons alliés
- Ramasser des objets utiles à la progression (clés)

**Le passage de relai :**
Les ratons sont réunis entre eux et le porteur actuel doit donner le Radon à un autre Raton qu’il choisi. Il peut s’aider des indices. Phase de jeu de type loup-garou. Possibilité de garder le gameplay de plateforme pour que les joueurs s'amusent à bouger.

### Stratégies de jeu: <a name="strategies"></a>
Si vous êtes innocent:
- Aider le Rameneur à se déplacer dans le niveau, en ouvrant des passages. 
- Chercher des indices dans des zones cachées tout autour du niveau. Nécessaire tant que les joueurs n'ont pas suffisement d'indices pour désigner un imposteur.
- Si l'imposteur est découvert, arreter de chercher les indices et se concentrer sur aider le Rameneur à sortir de la caverne.

Si vous êtes imposteur:
- Rester discret (les autre joueurs devront consacrer du temps à chercher des indices tant qu'ils ne vous ont pas trouvé)
- Ralentir la progression de l'équipe.
- Si jamais l'imposteur est découvert, gêner l'équipe au point de les empecher de sortir à temps.

La stratégie de la discretion doit être plus avantageuse pour l'imposteur que la stratégie où il se dévoile.

## 3 - Contenu du jeu <a name="contenu"></a>

### Ecrans de jeu
**Ecran d'accueil**
Ecran lorsqu'on se connecte sur le site, contiens les boutons:
- Jouer (lancer une partie)
- Règles / tuto
- Cinématique d'introduction

**Cinématique d'introduction**
Courte vidéo présentant l'histoire du jeu.

**Jeu**
Alternance entre phase de platforme et phase de sélection du porteur suivant.

### Les objets : <a name="objets"></a>
Un raton ne peut porter qu’un seul objet à la fois. Il peut le donner à un autre raton, l’utiliser ou le poser.
- Clés : Permet d’ouvrir des portes vérrouillées
- Indices : permet d’identifier des innocents durant la phase de transmission du Radon

### Les indices : <a name="indices"></a>
Les ratons peuvent trouver des indices leur permettant d'identifier un raton innocent. Les indices sont des traces laissés par les ratons durant d'anciens passages dans la caverne, mais le raton fou a laissé moins de traces que les autres.

Chaque indice est associé à un joueur:
- Les innocents ont 3 indices à leur nom
- Le raton fou a 2 indices à son nom

Les joueurs peuvent donc innocenter un autre joueur en trouvant 3 indices qui portent son nom.

### Les rôles : <a name="roles"></a>
Les ratons peuvent avoir des rôles attribués qui leur donne des avantages dans l'aventure.
- Radieux : Éclaire les autres dans le noir (si on met une ambiance sombre)
- Radar : Fait des petits sons qui deviennent plus forts si un indice est proche.
- Raclown : Remonte le moral des autres ratons (si on met une jauge de moral)
- Rassembleur : Collecte les indices trouvé par les autres ratons
- Rachitique : Peut passer à travers les petits trous
- Racordeur ; peut faire descendre une échelle de corde afin de faire monter d'autres ratons

Autres idées :
Rabatteur
Raccourcie
Racketteur
Radar
Rafistoleur
Ramasseur
Ravitailleur
Radioactif

Rôle spéciaux :
**Le Raton fou :** L'imposteur à qui il ne faut pas donner le Radon. Il dispose d'actions supplémentaires:
- Créer des éboulis: En passant dans un couloir, le raton fou peut grater discrètement la zone et provoquer un éboulis que les autres ratons devront déblayer pour pouvoir passer. L'éboulis se provoque quelques secondes après l'action du Raton fou, pour lui permettre de ne pas être découvert trop facilement.
- Démoraliser un Raton: (si on met une jauge de moral) Le raton fou peut démoraliser un autre Raton, les Raton démoralisés se déplacent moins vite.
- Piéger une échelle: le raton fou peut mettre un piège pour que le prochain raton qui monte à l'échelle en tombe s'il essaie de monter.
- Brouiller un indice: Rend un indice illisible.
- Se dévoiler: Le raton fou se dévoile et gagne de nouvelles actions

**Le Raton fou dévoilé :** Si jamais le raton fou a manqué de discretion et est découvert, il peut toujours se dévoiler et gagner de nouvelles actions.
- Toutes les actions de base du Raton fou se déclenchent instantanément quand il choisi de les faire

**Le Rameneur :** Au début de chaque niveau, un joueur est chargé de porter le Radon. Il est limité dans ses actions et doit compter sur l'aide des autres joueurs pour avancer. A la fin de chaque niveau, le porteur doit choisir à qui donner le radon, en se basant sur les indices collectés.
- Il ne peut pas porter d'objets car il porte déjà le Radon et qu'il ne peut pas s'en débarrasser avant la fin du niveau.
- Il ne peut pas utiliser les compétences spéciales liées à son rôle.
- Il est plus lent et saute moins haut que les autres Ratons (saut normal = 3 blocs, saut du Rameneur = 1 bloc)

## 4 - Level Design : <a name="level"></a>

Exemple de niveau:
![image](https://media.discordapp.net/attachments/777224843816075294/777224945578147891/level.png?width=330&height=475)

Le départ est en bas à droite. On trouve dans ce niveau:
- Bloc rouge: Obstacle infranchissable
- Ligne rouge: plancher pouvant être traversé
- Porte marron: Porte fermée à clé
- Parte Orange: Porte d'arrivée
- Gros caillou: éboulis à déblayer
- Echelle: échelle
- Clé: Clé
- Empreintes de racoons: indices pour trouver les innocents

## 5 - Graphismes : <a name="graphics"></a>

### Sprites
![image](https://cdn.discordapp.com/attachments/777102381820149781/777173878425255966/Sans_titre-2.png)
![image](https://cdn.discordapp.com/attachments/777102381820149781/777173936156442634/Sans_titre-3.png)
![image](https://cdn.discordapp.com/attachments/777102381820149781/777178146025504768/2eframe.png)

### Background
![image](https://cdn.discordapp.com/attachments/777102381820149781/777239378804080720/Screen_Shot_11-14-20_at_07.30_PM.PNG)

### Objets

## 6 - Sound Design : <a name="sound"></a>

## 7 - Idées diverses : <a name="idees"></a>
- Mettre de l’obscurité dans le jeu, ce qui pousse les joueurs à devoir chercher de la lumière
- Mettre une barre de fatigue, que certains rôles peuvent remonter.
- Le niveau est le même pour tout une partie, ce qui permet au jouer de visiter la partie qu’il souhaitent. Le passage du Radon dans ce cas ne se fait pas dans une zone à part.
- Carte élargie, pour permettre de mettre des passages bonus
- Faire des rôles spécial imposteur
