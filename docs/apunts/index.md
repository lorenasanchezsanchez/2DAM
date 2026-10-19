# Apunts

Los apuntes de este curso están divididos en los siguientes bloques:

- [[introduccio-index]]
- [[branques-index]]
{% if not config.extra.publicado %}
- [[remots-index]]
- [[avancat-index]]
- [[estrategies-index]]
- [[projectes-index]]
- [[educativa-index]]
{% endif %}

## Estructura recomendada

Cada bloque o unidad puede tener su propia carpeta con:

- `index.md`: Página de inicio del bloque con un resumen y enlaces a los temas
- Archivos de contenido (teoría, ejercicios, ejemplos, etc.)
- `transparencies.md`: Presentación para clase (opcional)
- `exercici.md`: Ejercicios prácticos
- `resum.md`: Resumen de la unidad
- Carpeta `img/`: Imágenes relacionadas con el bloque

## Ejemplos de organización

### Opción 1: Por temas
```
docs/apunts/
├── 01_introduccio/
├── 02_fonaments/
├── 03_aplicacions/
└── 04_projecte/
```

### Opción 2: Por tipo de contenido
```
docs/apunts/
├── teoria/
├── practiques/
├── exercicis/
└── projectes/
```

## Bloque de ejemplo
Hemos dejado la carpeta `01_introduccio/` como ejemplo de estructura.
Puedes modificarla o eliminarla según tus necesidades.

- Unidad 1: Ejemplo de introducción
