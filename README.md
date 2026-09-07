# 🚀 SAS JavaScript Console

> [!IMPORTANT]
> Voici ton espace personnel de travail pour les sept jours du SAS. Une nouvelle journée sera ajoutée chaque matin.

## 👤 Mon identité

| Information | À compléter |
|---|---|
| Nom et prénom | ... |
| Classe | ... |
| Nom d'utilisateur GitHub | ... |

## 🧭 Comment travailler

```text
1. LIRE → 2. CODER → 3. EXÉCUTER → 4. VÉRIFIER → 5. COMMIT → 6. PUSH
```

| Besoin | Où aller ? |
|---|---|
| Suivre les journées terminées | [📊 Ma progression](./PROGRESSION.md) |
| Retrouver les commandes Git | [🌿 Aide Git](./docs/commandes-git.md) |
| Voir le résultat des contrôles | Onglet **Actions** du dépôt |

## 1️⃣ Première installation

Après avoir cliqué sur **Use this template**, puis créé ton dépôt personnel :

```bash
git clone URL_DE_TON_DEPOT
cd NOM_DE_TON_DEPOT
git status
```

> [!TIP]
> Remplace `URL_DE_TON_DEPOT` et `NOM_DE_TON_DEPOT` par les informations affichées sur ton dépôt GitHub.

## 2️⃣ Ajouter la journée reçue

1. Télécharge le ZIP publié dans Google Classroom.
2. Extrais le dossier `dayXX` à la racine de ce dépôt.
3. Vérifie les nouveaux fichiers avec `git status`.
4. Crée un premier commit avant de coder.

```bash
git add dayXX
git commit -m "jour XX : ajouter les fichiers de départ"
git push
```

## 3️⃣ Routine quotidienne

Pour exécuter un exercice :

```bash
node dayXX/exercices/exercice-01.js
```

Pour contrôler tous les fichiers déjà reçus :

```bash
npm test
```

## ✅ Comprendre le résultat

| Symbole | Signification |
|:---:|---|
| ✓ | Le fichier contient du code et sa syntaxe est valide. |
| ○ | L'exercice contient encore `TODO` ou aucune solution. |
| ✗ | Un fichier manque ou contient une erreur de syntaxe. |

> [!NOTE]
> Le contrôle automatique vérifie la présence du travail et la syntaxe. Le formateur évalue aussi la logique, l'autonomie et ton explication orale.
