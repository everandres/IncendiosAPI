CREATE OR REPLACE VIEW alertas_incendios AS
SELECT i.*, jsonb_build_object(
  'type',       'Feature',
  'geometry',   ST_AsGeoJSON(ST_GeometryN(mg.geom, 1), 4)::jsonb,
  'properties', jsonb_build_object(
    'PROBABILIDAD', i."PROBABILIDAD"
  )
) AS geom
FROM incendios as i
INNER JOIN mgn_mpio_politico as mg
ON i."COD_DANE" = mg.mpio_cdpmp;
