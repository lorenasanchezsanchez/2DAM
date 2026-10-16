# 📚 Template MkDocs - Material for MkDocs

[![Made with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?style=for-the-badge&logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Template professional per a crear projectes de documentació educativa amb MkDocs i Material for MkDocs. Ideal per a cursos, tutorials i material didàctic.

## ✨ Característiques

- 🎨 **Disseny modern i responsive** amb Material for MkDocs
- 🌓 **Mode fosc/clar** automàtic
- � **Totalment responsive** per a mòbils i tauletes
- 🔍 **Cerca integrada** en tot el contingut
- 📊 **Suport per a diagrames** (Mermaid, draw.io)
- 🧮 **Fórmules matemàtiques** amb KaTeX
- 💬 **Sistema de comentaris** opcional amb giscus
- 🚀 **Publicació automàtica** amb GitHub Pages
- ✅ **Corrector ortogràfic** en valencià
- 🎯 **Estructura organitzada** per a cursos educatius
- 🔧 **Altament personalitzable**

## �📋 Què inclou aquest template?

Aquest template proporciona una estructura completa per a crear material didàctic amb:

- **MkDocs** amb el tema **Material for MkDocs**
- **Tema personalitzat** amb funcionalitats educatives addicionals
- **GitHub Actions** per a publicació automàtica amb GitHub Pages
- **Corrector ortogràfic** amb PySpelling (opcional)
- **Extensions** de Markdown: taules, emojis, diagrames, matemàtiques, codi, etc.
- **Estructura** d'exemple per a cursos amb múltiples unitats
- **Templates** per a documents, transparències i més

## 🚀 Inici ràpid

### 1. Usa aquest template

Fes clic en el botó "Use this template" a GitHub per a crear un nou repositori.

### 2. Personalitza el projecte

Edita els següents fitxers amb la informació del teu projecte:

- `mkdocs.yml`: Canvia `site_name`, `site_author`, `site_url`, `repo_name` i `repo_url`
- `docs/index.md`: Actualitza la pàgina principal amb la informació del teu curs
- `docs/informacio.md`: Actualitza la informació del projecte
- `overrides/partials/cover.html`: Personalitza la portada (logos, etc.)

### 3. Instal·la les dependències

```bash
pip install -r requirements.txt
```

### 4. Prova en local

```bash
mkdocs serve
```

Obri el navegador en `http://127.0.0.1:8000` (o el port indicat al fitxer `mkdocs.yml`).

### 5. Publicació amb GitHub Pages

Aquest repositori està configurat per a publicar automàticament el lloc de MkDocs amb GitHub Pages:

- Cada vegada que es fa un push a la branca `main`, GitHub Actions construeix el lloc i el desplega.
- El flux de treball està en `.github/workflows/pages.yml`.
- Activa GitHub Pages al teu repositori: **Settings** → **Pages** → **Source**: GitHub Actions

## 📚 Documentació

- 📖 **[TEMPLATE_INSTRUCTIONS.md](TEMPLATE_INSTRUCTIONS.md)**: Guia completa de personalització
- 🧹 **[CLEANUP_GUIDE.md](CLEANUP_GUIDE.md)**: Què pots eliminar del template

## 🎓 Exemples d'ús

Aquest template és ideal per a:

- 📘 Material didàctic per a cursos
- 📝 Apunts d'assignatures
- 🎯 Tutorials i guies pràctiques
- 📊 Documentació de projectes educatius
- 🏫 Contingut per a plataformes d'aprenentatge

## 🤝 Contribucions

Les contribucions són benvingudes! Si tens suggeriments o millores:

1. Fes un fork del projecte
2. Crea una branca per a la teua funcionalitat (`git checkout -b feature/nova-funcionalitat`)
3. Fes commit dels canvis (`git commit -m 'Afegeix nova funcionalitat'`)
4. Puja els canvis (`git push origin feature/nova-funcionalitat`)
5. Obri una Pull Request

## 📄 Llicència

Aquest template està llicenciat sota [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Pots utilitzar-lo i modificar-lo lliurement per a projectes educatius no comercials.

## 🙏 Crèdits

- Basat en [MkDocs](https://www.mkdocs.org/) i [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- Corrector ortogràfic: Diccionaris de [Softcatalà](https://www.softcatala.org/)

## ⭐ Si t'agrada...

Si aquest template t'ha sigut útil, dona-li una estrella ⭐ al repositori!
