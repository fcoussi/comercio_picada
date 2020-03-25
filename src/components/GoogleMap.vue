
<template>
  <div>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <vl-source-vector :features="features"></vl-source-vector>

        <vl-style-box>

          <vl-style-icon src="../assets/marker.png" :anchor="[.5, 1]" :scale=".3"></vl-style-icon>
        </vl-style-box>
      </vl-layer-vector>
    </vl-map>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 15,
        center: [12.492442,41.890170],
        rotation: 0,
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [12.492442,41.890170],
            },
            properties: {},
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [
                    12.483816146850586,
                    41.88866861985328
                  ],
                  [
                    12.488279342651365,
                    41.886687809812926
                  ],
                  [
                    12.489266395568846,
                    41.89032989704626
                  ],
                  [
                    12.485275268554686,
                    41.89109662579462
                  ],
                  [
                    12.483816146850586,
                    41.88866861985328
                  ]
                ]
              ]
            }
          }
        ],
      }
    },
  }
</script>