# Canvis realitzats al tema

## Renombrat del tema

El tema s'ha renombrat de `material_joapuiib` a `temaMaterialLorena`.

### Fitxers modificats:

1. **Carpeta del tema**: `material_joapuiib/` → `temaMaterialLorena/`

2. **mkdocs.yml**:
   - `theme.name`: `material-joapuiib` → `temaMaterialLorena`
   - Plugins: `material-joapuiib/*` → `temaMaterialLorena/*`
   - Extensions: `material_joapuiib.*` → `temaMaterialLorena.*`

3. **temaMaterialLorena/extensions/emoji.py**:
   - Import actualitzat per utilitzar el nou nom del tema

4. **temaMaterialLorena/templates/partials/nav-item.html**:
   - Referències al plugin actualitzades

5. **requirements.txt**:
   - Comentada la dependència externa (el tema és ara local)

6. **Documentació**:
   - `CLEANUP_GUIDE.md`: Referències actualitzades
   - `docs/files/README.md`: Referències actualitzades
   - `temaMaterialLorena/README.md`: Referències actualitzades

## Funcionament

El tema ara és completament local i es carrega des de la carpeta `temaMaterialLorena/`.
No és necessari instal·lar cap paquet extern de PyPI.

Tots els plugins i extensions funcionen amb el nou nom:
- `temaMaterialLorena/enviorment`
- `temaMaterialLorena/functions`
- `temaMaterialLorena/sectionicons`
- `temaMaterialLorena.extensions.emoji`
- `temaMaterialLorena.extensions.collapse_code`
