/**
 * @module
 * @hidden
 */


import { BaseLayer, createLayer } from "game/layers";
import { createLayerTreeNode } from "data/common";
import MainDisplay from "features/resources/MainDisplay.vue";
import { createResource } from "features/resources/resource";
import { DecimalSource } from "util/bignum";
import { jsx } from "features/feature";


const id = "basiclayertemplate";
const layer = createLayer(id, function (this: BaseLayer) {
    const name = "Basic";
    const color = "#4BDC13";

    const points= createResource<DecimalSource>(0,"Point_Name");

    const treeNode = createLayerTreeNode(() => ({
        layerID: id,
        color,
    }));

    return {
        name,
        color,
        points,
        display: jsx(() => (
            <>
                <MainDisplay resource={points} color={color} />
            </>
        )),
        treeNode,
    };
});

export default layer;
