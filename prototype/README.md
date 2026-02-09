# Prototype Trigano VDL Media

## Démarrage rapide
- Ouvrir `home.html` dans un navigateur (double-clic).
- Si vous n’êtes pas authentifié, vous serez redirigé vers `login.html`.

## Connexion (mock)
- Saisir n’importe quel identifiant et mot de passe.
- Le clic sur **Connexion** simule une authentification et redirige vers `home.html`.

## Changement de langue
- Utiliser le sélecteur **FR/EN/DE/IT** en haut de page.
- La langue est conservée en local et appliquée sur toutes les pages.

## Tester le flux Marque → Catégorie → Pack
1. Depuis `home.html`, choisir une marque.
2. Sur `brand.html`, ouvrir une catégorie.
3. Depuis `category.html`, cliquer sur **Télécharger en pack** pour ouvrir le récapitulatif.
4. Ouvrir le détail d’un pack via **Voir le pack** pour accéder à `pack.html`.

## Notes
- Les contenus sont simulés dans `data.js` (marques, catégories, packs, langues).
- Les téléchargements sont des simulations (pas de fichiers réels).
