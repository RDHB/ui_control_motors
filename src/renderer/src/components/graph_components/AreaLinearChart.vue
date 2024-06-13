<template>
    <div id="idCanvas" ref="canvasRef" class="flex flex-col justify-center justify-items-center svg-container">
        <svg ref="svgRef" :viewBox="'0 0 960 500'" preserveAspectRatio="xMinYMin meet"></svg>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
    import * as d3 from 'd3'
    import { ref, onMounted } from 'vue'
    import { extent } from 'd3-array'

    const props = defineProps({
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true
        },
        chart_data: {
            type : Array,
            // default: () => [],
        },
    })


    const canvasRef = ref()
    const svgRef = ref()
    var margin = {top: 10, right: 30, bottom: 30, left: 60}

    onMounted(() => {
        // const canvas = d3.select(canvasRef.value)
        // const svg = canvas.append("svg")
        //     .attr("width", props.width)
        //     .attr("height", props.height)
            // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 "+ props.width + " " + props.height)
        // .classed("svg-content", true);
        const svg = d3.select(svgRef.value)
        const g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        
        const scaleX = d3.scaleLinear()
            .domain(extent(props.chart_data, function(d){return d.x}))
            .range([0, props.width+margin.right])

        svg.append("g")
            // .attr("transform", "translate(0," + props.height + ")")
            .call(d3.axisBottom(scaleX))

        const scaleY = d3.scaleLinear()
            .domain(extent(props.chart_data, function(d){return d.y}))
            .range([props.height-margin.top-margin.bottom, 0])

        svg.append("g")
            .call(d3.axisRight(scaleY))

        const line = d3.line()
            .x(function(d) {return scaleX(d.x)})
            .y(function(d) {return scaleY(d.y)})
            .curve(d3.curveCardinal)
        
        svg.append("path")
            .datum(props.chart_data)
            .attr("class", "line") 
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line)
    })


    // import { scaleLinear } from 'd3-scale'
    // import { max } from 'd3-array'
    // import { line } from 'd3-shape'
    // import { computed } from 'vue';
    

    // const MARGIN = 25

    // const props = defineProps({
    //     width: {
    //         type: Number,
    //         required: true,
    //     },
    //     heigth: {
    //         type: Number,
    //         required: true
    //     },
    //     chart_data: {
    //         type : Array,
    //         default: () => [],
    //     },
    // })

    // // defining graph
    // const scaleX = computed(() => {
    //     return scaleLinear()
    //         .domain([0, props.chart_data.length - 1])
    //         .range([MARGIN, props.width - MARGIN])
    // })

    // const scaleY = computed(() => {
    //     return scaleLinear()
    //         .domain([0, max(props.chart_data)])
    //         .range([props.heigth - MARGIN, MARGIN])
    // })

    // const linePathGenerator = computed(() => {
    //     return line<number>()
    //            .x((_, i) => scaleX.value(i))
    //            .y((d) => scaleY.value(d))
    // })

    // const linePath = computed(() => linePathGenerator.value(props.chart_data) ?? '')


</script>