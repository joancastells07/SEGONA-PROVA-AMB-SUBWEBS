PROTOTIP COMPLET · ESCOLA DE POSTGRAU UVIC-UCC
================================================

Obre index.html.

Aquesta versió conté:
- Home
- Oferta formativa amb filtres
- Assessorament
- Actualitat
- 22 subpàgines de programa
- Plantilla comuna per a totes les fitxes
- Animacions de scroll, transicions, acordions i formularis demo
- Estructura compatible amb GitHub Pages

ARQUITECTURA
------------
index.html
oferta.html
assessorament.html
actualitat.html
assets/
  style.css
  app.js
  programs.js
programes/
  ... 22 fitxers HTML

COM MODIFICAR DADES
-------------------
Les dades de totes les fitxes són a assets/programs.js.
Cada subpàgina només indica quin 'slug' ha de carregar.
Això permet canviar la plantilla una sola vegada i aplicar-la a totes.

IMPORTANT
---------
- El logotip actual és un placeholder. Cal substituir-lo pel logotip oficial UVic-UCC.
- Els textos acadèmics detallats de mòduls són una maqueta conceptual i s'han de substituir/validar amb les fitxes oficials.
