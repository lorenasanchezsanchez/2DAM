# Tema personalitzat Material for MkDocs

Aquest template utilitza un tema personalitzat basat en Material for MkDocs amb funcionalitats addicionals per a projectes educatius.

## 📁 Estructura de la carpeta `temaMaterialLorena/`

```
temaMaterialLorena/
├── extensions/         # Extensions de Python per Markdown
│   ├── collapse_code.py  # Col·lapsar blocs de codi
│   └── emoji.py          # Gestió d'emojis personalitzats
├── plugins/           # Plugins personalitzats
│   ├── badges.py        # Sistema de badges
│   ├── enviorment.py    # Variables d'entorn
│   ├── filters.py       # Filtres Jinja2
│   ├── functions.py     # Funcions per carregar fitxers
│   └── sectionicons.py  # Icones per seccions
└── templates/         # Plantilles HTML personalitzades
    ├── document.html      # Plantilla per documents
    ├── exam.html          # Plantilla per exàmens
    ├── slides.html        # Plantilla per transparències
    └── ...
```

## 🎯 Funcionalitats principals

### 1. Extensions de Markdown

- **collapse_code**: Permet col·lapsar i expandir blocs de codi llargs
- **emoji**: Millora la gestió d'emojis amb suport per icones personalitzades

### 2. Plugins

- **enviorment**: Proporciona variables d'entorn per utilitzar als documents
- **functions**: Permet carregar i incloure fitxers externs
- **sectionicons**: Afegeix icones a les seccions de navegació
- **badges**: Sistema per afegir badges i etiquetes
- **filters**: Filtres addicionals per Jinja2

### 3. Templates

- **document.html**: Plantilla principal per documents amb portada
- **slides.html**: Per crear presentacions
- **exam.html**: Format especial per exàmens
- **programacio.html**: Per material de programació

## 🔧 Com utilitzar-lo

Aquest tema s'activa automàticament a `mkdocs.yml`:

```yaml
theme:
  name: temaMaterialLorena
  custom_dir: overrides
```

Pots personalitzar el comportament afegint configuracions a `overrides/`.

## ⚠️ Important

**NO elimines aquesta carpeta** si vols que el template funcioni correctament. És essencial per a moltes de les funcionalitats educatives avançades.

Si necessites modificar alguna funcionalitat:

1. Consulta la documentació oficial de Material for MkDocs
2. Modifica els fitxers a `overrides/` en lloc de `temaMaterialLorena/`
3. Crea nous plugins o extensions a la teua pròpia carpeta

## 📚 Més informació

- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [MkDocs](https://www.mkdocs.org/)
- [Python Markdown Extensions](https://facelessuser.github.io/pymdown-extensions/)
