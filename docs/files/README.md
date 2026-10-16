# Fitxers d'exemple

Aquesta carpeta està preparada per emmagatzemar fitxers que vulgues utilitzar en el teu projecte.

## Ús d'aquesta carpeta

Pots utilitzar aquesta carpeta per emmagatzemar:

- Scripts Python per a exemples interactius
- Fitxers de configuració que vulgues mostrar
- Dades d'exemple per a exercicis
- Qualsevol altre fitxer que vulgues incloure al teu curs

## Fitxers actuals

- **gitconfig**: Exemple de fitxer de configuració de Git (pots eliminar-lo si no el necessites)
- **command_executor.py**: Script d'utilitat per executar comandes (pots eliminar-lo si no el necessites)

## Eliminar aquesta carpeta

Si no necessites aquesta funcionalitat, pots eliminar tota la carpeta:

```bash
rm -r docs/files/
```

I també desactivar el plugin a `mkdocs.yml` comentant o eliminant:

```yaml
- temaMaterialLorena/functions:
    load_file:
      files_dir: files
```

## Funció del plugin `functions`

El plugin `temaMaterialLorena/functions` a `mkdocs.yml` permet carregar fitxers des d'aquesta carpeta:

```yaml
- temaMaterialLorena/functions:
    load_file:
      files_dir: files
```

Això permet incloure el contingut dels fitxers directament als documents Markdown.

Si elimines aquesta carpeta i no la necessites, també pots desactivar aquest plugin.
