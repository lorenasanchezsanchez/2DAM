# Què pots eliminar del template

Si vols simplificar el template o eliminar funcionalitats que no necessites, aquest document t'indica què pots eliminar de forma segura.

## 📂 Contingut opcional

### Contingut d'exemple

**Pots eliminar:**
- `docs/apunts/01_introduccio/`: Carpeta d'exemple de la primera unitat
  - Elimina-la i crea les teues pròpies unitats

**No elimines:**
- `docs/apunts/index.md`: Manté aquest fitxer com a índex de tots els apunts

### Fitxers Python

**Pots eliminar:**
- `docs/files/`: Carpeta amb scripts Python d'exemple
  - Només si no necessites executar codi Python al teu material

**No elimines:**
- `temaMaterialLorena/`: Carpeta amb el tema personalitzat (necessària per al funcionament del template)

## 🎨 Personalització visual

### Logos i imatges

**Pots eliminar:**
- Imatges de la carpeta `overrides/img/` que no necessites
- Imatges SVG de logos específics

**Pots mantenir:**
- La carpeta `overrides/img/` buida per afegir les teues imatges

### Footer de la portada

Ja està comentat a `overrides/partials/cover.html`. No cal eliminar res més.

## 🔧 Funcionalitats opcionals

### Corrector ortogràfic

**Si no necessites corrector ortogràfic:**

1. Elimina el workflow:
   ```bash
   rm .github/workflows/spellcheck.yml
   ```

2. Elimina la configuració:
   ```bash
   rm .pyspelling.yml
   rm -r hunspell/
   ```

3. Elimina la dependència de `requirements.txt`:
   - Treu la línia `pyspelling`

### Comentaris amb giscus

Ja està comentat a `mkdocs.yml`. Si vols eliminar-ho completament:

```yaml
# Elimina o comenta tota la secció comments: del fitxer mkdocs.yml
```

### Plugins que pots desactivar

Al fitxer `mkdocs.yml`, a la secció `plugins`, pots eliminar:

- `drawio`: Si no utilitzes diagrames de draw.io
- `material/social`: Si no vols imatges de xarxes socials
- `git-revision-date-localized`: Si no vols mostrar dates de modificació
- `git-committers`: Si no vols mostrar contribuïdors

**Exemple:**
```yaml
plugins:
  # - drawio  # Comentat o eliminat
  - awesome-nav
  - macros
  # ... resta de plugins
```

### Extensions de Markdown que pots desactivar

Al fitxer `mkdocs.yml`, a la secció `markdown_extensions`, pots comentar o eliminar:

- Extensions de `pymdownx.blocks` si no les utilitzes
- `pymdownx.arithmatex` si no necessites fórmules matemàtiques
- `pymdownx.emoji` si no vols emojis
- `pymdownx.tasklist` si no necessites llistes de tasques

## 📝 Fitxers de configuració

### Fitxers que pots eliminar

**Completament opcionals:**
- `run.ps1` i `run.sh`: Scripts per executar MkDocs (pots usar directament `mkdocs serve`)
- `TEMPLATE_INSTRUCTIONS.md`: Una vegada hages configurat el template

**NO elimines:**
- `mkdocs.yml`: Configuració principal
- `requirements.txt`: Dependències necessàries
- `README.md`: Documentació del projecte

## 🌐 GitHub Actions

### Workflow de publicació

**NO elimines** `.github/workflows/pages.yml` si vols publicar automàticament amb GitHub Pages.

**Pots modificar-lo** per afegir més passos o canviar la configuració.

## 🎯 Idioma

### Canviar a un altre idioma

Si vols canviar l'idioma del valencià a un altre:

1. Modifica la secció `i18n` a `mkdocs.yml`:

```yaml
- i18n:
    languages:
      - locale: es  # Canvia 'ca' per 'es' (espanyol), 'en' (anglès), etc.
        default: true
        name: Español
        admonition_translations:
          info: Información
          note: Nota
          # ... tradueix les etiquetes
```

2. Si utilitzes corrector ortogràfic, canvia el diccionari al workflow `spellcheck.yml`

## ⚠️ Important: NO elimines

Aquests elements són essencials per al funcionament del template:

- `temaMaterialLorena/`: Tema personalitzat amb funcionalitats educatives
- `overrides/`: Plantilles HTML personalitzades (pots modificar però no eliminar)
- `docs/`: Carpeta principal del contingut
- `mkdocs.yml`: Fitxer de configuració
- `requirements.txt`: Dependències Python
- `.github/workflows/pages.yml`: Publicació automàtica (si la vols)

## 💡 Recomanacions

1. **No elimines res al principi**: Primer familiaritza't amb el template
2. **Fes còpies de seguretat**: Usa Git per fer commits abans d'eliminar coses
3. **Prova els canvis**: Després de cada eliminació, comprova que `mkdocs serve` funciona
4. **Consulta la documentació**: Si tens dubtes sobre una funcionalitat, consulta la documentació oficial

---

Si elimines alguna cosa i després la necessites, sempre pots recuperar-la des del repositori original del template o des de l'historial de Git.
