# Sprint 1Q — Category hierarchy + carousel proportion

## Why this pass exists
The discovery/motion pass improved navigation and movement, but it introduced two visual regressions:
1. large category cards were demoted by a duplicate row of compact category buttons;
2. carousel arrows sometimes became visually larger than the content they controlled.

## Correct hierarchy
**Large visual cards = primary category filter.**

**Small chips = contextual subcategory filter only.**

**Arrow controls = secondary navigation helpers.**

## Changes shipped

### Home category rail
- Restored the large visual category-card language as the main filter control.
- Converted the category area to one horizontal snap rail so all category cards remain available without wrapping into a tall grid.
- Added the full review set:
  - Todas las bicicletas
  - MTB
  - Ruta
  - Gravel
  - Urbanas
  - Eléctricas
  - Fitness
  - Commuter
  - Trekking
  - Cargo / Utility
  - Kids
  - BMX / Stunt
- Category-card clicks filter the Home catalogue in place rather than forcing a page change.
- `Mostrar todas` resets the same catalogue surface.

### Subcategories
- Removed the duplicate compact category-filter row from Sprint 1N.
- Retained compact chips only for contextual subcategories.
- MTB exposes Sport / XC / Doble suspensión / Trail light.
- Urban exposes Fitness / Commuter / Trekking / Cargo / Utility.

### Catalogue completeness in review mode
- Added concept-only review cards for Commuter, Trekking, Cargo / Utility, Kids and BMX / Stunt so every primary category has a demonstrable filtered state.
- These remain clearly labelled `Concepto visual` / `Precio por validar` and are not treated as commercial products.

### Arrow proportion
- Generic carousel arrows reduced from 40–42 px to approximately 30–32 px.
- Category rail arrows use ~28–30 px controls.
- Compact/spec rails use ~28 px controls.
- Arrow icons scale to 12–14 px depending on rail type.
- Controls stay in normal document flow with reserved space; they do not overlay product/category cards.

## Rule going forward
A navigation control must never visually compete with the content it controls. Category imagery remains the dominant object; arrows are support UI only.
