# jeremyspierer — site photo

Site statique (Jekyll) publié gratuitement par GitHub Pages.

## Modifier le site sans coder : Pages CMS
1. Aller sur https://app.pagescms.org et se connecter avec GitHub.
2. Choisir ce dépôt.
3. Menu **Series** : ouvrir une série pour changer le titre, le texte, la couverture, ajouter / supprimer des photos ou les réordonner (glisser-déposer). « Add an entry » crée une nouvelle série.
4. Menu **Exhibitions** : ajouter une exposition. Cocher « Show large, with photos » pour la mettre en avant.
5. Menu **Settings** : grande image et texte de la page d'accueil, e-mail, Instagram.
6. **Save** : le site se met à jour tout seul en 1 à 2 minutes.

Conseil : exporter les photos en JPEG, 1800 px sur le grand côté, qualité 80 (≈ 300–600 Ko).

## Où sont les choses
- `_series/*.md` : une série par fichier (titre, ordre, photos, légendes, texte).
- `_exhibitions/*.md` : une exposition par fichier.
- `_data/settings.yml` : page d'accueil et coordonnées. `_data/awards.yml` : distinctions.
- `assets/img/` : les images. `assets/css/site.css` : le style.

## Domaine
Le domaine jeremyspierer.com sera branché plus tard (fichier `CNAME` + DNS).
